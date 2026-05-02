/**
 * Shared Upstash Redis client + rate limiter
 * ============================================
 * Single import for all API routes requiring rate limiting.
 */

import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { NextRequest } from 'next/server';

// ─── Redis Client ───────────────────────────────────────────────
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// ─── Rate Limiter (sliding window: 5 requests per 5 minutes) ───
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '5 m'),
  analytics: true,
  prefix: 'imcc:ratelimit',
});

// ─── Helper: Extract client IP from request ─────────────────────
export function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

// ─── Helper: Check duplicate submission via Redis ────────────────
export async function isDuplicateSubmission(
  key: string,
  ttlSeconds: number = 300
): Promise<boolean> {
  const existing = await redis.get(key);
  if (existing) return true;
  await redis.set(key, '1', { ex: ttlSeconds });
  return false;
}
