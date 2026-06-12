import { motion } from 'framer-motion';
import { Brain, Code2, Database, Globe, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

const iconMap = {
  code: Code2,
  web: Globe,
  database: Database,
  tools: Wrench,
  ai: Brain
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-white dark:bg-slate-900">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit with a growing AI and software focus."
          description="Skill levels are directional indicators that show current comfort and learning progress."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.type] ?? Code2;

            return (
              <motion.article
                key={group.title}
                className="glass-panel rounded-3xl p-6"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-300/10 dark:text-brand-200">
                    <Icon size={23} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
                </div>

                <div className="mt-6 space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                        <span className="font-bold text-brand-700 dark:text-brand-200">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
