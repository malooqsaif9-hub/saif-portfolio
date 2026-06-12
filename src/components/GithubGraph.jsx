import { Github } from 'lucide-react';
import { githubWeeks, personal } from '../data/portfolio.js';

const levelClass = {
  0: 'bg-slate-100 dark:bg-white/10',
  1: 'bg-emerald-100 dark:bg-emerald-900/50',
  2: 'bg-emerald-300 dark:bg-emerald-700',
  3: 'bg-emerald-500 dark:bg-emerald-500',
  4: 'bg-emerald-700 dark:bg-emerald-300'
};

export default function GithubGraph() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-slate-950 dark:text-white">
            <Github size={20} aria-hidden="true" />
            <h3 className="font-bold">GitHub Contribution Graph</h3>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Placeholder activity map. Replace it with a live GitHub widget when your username is ready.
          </p>
        </div>
        <a href={personal.github} target="_blank" rel="noreferrer" className="secondary-btn px-4 py-2">
          View GitHub
        </a>
      </div>

      <div className="mt-6 overflow-x-auto pb-1" aria-label="Contribution graph placeholder">
        <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
          {githubWeeks.flatMap((week, weekIndex) =>
            week.map((level, dayIndex) => (
              <span
                key={`${weekIndex}-${dayIndex}`}
                className={`h-4 w-4 rounded ${levelClass[level]}`}
                title={`Week ${weekIndex + 1}, day ${dayIndex + 1}: contribution level ${level}`}
              />
            ))
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className={`h-3 w-3 rounded ${levelClass[level]}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
