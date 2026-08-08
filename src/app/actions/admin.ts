"use server";

import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const credentialsSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export type AdminCredentialsInput = z.infer<typeof credentialsSchema>;

/**
 * Validates admin credentials and logs in the user by setting an HTTP-Only session cookie.
 */
export async function loginAdmin(data: AdminCredentialsInput) {
  try {
    const { username, password } = data;

    // Fetch existing credentials, otherwise fall back to default
    const adminUser = await db.adminUser.findFirst();
    const activeUsername = adminUser?.username ?? "admin";
    const activePassword = adminUser?.password ?? "1234";

    if (username === activeUsername && password === activePassword) {
      const cookieStore = await cookies();
      cookieStore.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });
      return { success: true };
    }

    return { success: false, error: "Invalid username or password" };
  } catch (error) {
    console.error("loginAdmin error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

/**
 * Logs out the admin by deleting the session cookie.
 */
export async function logoutAdmin() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    return { success: true };
  } catch (error) {
    console.error("logoutAdmin error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

/**
 * Updates the admin credentials in the database.
 * Requires active authentication.
 */
export async function updateAdminCredentials(data: AdminCredentialsInput) {
  try {
    // 1. Auth Check
    const cookieStore = await cookies();
    const isAuth = cookieStore.get("admin_session")?.value === "authenticated";
    if (!isAuth) {
      return { success: false, error: "Unauthorized access" };
    }

    // 2. Validate input
    const validated = credentialsSchema.parse(data);

    // 3. Update database
    await db.adminUser.upsert({
      where: { id: "admin-id" },
      update: {
        username: validated.username,
        password: validated.password,
      },
      create: {
        id: "admin-id",
        username: validated.username,
        password: validated.password,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("updateAdminCredentials error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues.map(e => e.message).join(", ") };
    }
    return { success: false, error: "Failed to update credentials." };
  }
}

/**
 * Deletes a lead inquiry from the database.
 * Requires active authentication.
 */
export async function deleteLead(leadId: string) {
  try {
    // 1. Auth Check
    const cookieStore = await cookies();
    const isAuth = cookieStore.get("admin_session")?.value === "authenticated";
    if (!isAuth) {
      return { success: false, error: "Unauthorized access" };
    }

    // 2. Delete from database
    await db.lead.delete({
      where: { id: leadId },
    });

    // 3. Revalidate path to refresh server data
    revalidatePath("/admin5467");

    return { success: true };
  } catch (error) {
    console.error("deleteLead error:", error);
    return { success: false, error: "Failed to delete lead inquiry." };
  }
}
