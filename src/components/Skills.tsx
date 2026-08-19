import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Sparkles,
  Cpu,
  Cloud,
  Award,
  CheckCircle2
} from 'lucide-react';

interface SkillItem {
  name: string;
  level: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'aiml';
}

const skillList: SkillItem[] = [
  // Languages
  { name: 'JavaScript', level: 'Advanced', category: 'languages' },
  { name: 'TypeScript', level: 'Advanced', category: 'languages' },
  { name: 'Python', level: 'Proficient', category: 'languages' },
  { name: 'Java', level: 'Proficient', category: 'languages' },
  { name: 'C++', level: 'Intermediate', category: 'languages' },
  { name: 'C', level: 'Proficient', category: 'languages' },
  
  // Frontend
  { name: 'React.js', level: 'Advanced', category: 'frontend' },
  { name: 'Next.js', level: 'Advanced', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'frontend' },
  { name: 'HTML5 & CSS3', level: 'Advanced', category: 'frontend' },
  { name: 'Framer Motion', level: 'Proficient', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 'Advanced', category: 'backend' },
  { name: 'Express.js', level: 'Advanced', category: 'backend' },
  { name: 'REST API Design', level: 'Advanced', category: 'backend' },
  { name: 'JWT Authentication', level: 'Advanced', category: 'backend' },
  { name: 'RBAC Access Control', level: 'Advanced', category: 'backend' },
  
  // Databases
  { name: 'PostgreSQL', level: 'Advanced', category: 'database' },
  { name: 'Supabase', level: 'Advanced', category: 'database' },
  { name: 'SQLite', level: 'Proficient', category: 'database' },
  { name: 'Query Optimization & RLS', level: 'Advanced', category: 'database' },

  // Cloud & Deployment
  { name: 'Vercel', level: 'Advanced', category: 'cloud' },
  { name: 'Cloudflare Edge', level: 'Proficient', category: 'cloud' },

  // Tools & Testing
  { name: 'Git & GitHub', level: 'Advanced', category: 'tools' },
  { name: 'Postman', level: 'Proficient', category: 'tools' },
  { name: 'Razorpay API & Webhooks', level: 'Advanced', category: 'tools' },
  { name: 'Docker', level: 'Certified', category: 'tools' },

  // AI & ML
  { name: 'AI Agents & PEAS', level: 'Proficient', category: 'aiml' },
  { name: 'Search Heuristics', level: 'Proficient', category: 'aiml' },
  { name: 'Pandas', level: 'Proficient', category: 'aiml' },
  { name: 'Matplotlib', level: 'Proficient', category: 'aiml' },
  { name: 'AI-Assisted Dev (Claude, Cursor)', level: 'Advanced', category: 'aiml' },
];

const categories = [
  { id: 'all', label: 'All Skills', icon: Sparkles },
  { id: 'languages', label: 'Languages', icon: Code2 },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Databases', icon: Database },
  { id: 'cloud', label: 'Cloud & Deploy', icon: Cloud },
  { id: 'tools', label: 'Tools & Payments', icon: Wrench },
  { id: 'aiml', label: 'AI & ML', icon: Cpu },
];

const certifications = [
  {
    title: 'Learning Docker',
    issuer: 'LinkedIn Learning',
    year: '2026',
    topics: 'Containerization, images, Dockerfiles, volume mapping & deployment'
  },
  {
    title: 'Git Workflows',
    issuer: 'LinkedIn Learning',
    year: '2026',
    topics: 'Branching strategies, merge conflict resolution, rebase & team git pipelines'
  },
  {
    title: 'Practical GitHub Project Management and Collaboration',
    issuer: 'LinkedIn Learning',
    year: '2026',
    topics: 'Issue tracking, pull request management, code reviews & collaborative CI workflows'
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillList 
    : skillList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Wrench size={13} />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Technologies, frameworks, and architecture patterns I use to ship production platforms.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                  isSelected 
                    ? 'text-primary dark:text-white font-semibold' 
                    : 'text-muted-foreground hover:text-foreground bg-background/60 dark:bg-slate-800/40 border border-border/60'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-border"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={16} className="relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-4 rounded-2xl flex flex-col justify-between hover:border-primary/40 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Code2 size={16} />
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-sm font-display text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground capitalize mt-0.5">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={20} className="text-primary" />
            <h3 className="text-2xl font-bold font-display text-foreground">Verified Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-border/80 hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                  </div>
                  <h4 className="font-bold text-foreground font-display text-base mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.topics}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-border/60 flex items-center gap-1.5 text-xs text-primary font-medium">
                  <CheckCircle2 size={13} /> Completed & Verified
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
