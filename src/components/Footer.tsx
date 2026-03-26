function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-green-200/60 bg-green-50/30 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#" className="text-xl font-bold tracking-tight text-green-900">
            Jake<span className="text-green-500"> Nicoll</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "What I Do", href: "#what-i-do" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Dashboard", href: "#dashboard" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-green-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jake-nicoll-91b32a26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-green-200 text-slate-500 transition-all hover:border-green-400 hover:text-green-600"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:jake@jakeoutbound.com"
              className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-green-600"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-green-200/60 pt-6 text-center">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Jake Nicoll. jake@jakeoutbound.com
          </p>
        </div>
      </div>
    </footer>
  );
}
