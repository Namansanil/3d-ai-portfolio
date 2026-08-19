import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, CheckCircle2, ShoppingBag, Zap } from 'lucide-react';

const timelineData = [
  {
    year: 'Jun 2026 - Present',
    period: 'Remote • Client Engagement',
    type: 'Work Experience',
    title: 'Full Stack Developer',
    institution: 'Surfersofindia',
    icon: <ShoppingBag size={20} className="text-white" />,
    color: 'bg-primary shadow-primary/30',
    description: 'Architected and built SurferOfIndia, a multi-vendor e-commerce marketplace on React.js, Next.js, Node.js/Express, PostgreSQL, and Supabase. Implemented RBAC multi-tenant seller accounts, end-to-end Razorpay payments, admin sales analytics, and Cloudflare edge performance.',
    highlights: [
      'Multi-vendor marketplace with independent buyer, seller & admin portals',
      'PostgreSQL & Supabase data layer with JWT authentication & RBAC',
      'Razorpay payment gateway integration for end-to-end checkout',
      'Admin analytics dashboard; deployed on Vercel with Cloudflare edge caching'
    ],
    tags: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Razorpay', 'Vercel', 'Cloudflare']
  },
  {
    year: 'Jan 2026 - Jun 2026',
    period: 'Remote • Client Engagement',
    type: 'Work Experience',
    title: 'Full Stack Developer',
    institution: 'MamboJambo Surf School',
    icon: <Briefcase size={20} className="text-white" />,
    color: 'bg-indigo-600 shadow-indigo-500/30',
    description: 'Engineered a high-performance booking platform supporting 120,000+ records with sub-70ms query latency. Reduced query response times by 57% through indexing & pagination, automated workflows cutting admin effort by ~90%, and built a secure Razorpay HMAC-SHA256 payment verification pipeline.',
    highlights: [
      'Supported 120,000+ records with sub-70ms filtered query performance',
      'Cut database response times by 57% (658ms down to under 281ms)',
      'PostgreSQL Row-Level Security (RLS) & transaction-safe capacity validation (0 overbookings)',
      'Reduced administrative workload by ~90% (33+ hrs/week to <4 hrs/week)',
      'Tamper-proof Razorpay payment pipeline with HMAC-SHA256 webhook signatures'
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Razorpay API', 'HMAC-SHA256', 'JWT', 'RBAC']
  },
  {
    year: 'Jun 2024 - Jun 2027',
    period: 'Currently in 4th Semester',
    type: 'Education',
    title: 'Bachelor of Computer Applications (AI & ML)',
    institution: 'SCS First Grade College, Mangalore University',
    icon: <GraduationCap size={20} className="text-white" />,
    color: 'bg-emerald-600 shadow-emerald-500/30',
    description: 'Undergraduate degree with specialized focus on Artificial Intelligence and Machine Learning. Maintaining strong academic standing with SGPA 7.79, covering AI agents, search heuristics, database management systems, data structures, and algorithms.',
    highlights: [
      'SGPA: 7.79 (4th Semester)',
      'Core coursework: Machine Learning, AI Agents, Data Structures, Algorithms, DBMS',
      'Mangalore, Karnataka, India'
    ],
    tags: ['AI & ML', 'Algorithms', 'Data Structures', 'DBMS', 'Python', 'Java']
  }
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Calendar size={13} />
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Work Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Proven production track record building scalable web applications and strong academic foundation in AI/ML.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Center Line with Gradient */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-indigo-500 to-emerald-500/60 -translate-x-1/2 rounded-full shadow-sm"></div>

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-background border-4 border-background shadow-xl z-20">
                    <div className={`w-full h-full rounded-xl flex items-center justify-center ${item.color} shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                  }`}>
                    <div className="glass-card p-6 sm:p-7 rounded-2xl hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1">
                      
                      {/* Top Badges */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground text-[11px] font-medium">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      <h4 className="text-sm font-semibold text-primary/90 mt-0.5 mb-3">
                        {item.institution} <span className="text-xs text-muted-foreground font-normal">({item.period})</span>
                      </h4>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className={`space-y-1.5 mb-4 text-xs text-muted-foreground text-left`}>
                        {item.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <Zap size={13} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {item.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[11px] font-mono bg-secondary/80 text-foreground px-2.5 py-1 rounded-md border border-border/50 flex items-center gap-1"
                          >
                            <CheckCircle2 size={11} className="text-primary" />
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
