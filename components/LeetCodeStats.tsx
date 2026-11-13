"use client";

import { useEffect, useState } from "react";
import { leetcodeFallback, profile } from "@/lib/data";
import Arrow from "./Arrow";

/**
 * Renders the cached numbers immediately and swaps in live ones if the API answers.
 * No loading state: numbers changing in place is calmer than a spinner for a footnote.
 */
export default function LeetCodeStats() {
  const [s, setS] = useState(leetcodeFallback);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && typeof data.totalSolved === "number") setS(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="tabular-nums">
      <a className="link" href={profile.links.leetcode} target="_blank" rel="noopener noreferrer">
        {s.totalSolved} solved
        <Arrow />
      </a>
      <span className="text-muted">
        {" "}
        · {s.easySolved} easy · {s.mediumSolved} medium · {s.hardSolved} hard
      </span>
    </span>
  );
}
