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
  title: "Deepakraj S — Backend Engineer",
  description:
    "Backend Engineer building distributed systems in Java & Spring Boot — microservices, Kafka, AWS — plus production AI agents with Spring AI/RAG.",
  openGraph: {
    title: "Deepakraj S — Backend Engineer",
    description:
      "Distributed systems, Spring Boot microservices, Kafka, AWS, and production AI agents with Spring AI/RAG.",
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
