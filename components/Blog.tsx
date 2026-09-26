import { ArrowUpRight } from "lucide-react";
import { blogPosts, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import LeetCodeStats from "./LeetCodeStats";
import Reveal from "./Reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export default function Blog() {
  return (
    <section id="writing" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="05 · Writing & Practice" title="Writing, and keeping the fundamentals sharp" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.link} delay={i * 0.05}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border group flex items-start justify-between gap-4 rounded-2xl border border-border bg-elevated/60 p-5 transition-transform hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent">{post.title}</p>
                    <p className="mt-2 text-sm text-muted">{post.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
                      <span>{formatDate(post.date)}</span>
                      <span className="text-border">·</span>
                      {post.tags.map((t) => (
                        <span key={t} className="rounded-full bg-background/60 px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
                  />
                </a>
              </Reveal>
            ))}

            <a
              href={profile.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-xs text-accent hover:underline"
            >
              read more on medium →
            </a>
          </div>

          <Reveal delay={0.15}>
            <LeetCodeStats />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
