import { Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, personal } from '../data/portfolio.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 dark:border-white/10 dark:bg-slate-950">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.7fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                SM
              </span>
              <span className="font-bold text-slate-950 dark:text-white">{personal.name}</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              Built with React and Tailwind CSS. Designed as a clean, responsive
              portfolio foundation for AI, ML, software, and web development work.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Quick Links
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 transition hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Social
            </h3>
            <div className="mt-4 flex gap-3">
              {[
                { label: 'LinkedIn', href: personal.linkedin, icon: Linkedin },
                { label: 'GitHub', href: personal.github, icon: Github },
                { label: 'Email', href: `mailto:${personal.email}`, icon: Mail }
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-100"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          Copyright {year} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
