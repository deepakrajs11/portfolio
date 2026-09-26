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
    <div className="mb-10">
      <p className="font-mono text-xs text-accent">{index}</p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-xl text-sm text-muted">{subtitle}</p>}
    </div>
  );
}
