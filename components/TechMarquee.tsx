import { coreStack } from "@/lib/data";
import { techIcons } from "./icons";

export default function TechMarquee() {
  const items = [...coreStack, ...coreStack];

  return (
    <div className="relative overflow-hidden border-y border-border py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="animate-marquee flex w-max items-center gap-12">
        {items.map((item, i) => {
          const Icon = techIcons[item.icon];
          return (
            <div key={`${item.label}-${i}`} className="flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
              <Icon size={22} style={{ color: item.color }} />
              <span className="font-mono text-sm text-muted">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
