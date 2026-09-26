"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const sections = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Blogs" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-4 z-50 flex w-full justify-center px-4">
      <nav className="glass flex w-full max-w-3xl items-center justify-between rounded-full px-2 py-2 shadow-2xl shadow-black/40">
        <a
          href="#top"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent2 to-accent3 font-mono text-xs font-bold text-black"
        >
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-1 font-mono text-[13px] text-muted md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block rounded-full px-3.5 py-1.5 transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-foreground px-4 py-1.5 font-mono text-[13px] font-medium text-background transition-transform hover:scale-105 md:block"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          className="mr-1 flex h-9 w-9 items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass absolute top-16 w-[calc(100%-2rem)] max-w-3xl rounded-3xl p-4 md:hidden">
          <ul className="flex flex-col gap-1 font-mono text-sm text-muted">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 hover:bg-white/5 hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-xl bg-foreground px-3 py-2.5 text-center font-medium text-background"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
