import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-brand-300/30 bg-white/10 text-xl font-black shadow-glow">
          SM
        </div>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.3em] text-brand-100">
          Loading Portfolio
        </p>
        <div className="mx-auto mt-5 h-1 w-44 overflow-hidden rounded-full bg-white/10">
          <div className="h-full origin-left animate-progress rounded-full bg-brand-300" />
        </div>
      </div>
    </motion.div>
  );
}
