import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, personal } from '../data/portfolio.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4 py-3">
        <a href="#home" className="group inline-flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-white shadow-glow transition group-hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
            SM
          </span>
          <span className="hidden text-sm font-bold tracking-wide text-slate-950 sm:block dark:text-white">
            {personal.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="lg:hidden">
          <div className="container-shell pb-4">
            <div className="glass-panel rounded-2xl p-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-800 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
