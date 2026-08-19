import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 400);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/25 selection:text-primary relative">
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 z-[100] origin-left shadow-sm"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <ExperienceEducation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/30 border border-white/20 dark:border-slate-700/50 cursor-pointer flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
