export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-content items-center justify-center px-6 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} Deepakraj S.</p>
      </div>
    </footer>
  );
}
