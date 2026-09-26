import { FileDown, Mail, Newspaper, Code2 } from "lucide-react";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";
import Reveal from "./Reveal";

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.links.github, label: "github.com/deepakrajs11", icon: GitHubIcon },
  { href: profile.links.linkedin, label: "linkedin.com/in/deepakraj-s", icon: LinkedInIcon },
  { href: profile.links.medium, label: "medium.com/@deepakrajs1103", icon: Newspaper },
  { href: profile.links.leetcode, label: "leetcode.com/u/deepakrajs_11", icon: Code2 },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2 opacity-15" />
      </div>

      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">06 · Contact</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Got something worth building? <span className="gradient-text">Let&rsquo;s talk.</span>
          </h2>

          <div className="mt-9 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-xs text-muted transition-transform hover:scale-105 hover:text-foreground"
              >
                <l.icon size={14} />
                {l.label}
              </a>
            ))}
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-accent2 to-accent3 px-4 py-2.5 font-mono text-xs font-medium text-black transition-transform hover:scale-105"
            >
              <FileDown size={14} />
              download resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
