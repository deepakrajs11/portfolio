export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Deepakraj S. Built with Next.js & Tailwind CSS.</p>
        <p className="text-muted/70">deployed on vercel</p>
      </div>
    </footer>
  );
}
