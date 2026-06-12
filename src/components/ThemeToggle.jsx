import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function preferredTheme() {
  const saved = window.localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(preferredTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', theme);
  }, [isDark, theme]);

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-brand-200"
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
