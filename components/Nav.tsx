"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const sections = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "writing", label: "writing" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-foreground">
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase().replace(" ", "-")}
        </a>

        <ul className="hidden items-center gap-7 font-mono text-[13px] text-muted md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="transition-colors hover:text-accent">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-3 py-1.5 font-mono text-[13px] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            resume.pdf
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-4 font-mono text-sm text-muted">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)} className="hover:text-accent">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="text-accent">
                resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
