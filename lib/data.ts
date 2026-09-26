export const profile = {
  name: "Deepakraj S",
  initials: "DS",
  roles: [
    "Backend Engineer",
    "Distributed Systems",
    "AI / Agentic Systems",
    "Cloud & DevOps",
  ],
  location: "Bangalore, India",
  email: "deepakrajs1103@gmail.com",
  summary:
    "Backend-focused Software Engineer building distributed systems in Java & Spring Boot — microservices, event-driven pipelines on Kafka, financial transaction platforms, and cloud infrastructure on AWS. Also ship production AI agents with Spring AI / RAG, and I'm comfortable end-to-end when a product needs a React or Next.js frontend on top.",
  links: {
    github: "https://github.com/deepakrajs11",
    linkedin: "https://www.linkedin.com/in/deepakraj-s-01194028b/",
    medium: "https://medium.com/@deepakrajs1103",
    leetcode: "https://leetcode.com/u/deepakrajs_11/",
    resume: "/resume.pdf",
  },
};

export type SkillGroup = {
  label: string;
  accent: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    accent: "emerald",
    skills: ["Java", "Spring Boot", "Spring Framework", "REST APIs", "Microservices", "Node.js"],
  },
  {
    label: "Distributed Systems",
    accent: "violet",
    skills: ["Apache Kafka", "RabbitMQ", "Event-Driven Architecture", "Concurrency", "Multithreading"],
  },
  {
    label: "Databases",
    accent: "sky",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL Optimization", "Indexing"],
  },
  {
    label: "Cloud & DevOps",
    accent: "amber",
    skills: ["AWS (EC2, ECS, S3, Lambda, VPC)", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Linux"],
  },
  {
    label: "Observability",
    accent: "rose",
    skills: ["Prometheus", "Grafana"],
  },
  {
    label: "AI / Agentic",
    accent: "fuchsia",
    skills: ["Spring AI", "RAG", "Qdrant", "Pinecone", "Agentic AI", "Tool Calling", "MCP"],
  },
  {
    label: "Frontend",
    accent: "cyan",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Core CS",
    accent: "slate",
    skills: ["Data Structures & Algorithms", "OOP", "System Design", "Operating Systems", "Computer Networks"],
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Canopi India Private Limited",
    location: "Bangalore, India",
    period: "May 2026 – Present",
    bullets: [
      "Engineered banking compliance reporting workflows spanning 15+ interconnected modules, streaming DB reads straight to file to cut memory overhead and improve reliability.",
      "Automated recurring compliance reporting via scheduler and cron-based execution, removing manual operational intervention.",
      "Architected a three-way authorization workflow for Vendor & Channel Financing with role-based authorization matrices, 2FA verification, and automated email notifications.",
      "Built a configurable multi-step OTP authentication framework supporting email and SMS verification for secure logins.",
      "Built DD APIs covering the full transaction lifecycle — validations, state transitions, and complex financial business rules.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Lightcast India Private Limited",
    location: "Chennai, India",
    period: "January 2025 – May 2026",
    bullets: [
      "Developed microservices handling 30K+ daily requests across distributed production systems.",
      "Cut API failure rates by 15% through centralized request validation and structured exception handling.",
      "Improved service throughput by 20% using Redis caching and PostgreSQL query optimization.",
      "Rolled out Kafka-based event streaming across 10+ services, reducing inter-service latency by 30%.",
      "Hardened internal API authorization with RBAC, improving security compliance by 70%.",
      "Provisioned AWS infrastructure with Terraform, improving deployment reliability by 25%.",
      "Built Prometheus + Grafana observability dashboards, cutting incident response time by 40%.",
      "Automated bulk data refresh via AWS EventBridge scheduled triggers, cutting monthly maintenance effort by 70%.",
    ],
  },
];

export const education = {
  school: "Sona College of Technology, Salem",
  degree: "B.E., Computer Science and Engineering",
  period: "2021 – 2025",
  detail: "CGPA: 8.9 / 10.0",
};

export const certifications = [
  "AWS Solutions Architect – Associate",
  "AWS Cloud Practitioner",
  "GitLab CI/CD Certification",
  "Docker Certification",
  "Agentic AI",
  "From Java Developer to AI Engineer",
  "Software Engineering",
  "Data Structures in Java",
  "Python Programming",
  "C Programming",
  "Network Essentials",
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: "AI + Backend" | "Backend" | "Full-Stack" | "AI";
  github?: string;
  demo?: string;
  article?: string;
  featured?: boolean;
  metrics?: string[];
};

export const projects: Project[] = [
  {
    title: "Finalyzer",
    tagline: "Spring AI stock-analysis engine that never lets the model make up a number",
    description:
      "A Spring AI–powered research backend for Indian equities (NSE/BSE). A deterministic fetch/compute pipeline pulls Performance, Technical, Financial, and Ownership & Governance data from real sources; the LLM's only job is grounded narrative synthesis over that trusted bundle — never recall from its own training data. Data-source adapters are pluggable via an SPI (`*DataProvider` interfaces), so adding a new site is a new `@Component`, never an if/else chain.",
    tech: ["Java", "Spring Boot", "Spring AI", "ta4j", "Resilience4j", "Caffeine", "Jsoup"],
    category: "AI + Backend",
    featured: true,
    metrics: ["4 grounded analysis dimensions", "Pluggable data-source SPI", "Circuit breakers + caching"],
  },
  {
    title: "Career Coach AI Agent",
    tagline: "Multi-tenant AI coaching platform, 300+ active users in production",
    description:
      "An intelligent talent-guidance system built on Spring AI with tool calling, context management, and retrieval workflows. Focused on latency optimization to keep a multi-tenant agent responsive under real production load.",
    tech: ["Spring AI", "Java", "Tool Calling", "RAG"],
    category: "AI",
    featured: true,
    metrics: ["300+ active users", "Multi-tenant agent context"],
  },
  {
    title: "E-Commerce Distributed Transaction Platform",
    tagline: "Exactly-once payments across 5+ microservices at 10K+ daily transactions",
    description:
      "A Spring Boot microservices architecture using idempotency keys and deduplication checks to guarantee exactly-once payment processing. A retry-and-reconciliation pipeline with exponential backoff reconciles order/payment state across failed Kafka events, holding 99.9% data consistency across distributed services. Eureka service discovery, an API Gateway, and JWT auth tie the 5+ services together.",
    tech: ["Spring Boot", "Kafka", "Eureka", "PostgreSQL", "Docker", "JWT"],
    category: "Backend",
    featured: true,
    github: "https://github.com/deepakrajs11/ecom-ms",
    metrics: ["10K+ daily transactions", "99.9% data consistency", "5+ services"],
  },
  {
    title: "FinTrack — Expense Tracker",
    tagline: "Full-stack Next.js expense tracker built to survive real-world failure modes",
    description:
      "A production-oriented expense tracker: idempotent expense creation, JWT-in-httpOnly-cookie auth, scrypt password hashing, NUMERIC(12,2) money storage to avoid float rounding errors, indexed filter/sort queries, and CSV export. Ships with a companion Android SDK that intercepts SMS debit/credit notifications and maps them to the user's account.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Android SDK"],
    category: "Full-Stack",
    featured: true,
    github: "https://github.com/deepakrajs11/expense-tracker-app",
    demo: "https://expense-tracker-app-two-zeta.vercel.app/",
    metrics: ["Idempotent API writes", "Android SMS-parsing companion app"],
  },
  {
    title: "Unique ID Generator",
    tagline: "A Twitter Snowflake–style distributed ID service in Spring Boot",
    description:
      "Globally unique, time-ordered 64-bit IDs generated independently on every node — no centralized coordination, no auto-increment single point of contention. Bit layout: 41-bit timestamp, 5-bit datacenter, 5-bit worker, 12-bit sequence (4096 IDs/ms/node), with clock-drift protection.",
    tech: ["Java 21", "Spring Boot 3", "REST API"],
    category: "Backend",
    github: "https://github.com/deepakrajs11/unique-id-generator",
    article:
      "https://medium.com/@deepakrajs1103/from-auto-increment-ids-to-twitter-snowflake-building-a-scalable-unique-id-generator-with-spring-e7c9fc5111f3",
    metrics: ["64-bit distributed IDs", "4096 IDs/ms per node"],
  },
  {
    title: "RAG Demo",
    tagline: "Retrieval-augmented generation, end to end",
    description:
      "A hands-on exploration of retrieval-augmented generation — chunking, embeddings, vector retrieval, and grounded generation — deployed as a live demo.",
    tech: ["TypeScript", "RAG", "Vector Search"],
    category: "AI",
    demo: "https://rag-demo-smoky.vercel.app",
    github: "https://github.com/deepakrajs11/rag-demo",
  },
];

