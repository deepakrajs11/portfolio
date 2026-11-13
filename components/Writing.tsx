import { blogPosts, profile } from "@/lib/data";
import Section from "./Section";
import Arrow from "./Arrow";

// UTC so server and client always render the same month.
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", timeZone: "UTC" });
}

export default function Writing() {
  return (
    <Section
      id="writing"
      split
      eyebrow="Writing"
      title="Notes from the field."
      description="Systems I've built and broken, written up so the lessons stick."
    >
      <ul className="dim divide-y divide-border border-y border-border">
        {blogPosts.map((post) => (
          <li key={post.link} className="dim-item">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-row grid gap-1 py-5 sm:grid-cols-[6rem_1fr] sm:gap-6"
            >
              <time dateTime={post.date} className="pt-0.5 font-mono text-xs tabular-nums text-muted">
                {formatDate(post.date)}
              </time>
              <div>
                <h3 className="font-medium text-pretty">
                  <span className="link">{post.title}</span>
                  <Arrow />
                </h3>
                <p className="mt-1.5 text-pretty text-sm text-muted">{post.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm">
        <a className="link" href={profile.links.medium} target="_blank" rel="noopener noreferrer">
          All posts on Medium
          <Arrow />
        </a>
      </p>
    </Section>
  );
}
