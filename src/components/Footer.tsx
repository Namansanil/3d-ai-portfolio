import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Mail } from 'lucide-react';

const GithubIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="group flex items-center gap-2 cursor-pointer select-none inline-flex"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white font-bold font-display shadow-md shadow-primary/20">
                N
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Naman<span className="text-primary">.dev</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Full-Stack Software Engineer & AI/ML undergraduate (SGPA 7.79). Shipping scalable web platforms, robust PostgreSQL/Supabase backends, and modern payment infrastructures.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com/namanksanil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
              <a 
                href="mailto:namansanil3@gmail.com" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                aria-label="Email Naman"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-display">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: 'About Me', to: 'about' },
                { name: 'Technical Skills', to: 'skills' },
                { name: 'Featured Projects', to: 'projects' },
                { name: 'Achievements', to: 'achievements' },
                { name: 'Experience & Journey', to: 'experience' },
                { name: 'Get In Touch', to: 'contact' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-slate-400 hover:text-primary transition-colors cursor-pointer text-xs font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Status badge */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-display">
              Status & Location
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-emerald-400">Available for Opportunities</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Mulki / Mangalore, Karnataka, India • Open for remote & on-site positions
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            &copy; {currentYear} Naman Sanil. Built with React & Framer Motion.
          </p>

          <Link
            to="home"
            smooth={true}
            duration={600}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </footer>
  );
}
