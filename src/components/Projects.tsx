import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  FolderGit2, 
  Sparkles, 
  X, 
  Terminal,
  Zap,
  ArrowRight
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  architecture: string[];
  tech: string[];
  live: string;
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: 'surfersofindia',
    title: 'SurferOfIndia Multi-Vendor Marketplace',
    category: 'Full Stack & E-Commerce',
    tagline: 'Multi-tenant commerce platform with independent seller & admin portals',
    description: 'Architected and built a multi-vendor e-commerce marketplace featuring independent buyer, seller, and admin experiences on Next.js, React, and Node.js/Express, enabling merchants to autonomously manage catalogs, orders, and sales.',
    longDescription: 'Engineered a scalable multi-vendor commerce platform with strict multi-tenant isolation on PostgreSQL and Supabase. Features end-to-end checkout with Razorpay payment integration, dynamic product catalog search/filtering, comprehensive merchant analytics, and Cloudflare edge-cached deployment on Vercel.',
    features: [
      'Independent buyer, seller, and admin web experiences',
      'Multi-tenant seller accounts with autonomous inventory & order control',
      'End-to-end checkout with Razorpay payment gateway integration',
      'Admin analytics dashboard for sales reports & inventory health',
      'PostgreSQL & Supabase data layer with JWT & RBAC access control',
      'Deployed on Vercel with Cloudflare edge caching for mobile-first delivery'
    ],
    architecture: [
      'Next.js & React frontend with responsive state-driven commerce UI',
      'Node.js & Express.js REST API with modular service architecture',
      'PostgreSQL & Supabase relational data layer with RBAC security',
      'Razorpay payment gateway integration with secure transaction lifecycle',
      'Vercel edge deployment optimized with Cloudflare CDN'
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Razorpay', 'Vercel', 'Cloudflare'],
    live: '#',
    featured: true,
  },
  {
    id: 'mambojambo-booking',
    title: 'MamboJambo Surf School Booking System',
    category: 'High-Scale Production Platform',
    tagline: 'Booking engine supporting 120,000+ records with sub-70ms query latency',
    description: 'Engineered a high-performance booking management platform supporting 120,000+ records with sub-70ms filtered queries, cutting query response times by 57% and reducing administrative workload by ~90%.',
    longDescription: 'Developed an automated reservation, accommodation allocation, and WhatsApp payment reminder system for MamboJambo Surf School. Built PostgreSQL Row-Level Security (RLS), transaction-safe capacity validation (achieving 0 overbookings), and a tamper-proof Razorpay payment pipeline with HMAC-SHA256 webhook signatures.',
    features: [
      'Engineered queries with indexing & pagination, cutting response times by 57% (658ms to <281ms)',
      'Sub-70ms filtered query performance supporting 120,000+ records',
      'PostgreSQL Row-Level Security (RLS) & transaction-safe capacity locks (zero overbookings)',
      'Automated booking workflows & WhatsApp payment reminders, cutting admin effort by ~90%',
      'Tamper-proof Razorpay payment pipeline with HMAC-SHA256 webhook signature verification'
    ],
    architecture: [
      'React.js and TypeScript frontend with dynamic batch calendars',
      'Node.js & Express REST API handling concurrent booking transactions',
      'PostgreSQL & Supabase data layer with custom indexation and RLS policies',
      'HMAC-SHA256 cryptographic webhook verification in TypeScript',
      'Automated messaging pipeline for guest onboarding & reminders'
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Razorpay API', 'HMAC-SHA256', 'PostgreSQL', 'Supabase', 'Vercel', 'REST APIs'],
    live: '#',
    featured: true,
  },
  {
    id: 'ai-agents-system',
    title: 'AI Agents & Heuristic Optimization Engine',
    category: 'AI / Machine Learning',
    tagline: 'Intelligent search heuristics & PEAS agent architecture',
    description: 'Developed an intelligent agent system implementing the PEAS framework, search heuristic algorithms, and data analysis pipelines using Python, Pandas, and Matplotlib.',
    longDescription: 'Implemented autonomous agent architectures modeled around the PEAS (Performance measure, Environment, Actuators, Sensors) framework. Integrated heuristic search algorithms for path optimization and data visualization modules using Pandas and Matplotlib.',
    features: [
      'PEAS-based intelligent agent architecture',
      'Heuristic state-space search algorithms with performance benchmarking',
      'Data exploration and visualization pipelines with Pandas & Matplotlib',
      'AI-assisted development workflows leveraging Claude & Cursor'
    ],
    architecture: [
      'Python computational core with algorithm benchmark scripts',
      'Data processing layer leveraging Pandas dataframes',
      'Interactive visualization frontend interface in React'
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'AI Agents', 'Search Heuristics', 'TypeScript', 'React.js'],
    live: '#',
    featured: true,
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

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
            <FolderGit2 size={13} />
            <span>Shipped Production Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Live client systems, multi-vendor marketplaces, and high-performance data platforms built and deployed.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card flex flex-col h-full rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Card Mockup Header */}
              <div className="p-4 bg-secondary/50 dark:bg-slate-900/80 border-b border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Key Capabilities Checklist */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-primary" /> Key Capabilities
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-medium bg-secondary/80 text-foreground px-2.5 py-1 rounded-md border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-border/80 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Details & Architecture</span>
                    <ArrowRight size={14} />
                  </button>

                  {project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-secondary flex items-center gap-1 text-xs font-medium"
                      aria-label="Live Demo"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card bg-background dark:bg-slate-900 border border-border p-6 sm:p-8 rounded-3xl shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles size={12} /> {selectedProject.category}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Overview</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Zap size={14} className="text-amber-500" /> Production Highlights
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs text-foreground">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 bg-secondary/50 p-2.5 rounded-xl border border-border/50">
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Architecture */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Layers size={14} className="text-indigo-500" /> Architecture & Implementation
                  </h4>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {selectedProject.architecture.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <Terminal size={14} className="text-primary flex-shrink-0" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-lg border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-border flex items-center justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
