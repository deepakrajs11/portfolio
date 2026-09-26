import { FileDown, Mail, Newspaper, Code2 } from "lucide-react";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.links.github, label: "github.com/deepakrajs11", icon: GitHubIcon },
  { href: profile.links.linkedin, label: "linkedin.com/in/deepakraj-s", icon: LinkedInIcon },
  { href: profile.links.medium, label: "medium.com/@deepakrajs1103", icon: Newspaper },
  { href: profile.links.leetcode, label: "leetcode.com/u/deepakrajs_11", icon: Code2 },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs text-accent">06 · contact</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold text-foreground sm:text-3xl">
          Building something that needs a backend engineer? Let&rsquo;s talk.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-elevated px-3.5 py-2 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <l.icon size={14} />
              {l.label}
            </a>
          ))}
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3.5 py-2 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
          >
            <FileDown size={14} />
            download resume
          </a>
        </div>
      </div>
    </section>
  );
}
