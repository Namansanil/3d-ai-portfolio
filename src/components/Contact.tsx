import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Clock 
} from 'lucide-react';

const GithubIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
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

const LinkedinIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
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

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emailAddress = 'namansanil3@gmail.com';
  const phoneNumber = '+91 93534 25319';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('submitted');
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormState('idle');
      }, 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-50/50 dark:bg-slate-900/30">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

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
            <MessageSquare size={13} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Let's Build Something <span className="text-gradient">Exceptional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Whether you have a new project, an exciting opportunity to collaborate on, or just want to connect, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-display text-foreground">Direct Contact</h3>
                <p className="text-xs text-muted-foreground mt-1">Feel free to copy or click to reach out directly.</p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-secondary/60 dark:bg-slate-800/60 border border-border/70 flex items-center justify-between group hover:border-primary/40 transition-colors">
                <a 
                  href={`mailto:${emailAddress}`} 
                  className="flex items-center gap-3.5 text-foreground overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-muted-foreground font-medium">Email Address</p>
                    <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{emailAddress}</p>
                  </div>
                </a>

                <button
                  onClick={() => copyToClipboard(emailAddress, 'email')}
                  className="p-2 rounded-lg bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 border border-border/50 ml-2"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card with Copy button */}
              <div className="p-4 rounded-2xl bg-secondary/60 dark:bg-slate-800/60 border border-border/70 flex items-center justify-between group hover:border-primary/40 transition-colors">
                <a 
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-3.5 text-foreground overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-muted-foreground font-medium">Phone & WhatsApp</p>
                    <p className="text-sm font-semibold truncate group-hover:text-emerald-500 transition-colors">{phoneNumber}</p>
                  </div>
                </a>

                <button
                  onClick={() => copyToClipboard(phoneNumber, 'phone')}
                  className="p-2 rounded-lg bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 border border-border/50 ml-2"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location & Timezone info */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span>Mulki / Mangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Clock size={16} className="text-indigo-500 flex-shrink-0" />
                  <span>IST (UTC+5:30) • Rapid Response Time</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/80 flex items-center gap-3">
                <a 
                  href="https://github.com/namanksanil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all flex items-center justify-center gap-2 text-sm font-semibold border border-border/50 shadow-sm"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-secondary hover:bg-[#0A66C2] hover:text-white text-foreground transition-all flex items-center justify-center gap-2 text-sm font-semibold border border-border/50 shadow-sm"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold font-display text-foreground">Send a Direct Message</h3>
                <p className="text-xs text-muted-foreground mt-1">I will get back to you as soon as possible.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Your Name
                  </label>
                  <input 
                    id="contact-name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background/80 dark:bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/60"
                    placeholder="e.g. Alex Morgan"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Your Email
                  </label>
                  <input 
                    id="contact-email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background/80 dark:bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/60"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Subject / Opportunity
                </label>
                <input 
                  id="contact-subject"
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-background/80 dark:bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/60"
                  placeholder="e.g. Full Stack Development / Project Collaboration"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea 
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background/80 dark:bg-slate-950/60 border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder:text-muted-foreground/60"
                  placeholder="Hi Naman, I came across your portfolio and would like to discuss..."
                />
              </div>

              <motion.button 
                type="submit"
                disabled={formState !== 'idle'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
              >
                <AnimatePresence mode="wait">
                  {formState === 'submitting' && (
                    <motion.div 
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </motion.div>
                  )}
                  {formState === 'submitted' && (
                    <motion.div 
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-white"
                    >
                      <Check size={20} className="text-white" />
                      <span>Message Sent Successfully!</span>
                    </motion.div>
                  )}
                  {formState === 'idle' && (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send size={17} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
