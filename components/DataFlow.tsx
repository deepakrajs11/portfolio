const nodes = [
  { id: "client", x: 40, y: 150, label: "Client" },
  { id: "firewall", x: 200, y: 150, label: "Firewall" },
  { id: "gateway", x: 360, y: 150, label: "Gateway" },
  { id: "auth", x: 520, y: 60, label: "Auth" },
  { id: "service", x: 520, y: 150, label: "Service" },
  { id: "queue", x: 520, y: 240, label: "Queue" },
  { id: "cache", x: 690, y: 90, label: "Cache" },
  { id: "db", x: 690, y: 210, label: "Database" },
];

const edges: [string, string][] = [
  ["client", "firewall"],
  ["firewall", "gateway"],
  ["gateway", "auth"],
  ["gateway", "service"],
  ["gateway", "queue"],
  ["service", "cache"],
  ["service", "db"],
  ["queue", "db"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function DataFlow() {
  return (
    <svg
      viewBox="0 0 760 300"
      className="h-auto w-full max-w-4xl opacity-80"
      role="img"
      aria-label="Animated diagram of data flowing from a client through a firewall, gateway, auth and services, into a cache and database — representing security, speed and reliable data handling."
    >
      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        const path = `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
        return (
          <g key={i}>
            <path d={path} stroke="rgb(var(--border))" strokeWidth={1.5} fill="none" />
            <circle r={3} fill="rgb(var(--accent))">
              <animateMotion
                dur={`${2.4 + (i % 3) * 0.6}s`}
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
                path={path}
              />
            </circle>
          </g>
        );
      })}

      {nodes.map((n, i) => {
        const isFirewall = n.id === "firewall";
        return (
          <g key={n.id} className="animate-pulse-node" style={{ animationDelay: `${i * 0.2}s` }}>
            <rect
              x={n.x - 42}
              y={n.y - 16}
              width={84}
              height={32}
              rx={8}
              fill="rgb(var(--bg-elevated))"
              stroke={isFirewall ? "rgba(239, 68, 68, 0.85)" : "rgb(var(--accent) / 0.5)"}
              strokeWidth={isFirewall ? 1.6 : 1.2}
              style={isFirewall ? { filter: "drop-shadow(0 0 6px rgba(239,68,68,0.7))" } : undefined}
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize="11"
              fontFamily="var(--font-mono)"
              fill={isFirewall ? "#fca5a5" : "rgb(var(--fg))"}
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
