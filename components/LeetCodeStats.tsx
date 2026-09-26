"use client";

import { useEffect, useState } from "react";
import { leetcodeFallback, profile } from "@/lib/data";

type Stats = typeof leetcodeFallback & { source?: "live" | "cached" };

const bars: { key: keyof typeof leetcodeFallback; label: string; color: string }[] = [
  { key: "easySolved", label: "Easy", color: "bg-emerald-400" },
  { key: "mediumSolved", label: "Medium", color: "bg-amber-400" },
  { key: "hardSolved", label: "Hard", color: "bg-rose-400" },
];

export default function LeetCodeStats() {
  const [stats, setStats] = useState<Stats>(leetcodeFallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setStats(data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const max = Math.max(stats.easySolved, stats.mediumSolved, stats.hardSolved);

  return (
    <div className="glow-border rounded-2xl border border-border bg-elevated/60 p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">GET</span> /api/leetcode
        </p>
        <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${loading ? "text-muted" : "text-accent"}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${loading ? "bg-muted" : "bg-accent animate-pulse"}`} />
          {loading ? "fetching…" : stats.source === "live" ? "live" : "cached fallback"}
        </span>
      </div>

      <p className="gradient-text mt-4 font-mono text-3xl font-bold">
        {stats.totalSolved}
        <span className="bg-none font-mono text-base font-normal text-muted"> / {stats.totalQuestions} solved</span>
      </p>

      <div className="mt-5 space-y-3">
        {bars.map((b) => (
          <div key={b.key}>
            <div className="mb-1 flex justify-between font-mono text-xs text-muted">
              <span>{b.label}</span>
              <span>{stats[b.key]}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-background">
              <div
                className={`h-full rounded-full ${b.color} transition-all duration-700`}
                style={{ width: `${max ? (stats[b.key] / max) * 100 : 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <a
        href={profile.links.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block font-mono text-xs text-accent hover:underline"
      >
        view full profile →
      </a>
    </div>
  );
}
