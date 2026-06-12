import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/About.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Skills from './components/Skills.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </div>
  );
}
