import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-white dark:bg-slate-900">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning milestones and credentials."
          description="These placeholder cards are ready for real course names, issuers, dates, certificate images, and credential URLs."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-slate-950"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate preview`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-brand-700 dark:text-brand-200">
                  <Award size={18} aria-hidden="true" />
                  <span className="text-sm font-bold">Certificate</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{certificate.title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {certificate.issuer}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={16} aria-hidden="true" />
                  {certificate.date}
                </p>
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn mt-6 w-full"
                >
                  <ExternalLink size={17} aria-hidden="true" />
                  View Credential
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
