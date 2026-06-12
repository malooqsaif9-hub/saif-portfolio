import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { personal } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    setSubmitted(false);
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-pad bg-white dark:bg-slate-900">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let us connect and build something thoughtful."
          description="Use the form UI or reach out through email, LinkedIn, or GitHub. The form is ready to connect with a backend or form service."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside
            className="rounded-3xl bg-slate-950 p-6 text-white shadow-glow dark:bg-white dark:text-slate-950"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-2xl font-bold">Contact Details</h3>
            <p className="mt-4 leading-8 text-slate-300 dark:text-slate-700">
              I am open to learning opportunities, project collaboration, internships,
              and conversations around AI, ML, and software development.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
                { label: 'LinkedIn', value: 'LinkedIn Profile', href: personal.linkedin, icon: Linkedin },
                { label: 'GitHub', value: 'GitHub Profile', href: personal.github, icon: Github },
                { label: 'Location', value: personal.location, href: '#contact', icon: MapPin }
              ].map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' || label === 'Location' ? undefined : '_blank'}
                  rel={label === 'Email' || label === 'Location' ? undefined : 'noreferrer'}
                  className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:border-brand-300 dark:border-slate-200 dark:bg-slate-100"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-300 text-slate-950">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-100 dark:text-brand-700">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white dark:text-slate-900">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.form
            className="glass-panel rounded-3xl p-6 sm:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Email</span>
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Subject</span>
              <input
                required
                name="subject"
                value={form.subject}
                onChange={updateField}
                type="text"
                placeholder="Project, internship, or collaboration"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-slate-950 dark:text-white"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={updateField}
                rows="6"
                placeholder="Tell me what you would like to discuss..."
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-slate-950 dark:text-white"
              />
            </label>

            <button type="submit" className="primary-btn mt-6 w-full sm:w-auto">
              <Send size={18} aria-hidden="true" />
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-100">
                Message captured locally. Connect this form to Formspree, EmailJS, or your backend to receive submissions.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
