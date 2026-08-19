import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Award, Star, Zap, CheckCircle2, Sparkles } from 'lucide-react';

const achievementsList = [
  {
    title: 'Academic Excellence in AI & ML',
    year: '2024 - Present',
    category: 'Academic Honor',
    subtitle: 'BCA in Artificial Intelligence & Machine Learning',
    description: 'Consistently strong academic performance in computer science, machine learning models, database architecture, and algorithms at SCS First Grade College, Mangalore University.',
    gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    border: 'border-indigo-500/30 hover:border-indigo-500/60',
    iconColor: 'text-indigo-500',
    tagBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
  },
  {
    title: 'Production Full-Stack Architecture',
    year: '2024',
    category: 'Technical Milestone',
    subtitle: 'End-to-End Web Platform Deployments',
    description: 'Architected and built complete web systems including complex booking engines with real-time occupancy tracking and multi-tenant e-commerce architectures.',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    border: 'border-blue-500/30 hover:border-blue-500/60',
    iconColor: 'text-blue-500',
    tagBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
  },
  {
    title: 'Algorithmic & Problem Solving Mastery',
    year: '2020 - Present',
    category: 'Core Competency',
    subtitle: 'Data Structures, C/C++, Python & JS',
    description: 'Strong foundation in computational logic, procedural programming, object-oriented concepts, and relational SQL database modeling.',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    border: 'border-emerald-500/30 hover:border-emerald-500/60',
    iconColor: 'text-emerald-500',
    tagBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative bg-slate-50/50 dark:bg-slate-900/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Trophy size={13} />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Academic honors, engineering milestones, and continuous technical accomplishments in software development.
          </p>
        </motion.div>

        {/* Achievements Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group border ${item.border} shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              {/* Top ambient highlight inside card */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${item.gradient} pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-slate-800/80 shadow-md flex items-center justify-center border border-border group-hover:scale-110 transition-transform">
                    {idx === 0 ? (
                      <Award size={28} className={item.iconColor} />
                    ) : idx === 1 ? (
                      <Code2 size={28} className={item.iconColor} />
                    ) : (
                      <Zap size={28} className={item.iconColor} />
                    )}
                  </div>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${item.tagBg}`}>
                    {item.year}
                  </span>
                </div>

                <div className="space-y-1 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold font-display text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-primary">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star size={13} className="text-amber-500 fill-amber-500" /> Milestone Verified
                </span>
                <span className="font-semibold text-foreground">High Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-8 glass-card rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-background to-indigo-500/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
              <Sparkles size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-foreground">Dedicated to Continuous Engineering Growth</h4>
              <p className="text-sm text-muted-foreground max-w-xl">
                Every project is built with an obsession for clean code, robust performance, and modern developer standards — constantly pushing to learn new technologies and deliver production value.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary font-bold text-sm flex items-center gap-1.5">
              <CheckCircle2 size={16} /> Production Mindset
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
