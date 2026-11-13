import { profile } from "@/lib/data";
import Arrow from "./Arrow";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div className="card p-8 sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Contact</p>
        <h2 className="mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&rsquo;s build something reliable.
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-muted">
          I&rsquo;m open to Software Engineer roles in backend, distributed systems, and AI-powered
          products. The fastest way to reach me is email.
        </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-0 lg:justify-end">
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn-outline" href={profile.links.resume} target="_blank" rel="noopener noreferrer">
            Download resume
          </a>
          <a className="link ml-1 text-sm" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
