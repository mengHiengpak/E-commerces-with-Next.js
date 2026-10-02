import { connection } from "next/server";

import { connectDB } from "@/lib/db";

/**
 * Gate every database read goes through.
 *
 * Two things happen here, in order:
 *
 * 1. `connection()` opts the current render out of static prerendering. Without
 *    it Next runs these queries during `next build` and bakes whatever the
 *    database held that day into a static page.
 * 2. `connectDB()` opens (or reuses) the single shared Mongoose connection.
 *
 * Centralised so no service can forget step one — it is the one bug that is
 * invisible in development and silently ships stale catalog pages to production.
 */
export async function ready(): Promise<void> {
  await connection();
  await connectDB();
}
