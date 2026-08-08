import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    console.log("[db-test] getting db client...");
    const db = await getDb();
    
    console.log("[db-test] executing raw query...");
    const tables = await db.$queryRawUnsafe(`
      SELECT name FROM sqlite_master WHERE type='table';
    `);

    console.log("[db-test] executing lead findMany...");
    const leads = await db.lead.findMany({ take: 5 });

    return NextResponse.json({
      success: true,
      tables,
      leadsCount: leads.length,
      leads,
    });
  } catch (error: any) {
    console.error("[db-test] error encountered:", error);
    return NextResponse.json({
      success: false,
      error: error?.message || String(error),
      stack: error?.stack || null,
      keys: Object.keys(error || {}),
    }, { status: 500 });
  }
}
