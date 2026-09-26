import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const accentClasses: Record<string, string> = {
  emerald: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  violet: "text-violet-400 border-violet-400/30 bg-violet-400/10",
  sky: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  amber: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  rose: "text-rose-400 border-rose-400/30 bg-rose-400/10",
  fuchsia: "text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/10",
  cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  slate: "text-slate-300 border-slate-400/30 bg-slate-400/10",
};

export default function Skills() {
  return (
    <section id="stack" className="border-t border-border py-20">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="02 · stack"
          title="Technology I reach for"
          subtitle="Grouped by where it sits in a system — not a wall-of-badges."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-lg border border-border bg-elevated p-5">
              <h3 className={`inline-block rounded border px-2 py-0.5 font-mono text-xs ${accentClasses[group.accent]}`}>
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-muted">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="[&:not(:last-child)]:after:content-['·'] [&:not(:last-child)]:after:ml-2 [&:not(:last-child)]:after:text-border"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
