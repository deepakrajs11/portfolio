const nodes = [
  { id: "client", x: 40, y: 150, label: "Client" },
  { id: "gateway", x: 200, y: 150, label: "API Gateway" },
  { id: "svc1", x: 380, y: 60, label: "Auth Svc" },
  { id: "svc2", x: 380, y: 150, label: "Order Svc" },
  { id: "svc3", x: 380, y: 240, label: "AI Agent" },
  { id: "kafka", x: 560, y: 150, label: "Kafka" },
  { id: "db", x: 740, y: 90, label: "Postgres" },
  { id: "cache", x: 740, y: 150, label: "Redis" },
  { id: "vector", x: 740, y: 210, label: "Vector DB" },
];

const edges: [string, string][] = [
  ["client", "gateway"],
  ["gateway", "svc1"],
  ["gateway", "svc2"],
  ["gateway", "svc3"],
  ["svc1", "kafka"],
  ["svc2", "kafka"],
  ["svc3", "kafka"],
  ["kafka", "db"],
  ["kafka", "cache"],
  ["svc3", "vector"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 800 300"
      className="h-auto w-full max-w-3xl mx-auto opacity-90"
      role="img"
      aria-label="Simplified diagram of a distributed backend: client through an API gateway to auth, order and AI-agent services, streaming through Kafka into Postgres, Redis and a vector database."
    >
      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="rgba(52,211,153,0.35)"
            strokeWidth={1.5}
            className="animate-dash"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={n.id} className="animate-pulse-node" style={{ animationDelay: `${i * 0.2}s` }}>
          <rect
            x={n.x - 46}
            y={n.y - 16}
            width={92}
            height={32}
            rx={8}
            fill="#0b0f16"
            stroke="rgba(52,211,153,0.5)"
            strokeWidth={1.2}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-mono)"
            fill="#e6edf3"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
