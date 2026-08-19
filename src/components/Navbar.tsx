import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-background/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="group flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white font-bold font-display shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            N
          </div>
          <span className="text-xl font-display font-bold text-foreground tracking-tight">
            Naman<span className="text-primary">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/60 dark:bg-slate-900/60 p-1.5 rounded-full border border-border/60 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.to;
            return (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                onSetActive={() => setActiveSection(item.to)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-primary font-semibold dark:text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/50"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-amber-400" />
                ) : (
                  <Moon size={18} className="text-slate-700" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer overflow-hidden"
          >
            <Sparkles size={15} className="text-blue-200 group-hover:rotate-12 transition-transform" />
            <span>Let's Connect</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Nav Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary text-foreground border border-border/50"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-secondary text-foreground border border-border/50"
            aria-label="Open Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-background/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-border shadow-2xl px-6 py-6"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary text-base font-medium text-foreground transition-colors cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={16} className="text-muted-foreground" />
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-border">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-primary text-primary-foreground font-medium text-center shadow-md cursor-pointer"
                >
                  <Sparkles size={16} /> Let's Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
