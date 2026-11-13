import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  split = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** Wide screens: heading pinned in a left rail, content on the right. */
  split?: boolean;
  children: ReactNode;
}) {
  const heading = (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-accent">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-pretty text-muted">{description}</p>}
    </div>
  );

  if (split) {
    return (
      <section id={id} className="scroll-mt-16 py-12 sm:py-16 lg:grid lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">{heading}</div>
        <div className="mt-8 lg:mt-0">{children}</div>
      </section>
    );
  }

  return (
    <section id={id} className="scroll-mt-16 py-12 sm:py-16">
      {heading}
      <div className="mt-8">{children}</div>
    </section>
  );
}