export type BlogPost = {
  title: string;
  link: string;
  date: string;
  tags: string[];
  description: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "From Auto-Increment IDs to Twitter Snowflake: Building a Scalable Unique ID Generator with Spring Boot",
    link: "https://medium.com/@deepakrajs1103/from-auto-increment-ids-to-twitter-snowflake-building-a-scalable-unique-id-generator-with-spring-e7c9fc5111f3",
    date: "2026-07-05",
    tags: ["Spring Boot", "System Design", "Architecture"],
    description:
      "Why auto-increment and UUIDs fall short at scale, and how to build a Snowflake-style ID generator from scratch.",
  },
  {
    title: "Spring Data JPA — A Complete Guide (with Real-World Example)",
    link: "https://medium.com/@deepakrajs1103/spring-data-jpa-a-complete-guide-with-real-world-example-d99a49ea95c8",
    date: "2026-05-18",
    tags: ["Spring Boot", "Java", "MySQL"],
    description:
      "Every core Spring Data JPA concept, from entity mapping to complex relationships, via a Hospital Management System example.",
  },
  {
    title: "Understanding Storage in Docker and Kubernetes: A Complete Hands-On Guide",
    link: "https://medium.com/@deepakrajs1103/understanding-storage-in-docker-and-kubernetes-a-complete-hands-on-guide-c05d9933d004",
    date: "2026-04-24",
    tags: ["Docker", "Kubernetes", "DevOps"],
    description:
      "Container storage architecture — writable layers, volumes, bind mounts — plus Kubernetes Persistent Volumes and Storage Classes.",
  },
  {
    title: "Setting Up a Multi-Node Kubernetes Cluster on AWS Using kubeadm",
    link: "https://medium.com/@deepakrajs1103/setting-up-a-multi-node-kubernetes-cluster-on-aws-using-kubeadm-b5562f84e543",
    date: "2026-04-24",
    tags: ["AWS", "Kubernetes", "Cloud"],
    description:
      "Provisioning a three-node cluster on EC2 with containerd — security configuration, dependencies, and network plugins.",
  },
  {
    title: "Kubernetes in Practice: Health Checks, Configuration, Scaling & Scheduling",
    link: "https://medium.com/@deepakrajs1103/kubernetes-in-practice-health-checks-configuration-scaling-scheduling-deep-dive-d51dfa6d5acd",
    date: "2026-04-12",
    tags: ["Kubernetes", "Cloud", "DevOps"],
    description:
      "How Kubernetes knows your app is healthy, configuration strategies, resource constraints, and autoscaling.",
  },
];

export const leetcodeFallback = {
  totalSolved: 505,
  easySolved: 224,
  mediumSolved: 268,
  hardSolved: 13,
  totalQuestions: 3600,
};
