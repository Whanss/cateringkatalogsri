function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.8-.25.8-.56v-2.02c-3.25.7-3.94-1.38-3.94-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.59-.3-5.32-1.3-5.32-5.75 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.5.12-3.08 0 0 .98-.31 3.17 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.51 3.17-1.2 3.17-1.2.64 1.58.24 2.78.12 3.08.75.82 1.2 1.85 1.2 3.12 0 4.47-2.73 5.45-5.33 5.74.42.36.8 1.08.8 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 bg-white/45 px-5 py-8 text-charcoal backdrop-blur-sm sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-charcoal/68 sm:flex-row sm:text-left">
        <p>&copy; {new Date().getFullYear()} Dapur SRI. All rights reserved.</p>
        <a
          href="https://github.com/Whanss"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 font-semibold text-white transition hover:bg-toffee hover:shadow-cta"
        >
          <GitHubIcon />
          <span>Whanss</span>
        </a>
      </div>
    </footer>
  );
}
