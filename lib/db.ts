import mongoose from "mongoose";

/**
 * Single shared Mongoose connection.
 *
 * Next.js reloads server modules on every edit in development, and each reload
 * would otherwise open a fresh pool until MongoDB refuses new connections. The
 * promise is parked on `globalThis` so it survives those reloads.
 */

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache: MongooseCache = (globalForMongoose.mongooseCache ??= {
  conn: null,
  promise: null,
});

export async function connectDB(): Promise<typeof mongoose> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Copy .env.example to .env.local and point it at your database.",
    );
  }

  if (cache.conn) return cache.conn;

  cache.promise ??= mongoose.connect(uri, { bufferCommands: false });

  try {
    cache.conn = await cache.promise;
  } catch (error) {
    // Drop the rejected promise so the next request retries instead of
    // re-awaiting a permanently failed connection.
    cache.promise = null;
    throw error;
  }

  return cache.conn;
}

/** `true` while the connection is usable, so callers can degrade gracefully. */
export function isConnected(): boolean {
  return mongoose.connection.readyState === 1;
}