import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepakraj.dev"),
  title: "Deepakraj S — Software Engineer",
  description:
    "Software Engineer building full-stack products — Java/Spring Boot microservices, React/Next.js frontends, production AI agents, and the AWS/Kubernetes infra underneath.",
  openGraph: {
    title: "Deepakraj S — Software Engineer",
    description:
      "Full-stack products, distributed systems, production AI agents, and cloud infra — end to end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
