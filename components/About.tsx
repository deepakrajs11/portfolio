import { education } from "@/lib/data";
import Reveal from "./Reveal";

const facts = [
  { value: "1+ yr", label: "in production, full-stack + backend" },
  { value: "30K+", label: "daily requests served across microservices" },
  { value: "5", label: "shipped projects, backend to AI to Android" },
  { value: "8.9 / 10", label: "CGPA, B.E. Computer Science" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">01 · About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              I build the whole product, top to bottom.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                I like owning a feature end to end — designing the Spring Boot service and its data
                model, wiring up Kafka so it plays well with everything else, and then building the
                React or Next.js interface that actually ships it to a user.
              </p>
              <p>
                Day to day that&rsquo;s meant compliance and financing workflows for a bank, distributed
                order/payment systems handling tens of thousands of requests a day, and production AI
                agents on Spring AI that ground their answers in real data instead of guessing. I&rsquo;ve
                also shipped a full-stack app with its own Android companion, and I&rsquo;m equally happy
                provisioning the AWS/Terraform infra a service runs on.
              </p>
              <p>
                What I care about is systems that stay correct under pressure — and interfaces that
                don&rsquo;t get in the way of that.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-border bg-elevated/60 px-5 py-4 text-sm text-muted">
              <span className="shrink-0 rounded-lg bg-gradient-to-br from-accent to-accent2 px-2.5 py-1 font-mono text-xs font-semibold text-black">
                EDU
              </span>
              <span>
                <span className="text-foreground">{education.school}</span> — {education.degree} ·{" "}
                {education.period} · {education.detail}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-1">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <div className="glow-border h-full rounded-2xl border border-border bg-elevated/60 p-5">
                  <p className="gradient-text font-mono text-3xl font-bold">{f.value}</p>
                  <p className="mt-1.5 text-xs text-muted">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
