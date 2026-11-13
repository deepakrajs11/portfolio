import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-10">
        {/* Left: identity + nav. Right: actions. Nothing floats in the middle. */}
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center gap-2.5 font-medium">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground font-mono text-[11px] font-semibold text-background">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 text-sm lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5">
          <a className="btn btn-sm" href={profile.links.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
