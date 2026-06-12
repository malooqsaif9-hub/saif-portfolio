import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      className={`mb-12 flex flex-col ${alignment}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="pill">{eyebrow}</span>}
      <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}
