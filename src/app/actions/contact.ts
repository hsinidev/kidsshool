"use server";

import { db } from "@/lib/db";
import * as z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().nullable(),
  childAge: z.string().optional().nullable(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(data: z.infer<typeof contactSchema>) {
  try {
    const validated = contactSchema.parse(data);

    // Save lead to the database
    const lead = await db.lead.create({
      data: {
        parentName: validated.parentName,
        email: validated.email,
        phone: validated.phone || null,
        childAge: validated.childAge || null,
        message: validated.message,
      },
    });

    // Optional email dispatch via Resend SDK
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "KidsCool Leads <onboarding@resend.dev>",
          to: "contact@hsini.dev",
          subject: `✨ New Lead: ${validated.parentName}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eaf0fe; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
              <h2 style="color: #0a6375; margin-bottom: 5px;">KidsCool Lead Capture</h2>
              <p style="color: #888; font-size: 14px; margin-top: 0;">A new contact inquiry has been received.</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <table style="width: 100%; font-size: 14px; line-height: 1.6;">
                <tr>
                  <td style="width: 140px; font-weight: bold; color: #555;">Parent Name:</td>
                  <td>${validated.parentName}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #555;">Email Address:</td>
                  <td><a href="mailto:${validated.email}" style="color: #0a6375; text-decoration: none;">${validated.email}</a></td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #555;">Phone Number:</td>
                  <td>${validated.phone ? `<a href="tel:${validated.phone}" style="color: #0a6375; text-decoration: none;">${validated.phone}</a>` : "<em>Not provided</em>"}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #555;">Child's Age:</td>
                  <td>${validated.childAge || "<em>Not provided</em>"}</td>
                </tr>
              </table>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Inquiry / Message:</p>
              <div style="background: #fafbfe; padding: 15px; border-left: 4px solid #0a6375; margin: 10px 0; border-radius: 4px; font-style: italic; color: #444;">
                ${validated.message.replace(/\n/g, "<br />")}
              </div>
              <p style="font-size: 11px; color: #aaa; margin-top: 30px; text-align: center;">Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          `,
        });
      } catch (err) {
        console.error("Resend SDK send failed:", err);
      }
    }

    return { success: true, leadId: lead.id };
  } catch (error) {
    console.error("Server Action submitContactForm error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues.map(e => e.message).join(", ") };
    }
    return { success: false, error: "An unexpected error occurred while saving your inquiry." };
  }
}
