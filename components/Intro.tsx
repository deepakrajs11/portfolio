import { profile } from "@/lib/data";
import { stagger } from "@/lib/motion";
import Arrow from "./Arrow";

const links = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Medium", href: profile.links.medium },
];

// Real numbers from the experience and projects below.
const stats = [
  { value: "30K+", label: "daily requests across production microservices" },
  { value: "30%", label: "lower inter-service latency with Kafka streaming" },
  { value: "300+", label: "active users on a production AI agent" },
  { value: "10K+", label: "daily transactions processed exactly-once" },
];

export default function Intro() {
  return (
    <div
      id="top"
      className="grid gap-12 pt-14 sm:pt-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16"
    >
      <div>
        <p className="enter text-sm text-muted" style={stagger(0)}>
          {profile.location}
        </p>

        <h1 className="enter mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl" style={stagger(1)}>
          {profile.name}
        </h1>
        <p className="enter mt-5 max-w-2xl text-balance text-xl leading-snug sm:text-2xl" style={stagger(2)}>
          {profile.headline}
        </p>
        <p className="enter mt-5 max-w-2xl text-pretty text-muted sm:text-base" style={stagger(3)}>
          {profile.summary}
        </p>

        <div className="enter mt-8 flex flex-wrap items-center gap-3" style={stagger(4)}>
          <a className="btn" href={profile.links.resume} target="_blank" rel="noopener noreferrer">
            Download resume
          </a>
          <a className="btn-outline" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          {links.map((l) => (
            <a key={l.label} className="link text-sm" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
              <Arrow />
            </a>
          ))}
        </div>
      </div>

      <dl
        className="enter grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border"
        style={stagger(5)}
      >
        {stats.map((s) => (
          <div key={s.value} className="bg-elevated p-6">
            <dt className="text-4xl font-semibold tracking-tight tabular-nums">{s.value}</dt>
            <dd className="mt-2 text-pretty text-[13px] leading-snug text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
