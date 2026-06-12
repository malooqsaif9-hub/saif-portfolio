import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { personal } from '../data/portfolio.js';

const typingWords = ['AI & ML Enthusiast', 'Tech Enthusiast', 'Programmer', 'Aspiring Software Engineer'];

function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const pause = !deleting && letterIndex === word.length ? 1200 : 55;
    const speed = deleting ? 32 : pause;

    const timer = window.setTimeout(() => {
      if (!deleting && letterIndex === word.length) {
        setDeleting(true);
        return;
      }

      if (deleting && letterIndex === 0) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setLetterIndex((index) => index + (deleting ? -1 : 1));
    }, speed);

    return () => window.clearTimeout(timer);
  }, [deleting, letterIndex, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

export default function Hero() {
  const typedText = useTypingEffect(typingWords);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24 text-white"
    >
      <img
        src="/images/hero-ai-workspace.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950" />

      <div className="container-shell grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <span className="pill border-white/15 bg-white/10 text-brand-50">
            <Sparkles size={16} aria-hidden="true" />
            {personal.role}
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {personal.headline}
          </h1>

          <p className="mt-5 max-w-3xl text-lg font-semibold text-brand-100 sm:text-xl">
            {personal.subtitle}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            I am a computer science student focused on building practical software,
            learning intelligent systems, and turning AI and ML concepts into useful,
            user-friendly applications.
          </p>

          <div className="mt-6 h-8 text-lg font-bold text-brand-200" aria-label="Animated roles">
            <span>{typedText}</span>
            <span className="ml-1 inline-block animate-pulse text-brand-300">|</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={personal.resumePath} download className="primary-btn">
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="secondary-btn border-white/20 bg-white/10 text-white hover:text-white">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
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
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-400/20"
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <div className="ml-auto max-w-md animate-float rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-300 text-xl font-black text-slate-950">
                AI
              </div>
              <div>
                <p className="text-sm text-slate-300">Currently based in</p>
                <p className="flex items-center gap-2 font-semibold">
                  <MapPin size={16} aria-hidden="true" />
                  {personal.location}
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ['Degree', 'B.Tech CSE'],
                ['Focus', 'AI & ML'],
                ['College', 'LNCT Bhopal'],
                ['Goal', 'Software Engineer']
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-100">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
