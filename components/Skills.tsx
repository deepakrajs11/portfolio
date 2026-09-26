import { skillGroups } from "@/lib/data";
import { skillIcons } from "@/lib/skillIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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
    <section id="stack" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="02 · Stack"
          title="Technology I reach for"
          subtitle="Every skill, with its own logo — grouped by where it sits in a system."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 4) * 0.06}>
              <div className="glow-border h-full rounded-2xl border border-border bg-elevated/60 p-5 transition-transform hover:-translate-y-1">
                <h3 className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs ${accentClasses[group.accent]}`}>
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.skills.map((s) => {
                    const entry = skillIcons[s];
                    const Icon = entry?.icon;
                    return (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-muted">
                        {Icon && (
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-background/60">
                            <Icon size={14} style={{ color: entry.color }} />
                          </span>
                        )}
                        <span>{s}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
