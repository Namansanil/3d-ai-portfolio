import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Layers, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Zap, 
  Compass, 
  ShieldCheck,
  Server,
  Cloud
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Full-Stack Software Engineer and AI/ML undergraduate with hands-on experience shipping production web platforms.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Core Narrative (Large 7 Cols) */}
          <motion.div 
            className="lg:col-span-7 glass-card p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground">BCA in AI & Machine Learning</h3>
                  <p className="text-xs text-muted-foreground font-medium">SCS First Grade College, Mangalore University • 4th Semester (SGPA 7.79)</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-foreground font-semibold">Naman Sanil</strong>, a Full-Stack Software Engineer and AI/ML undergraduate with proven experience shipping production web applications — notably <strong className="text-foreground font-semibold">SurferOfIndia</strong> (a multi-vendor marketplace) and <strong className="text-foreground font-semibold">MamboJambo Surf School</strong> (a high-performance booking system supporting 120,000+ records).
                </p>
                <p>
                  I combine freelance production engineering expertise with a deep academic foundation in Artificial Intelligence, data structures, algorithms, and database management. I specialize in building secure payment pipelines with <strong className="text-foreground font-semibold">Razorpay & HMAC-SHA256 webhooks</strong>, scalable PostgreSQL/Supabase data layers with Row-Level Security, and responsive Next.js/React frontends.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-primary" />
                <span>Mulki, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass size={15} className="text-indigo-500" />
                <span>Production Engineering & AI</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: AI & Machine Learning (5 Cols) */}
          <motion.div 
            className="lg:col-span-5 glass-card p-8 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Brain size={120} />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6 shadow-sm">
                <Brain size={24} />
              </div>
              
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                AI / ML & Intelligence Systems
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Grounding in AI agents, PEAS framework, heuristic search, data analysis with Pandas & Matplotlib, and AI-assisted workflow optimization.
              </p>
            </div>

            <div className="space-y-2">
              {[
                'AI Agents & PEAS Framework', 
                'Search Heuristics & Algorithm Design', 
                'Data Analysis with Pandas & Matplotlib',
                'AI-Assisted Engineering (Claude, Cursor)'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground bg-secondary/60 dark:bg-slate-800/60 px-3 py-2 rounded-lg">
                  <Zap size={14} className="text-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 3: Backend & Data Security Architecture (6 Cols) */}
          <motion.div 
            className="lg:col-span-6 glass-card p-8 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shadow-sm">
                <Server size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-foreground">Backend & Data Architecture</h3>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                  PostgreSQL, Supabase & Secure APIs
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Expertise in PostgreSQL indexing and query optimization (reducing latencies by 57%), Row-Level Security (RLS), RBAC access models, and transaction-safe concurrency.
            </p>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20">
                <p className="text-lg font-bold font-display text-foreground">57% Latency Cut</p>
                <p className="text-[11px] text-muted-foreground font-medium">658ms down to 281ms</p>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20">
                <p className="text-lg font-bold font-display text-foreground">120,000+ Records</p>
                <p className="text-[11px] text-muted-foreground font-medium">Sub-70ms Filter Queries</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: Modern Full Stack & Edge Deployment (6 Cols) */}
          <motion.div 
            className="lg:col-span-6 glass-card p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-sm">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-foreground">Modern Full-Stack & Edge</h3>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                  React, Next.js, Vercel & Cloudflare
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building high-conversion commerce interfaces, independent multi-tenant dashboards, and deploying on Vercel with Cloudflare for global edge caching and mobile-first delivery.
            </p>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-secondary/80 flex flex-col items-center">
                <ShieldCheck size={18} className="text-emerald-500 mb-1" />
                <span className="text-xs font-semibold">HMAC-SHA256</span>
              </div>
              <div className="p-2.5 rounded-xl bg-secondary/80 flex flex-col items-center">
                <Cloud size={18} className="text-blue-500 mb-1" />
                <span className="text-xs font-semibold">Cloudflare</span>
              </div>
              <div className="p-2.5 rounded-xl bg-secondary/80 flex flex-col items-center">
                <Layers size={18} className="text-primary mb-1" />
                <span className="text-xs font-semibold">Next.js & React</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
