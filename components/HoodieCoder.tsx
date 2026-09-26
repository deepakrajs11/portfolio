"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const codeLines = [70, 45, 85, 30, 60];

export default function HoodieCoder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.4, 0.25]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.svg
        style={{ y, opacity }}
        viewBox="0 0 500 520"
        className="absolute bottom-6 right-6 h-40 w-40 sm:h-52 sm:w-52 lg:h-64 lg:w-64"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="rgb(var(--accent2))" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="hoodShadow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#050507" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#050507" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="90" y="432" width="320" height="14" rx="4" fill="rgb(var(--border))" />

        <path
          d="M170,432 L150,345 Q150,300 190,292 L310,292 Q350,300 350,345 L330,432 Z"
          fill="rgb(var(--bg-elevated))"
          stroke="rgb(var(--border))"
          strokeWidth="1.5"
        />

        <path
          d="M250,118 C203,118 173,164 170,215 C168,256 184,288 211,298 L289,298 C316,288 332,256 330,215 C327,164 297,118 250,118 Z"
          fill="rgb(var(--bg-elevated))"
          stroke="rgb(var(--border))"
          strokeWidth="1.5"
        />
        <ellipse cx="250" cy="232" rx="46" ry="56" fill="url(#hoodShadow)" />

        <rect x="188" y="338" width="124" height="92" rx="8" fill="url(#screenGlow)" opacity="0.5" />
        <rect x="188" y="338" width="124" height="92" rx="8" fill="none" stroke="rgb(var(--accent) / 0.6)" strokeWidth="1.5" />

        {codeLines.map((w, i) => (
          <rect
            key={i}
            x="200"
            y={352 + i * 14}
            width={w}
            height="4"
            rx="2"
            fill="rgb(var(--accent))"
            className="animate-code-blink"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
