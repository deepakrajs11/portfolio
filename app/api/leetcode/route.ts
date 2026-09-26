import { NextResponse } from "next/server";
import { leetcodeFallback } from "@/lib/data";

export const revalidate = 3600;

const USERNAME = "deepakrajs_11";

type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
  source: "live" | "cached";
};

export async function GET() {
  try {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) throw new Error(`upstream responded ${res.status}`);

    const data = await res.json();

    const stats: LeetCodeStats = {
      totalSolved: data.solvedProblem ?? data.totalSolved ?? leetcodeFallback.totalSolved,
      easySolved: data.easySolved ?? leetcodeFallback.easySolved,
      mediumSolved: data.mediumSolved ?? leetcodeFallback.mediumSolved,
      hardSolved: data.hardSolved ?? leetcodeFallback.hardSolved,
      totalQuestions: data.totalQuestions ?? leetcodeFallback.totalQuestions,
      source: "live",
    };

    return NextResponse.json(stats, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch {
    return NextResponse.json(
      { ...leetcodeFallback, source: "cached" } satisfies LeetCodeStats,
      { headers: { "Cache-Control": "public, s-maxage=60" } },
    );
  }
}
