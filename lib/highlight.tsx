import type { ReactNode } from "react";

/** Bolds metrics like "30K+", "15%", "10+" so recruiters can scan impact at a glance. */
export function highlightMetrics(text: string): ReactNode[] {
  return text.split(/(\b\d+(?:\.\d+)?(?:K\+|\+|%))/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-foreground">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
