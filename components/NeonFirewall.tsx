const COLS = 16;
const ROWS = 6;

export default function NeonFirewall() {
  const blocks = Array.from({ length: COLS * ROWS });

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div
        className="grid gap-2 opacity-80"
        style={{
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      >
        {blocks.map((_, i) => (
          <span
            key={i}
            className="animate-firewall-pulse block h-2.5 w-2.5 rounded-[2px] sm:h-3 sm:w-3"
            style={{
              animationDelay: `${(i * 173) % 4000}ms`,
              animationDuration: `${2.4 + (i % 5) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="animate-firewall-scan absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-red-500/70 to-transparent blur-[2px]" />
    </div>
  );
}
