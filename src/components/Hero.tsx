import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle,
  Zap
} from 'lucide-react';

const roles = [
  'Full-Stack Software Engineer',
  'BCA in AI & Machine Learning',
  'Next.js & React Developer',
  'Backend & PostgreSQL Architect'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-indigo-500/15 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Lines Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Role Cycler, CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Availability Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-500/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for New Projects & Opportunities
            </motion.div>

            {/* Main Greeting & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-gradient">Naman Sanil</span>
              </h1>

              {/* Animated Cycler */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mr-2">I am a</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-foreground border-b-2 border-primary pb-0.5"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Resume Summary */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Full-Stack Software Engineer & AI/ML undergraduate (BCA, SGPA 7.79) with hands-on experience shipping production web platforms using <strong className="text-foreground font-semibold">React, Next.js, Node.js, and PostgreSQL</strong>. Experienced in Razorpay HMAC-SHA256 payment infrastructure, RBAC authentication, and high-performance data systems.
            </p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="group flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>View Production Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass-card hover:bg-secondary/70 text-foreground px-6 py-3.5 rounded-xl font-semibold border border-border/80 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer w-full sm:w-auto shadow-sm"
              >
                <Download size={18} className="text-primary" />
                <span>Download Resume</span>
              </a>

              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-border transition-all cursor-pointer w-full sm:w-auto"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Interactive Card & Floating Tech Badges */}
          <motion.div 
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-70 animate-pulse" />

              {/* Main Avatar Center Card */}
              <div className="relative w-full h-full glass-card p-4 rounded-3xl border border-white/40 dark:border-slate-700/60 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10 opacity-80" />
                
                {/* Visual Avatar Card */}
                <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border-2 border-primary/40 shadow-inner flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                  
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <Terminal size={32} />
                  </div>
                  
                  <span className="text-white font-display font-bold text-lg tracking-wide">Naman Sanil</span>
                  <span className="text-xs text-blue-300 font-mono mt-0.5">BCA AI/ML • 4th Sem</span>
                </div>

                {/* Status bar */}
                <div className="relative z-10 mt-5 w-full bg-background/70 dark:bg-slate-950/60 backdrop-blur-md rounded-xl p-3 border border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-semibold text-foreground">SGPA 7.79</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">Mulki, Karnataka</span>
                </div>
              </div>

              {/* Floating Orbiting Tech Badges */}
              {/* Badge 1: React & Next.js */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-border shadow-lg z-20"
              >
                <Code2 size={18} className="text-blue-500" />
                <span className="text-xs font-semibold">React & Next.js</span>
              </motion.div>

              {/* Badge 2: AI & Python */}
              <motion.div 
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-2 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-border shadow-lg z-20"
              >
                <Cpu size={18} className="text-indigo-500" />
                <span className="text-xs font-semibold">AI Agents & PEAS</span>
              </motion.div>

              {/* Badge 3: PostgreSQL & Supabase */}
              <motion.div 
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 -right-6 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-border shadow-lg z-20"
              >
                <Database size={18} className="text-emerald-500" />
                <span className="text-xs font-semibold">PostgreSQL & Supabase</span>
              </motion.div>

              {/* Badge 4: Razorpay & Webhooks */}
              <motion.div 
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-6 -right-2 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-border shadow-lg z-20 bg-background/80"
              >
                <Zap size={16} className="text-amber-500" />
                <span className="text-xs font-semibold text-foreground">Razorpay & HMAC</span>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {
              icon: <Layers className="text-primary" size={22} />,
              label: 'Production Stack',
              value: 'React, Next.js, Node',
              highlight: 'PostgreSQL & Supabase'
            },
            {
              icon: <Cpu className="text-indigo-500" size={22} />,
              label: 'Undergraduate',
              value: 'BCA (AI & ML)',
              highlight: 'SGPA 7.79'
            },
            {
              icon: <Zap className="text-amber-500" size={22} />,
              label: 'Payment Security',
              value: 'Razorpay HMAC-SHA256',
              highlight: 'Tamper-Proof Webhooks'
            },
            {
              icon: <CheckCircle className="text-emerald-500" size={22} />,
              label: 'Shipped Systems',
              value: '2 Live Platforms',
              highlight: '120k+ Query Records'
            }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-secondary/80 text-foreground group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  {stat.highlight}
                </span>
              </div>
              <div>
                <p className="text-lg font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
