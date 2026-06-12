import { motion } from 'framer-motion';
import { Brain, GraduationCap, MapPin, Target } from 'lucide-react';
import { interests, personal } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section-pad bg-slate-50 dark:bg-slate-950">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Building a strong foundation in AI, ML, and software engineering."
          description="I enjoy learning how intelligent systems work and how software can make complex ideas easier to use."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            className="glass-panel rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Professional Biography</h3>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              I am Saif Malooq, a B.Tech CSE student specializing in Artificial
              Intelligence and Machine Learning at LNCT Group of Colleges, Bhopal.
              My learning journey is centered on programming, data-driven problem
              solving, and building reliable digital products that are clean,
              useful, and accessible.
            </p>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              My career goal is to become a software engineer who can work across
              web development, backend logic, data analysis, and AI-powered systems.
              I am actively strengthening my fundamentals through projects,
              practice, and continuous learning.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE (AI & ML)' },
                { icon: MapPin, label: 'Location', value: personal.location },
                { icon: Target, label: 'Goal', value: 'Aspiring Software Engineer' }
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                  <Icon className="text-brand-500" size={22} aria-hidden="true" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.aside
            className="rounded-3xl bg-slate-950 p-6 text-white shadow-glow dark:bg-white dark:text-slate-950"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-300 text-slate-950">
              <Brain size={26} aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Areas of Interest</h3>
            <p className="mt-3 leading-7 text-slate-300 dark:text-slate-700">
              These are the domains I am most excited to keep exploring through
              coursework, self-learning, and practical projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white dark:border-slate-200 dark:bg-slate-100 dark:text-slate-800"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 dark:border-slate-200 dark:bg-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200 dark:text-brand-700">
                Education
              </p>
              <h4 className="mt-3 text-lg font-bold">{personal.degree}</h4>
              <p className="mt-2 text-sm text-slate-300 dark:text-slate-700">{personal.college}</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
