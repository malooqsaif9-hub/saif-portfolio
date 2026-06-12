import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projects } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  const filters = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-pad bg-slate-50 dark:bg-slate-950">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Project concepts that connect learning with practical outcomes."
          description="Each card includes placeholder links and imagery that can be replaced with real repositories, demos, and screenshots."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeFilter === filter
                  ? 'bg-slate-950 text-white shadow-glow dark:bg-brand-300 dark:text-slate-950'
                  : 'border border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-brand-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-slate-900"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-200">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="secondary-btn px-3 py-2">
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="primary-btn px-3 py-2">
                      <ExternalLink size={16} aria-hidden="true" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
