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
    "Software Engineer building reliable backend systems and production AI. Java, Spring Boot, Kafka, AWS and Kubernetes.",
  openGraph: {
    title: "Deepakraj S — Software Engineer",
    description:
      "Reliable backend systems, distributed services and production AI agents, end to end.",
    type: "website",
  },
};

// Runs before first paint: light is the default, a saved choice wins. No flash.
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="dark"?"dark":"light"}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${mono.variable} bg-background font-sans text-[15px] leading-relaxed text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
