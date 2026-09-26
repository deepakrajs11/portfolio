import { ArrowUpRight } from "lucide-react";
import { blogPosts, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import LeetCodeStats from "./LeetCodeStats";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export default function Blog() {
  return (
    <section id="writing" className="border-t border-border py-20">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="05 · writing & practice" title="Writing, and keeping the fundamentals sharp" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-2">
            {blogPosts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-lg border border-border bg-elevated p-5 transition-colors hover:border-accent/50"
              >
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-accent">{post.title}</p>
                  <p className="mt-2 text-sm text-muted">{post.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span className="text-border">·</span>
                    {post.tags.map((t) => (
                      <span key={t} className="rounded bg-background px-1.5 py-0.5">
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

          <div>
            <LeetCodeStats />
          </div>
        </div>
      </div>
    </section>
  );
}
