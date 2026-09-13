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
  const [photoTilt, setPhotoTilt] = useState({
    rotateX: 4,
    rotateY: -8,
    glareX: 50,
    glareY: 50
  });

  const handlePhotoMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    setPhotoTilt({
      rotateX: (0.5 - y) * 20,
      rotateY: (x - 0.5) * 24,
      glareX: x * 100,
      glareY: y * 100
    });
  };

  const resetPhotoTilt = () => {
    setPhotoTilt({
      rotateX: 4,
      rotateY: -8,
      glareX: 50,
      glareY: 50
    });
  };

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
          className="mx-auto w-full max-w-sm lg:ml-auto lg:max-w-md"
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <div className="[perspective:1200px]">
            <div className="animate-float">
              <div
                className="group relative rounded-3xl border border-white/15 bg-white/10 p-4 shadow-glow backdrop-blur-xl transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d]"
                onPointerMove={handlePhotoMove}
                onPointerLeave={resetPhotoTilt}
                style={{
                  transform: `rotateX(${photoTilt.rotateX}deg) rotateY(${photoTilt.rotateY}deg)`
                }}
              >
                <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-brand-300/20 blur-2xl [transform:translateZ(-36px)]" />
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900 [transform:translateZ(34px)]">
                  <img
                    src={personal.profileImage}
                    alt="Saif Malooq"
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at ${photoTilt.glareX}% ${photoTilt.glareY}%, rgba(255,255,255,0.34), transparent 38%)`
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5">
                    <p className="text-2xl font-black text-white">{personal.name}</p>
                    <p className="mt-1 text-sm font-semibold text-brand-100">AI & ML Student</p>
                  </div>
                </div>
                <span className="pointer-events-none absolute right-7 top-7 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-100 [transform:translateZ(58px)]">
                  3D Move
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-300 text-xl font-black text-slate-950">
                3D
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
