import { PrismaClient } from "@prisma/client";

let _client: PrismaClient | null = null;

/**
 * Returns a PrismaClient wired to the correct database for the environment:
 *  - Production (Cloudflare Worker): uses the D1 binding via PrismaD1 adapter
 *  - Development (Node.js): uses better-sqlite3 adapter
 *
 * Call this function at the top of every Server Action / Route Handler
 * that needs database access.
 */
export async function getDb(): Promise<PrismaClient> {
  if (_client) return _client;

  if (process.env.NODE_ENV === "production") {
    // ── Cloudflare D1 (edge runtime) ────────────────────────────────────────
    const { PrismaD1 } = await import("@prisma/adapter-d1");
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");

    const ctx = getCloudflareContext({ async: false });
    const d1 = (ctx as any)?.env?.DB;

    if (!d1) {
      throw new Error(
        "[db] Cloudflare D1 binding 'DB' not found.\n" +
          "Make sure [[d1_databases]] with binding = 'DB' is in wrangler.toml."
      );
    }

    const adapter = new PrismaD1(d1);
    _client = new PrismaClient({ adapter } as any);
  } else {
    // ── Local SQLite via better-sqlite3 (dev only) ───────────────────────────
    const { PrismaBetterSQLite3 } = await import(
      "@prisma/adapter-better-sqlite3"
    );
    const url = process.env.DATABASE_URL ?? "file:./dev.db";
    const adapter = new PrismaBetterSQLite3({ url });
    _client = new PrismaClient({ adapter } as any);
  }

  return _client;
}

/**
 * @deprecated Use `getDb()` instead.
 * Legacy re-export kept so existing `db.lead.*` call-sites don't break.
 * In Server Actions / Pages you already `await` the result, so this
 * transparent proxy remains compatible.
 */
export const db = new Proxy({} as PrismaClient, {
  get(_t, model: string | symbol) {
    return new Proxy(
      {},
      {
        get(_m, method: string | symbol) {
          return async (...args: unknown[]) => {
            const client = await getDb();
            const delegate = (client as any)[model];
            if (typeof delegate?.[method as string] !== "function") {
              throw new Error(
                `PrismaClient.${String(model)}.${String(method)} is not a function`
              );
            }
            return (delegate[method as string] as Function)(...args);
          };
        },
      }
    );
  },
});
