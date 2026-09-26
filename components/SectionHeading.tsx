import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{index}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">{subtitle}</p>}
    </Reveal>
  );
}
