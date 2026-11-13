import type { CSSProperties } from "react";

/** Stagger index for `.enter` (50ms per step, see globals.css). */
export const stagger = (i: number) => ({ "--i": i }) as CSSProperties;
