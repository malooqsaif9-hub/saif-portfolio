import { motion } from 'framer-motion';
import { Award, Download, GraduationCap, Sparkles } from 'lucide-react';
import { achievements, personal, skillGroups } from '../data/portfolio.js';
import GithubGraph from './GithubGraph.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Resume() {
  const topSkills = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)).slice(0, 12);

  return (
    <section id="resume" className="section-pad bg-slate-50 dark:bg-slate-950">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Resume"
          title="A concise snapshot of my education, skills, and direction."
          description="Download the placeholder resume now, then replace it with your final PDF when it is ready."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass-panel rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-200">
                  Resume Preview
                </p>
                <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">{personal.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{personal.role}</p>
              </div>
              <a href={personal.resumePath} download className="primary-btn">
                <Download size={18} aria-hidden="true" />
                Download
              </a>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-brand-600 dark:text-brand-200" size={22} aria-hidden="true" />
                  <h4 className="font-bold text-slate-950 dark:text-white">Education</h4>
                </div>
                <p className="mt-3 font-semibold text-slate-800 dark:text-slate-100">{personal.degree}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{personal.college}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-brand-600 dark:text-brand-200" size={22} aria-hidden="true" />
                  <h4 className="font-bold text-slate-950 dark:text-white">Core Skills</h4>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <Award className="text-brand-600 dark:text-brand-200" size={22} aria-hidden="true" />
                  <h4 className="font-bold text-slate-950 dark:text-white">Achievements Summary</h4>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-glow dark:bg-white dark:text-slate-950">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-200 dark:text-brand-700">
                Career Direction
              </p>
              <h3 className="mt-4 text-2xl font-bold">AI-aware software engineering.</h3>
              <p className="mt-4 leading-8 text-slate-300 dark:text-slate-700">
                I am working toward roles where I can build dependable software,
                understand real user problems, and use AI and ML thoughtfully to
                create better products.
              </p>
            </div>
            <GithubGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
