import { lazy, Suspense, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Phone, MapPin, ExternalLink, Code2, Brain, Sparkles, ArrowRight, Sun, Moon, Menu, X, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/ThemeProvider";
import { projects } from "@/data/projects";

const skills = [
  "JavaScript", "TypeScript", "Python", "React.js", "Next.js",
  "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS",
  "Razorpay API", "REST APIs", "JWT Auth", "Pandas", "Matplotlib",
  "AI Agents", "PEAS Framework", "Search Heuristics", "Claude", "Cursor",
];

const Scene3D = lazy(() => import("./Scene3D"));



const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// ─── Styled "Open Mail?" confirmation — theme-aware ──────────────────────────
function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const openMail = useCallback(() => {
    window.location.href = "mailto:namansanil3@gmail.com";
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className={`fixed inset-0 z-[60] backdrop-blur-[6px] ${isDark ? "bg-black/55" : "bg-black/25"}`}
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[61] flex items-end sm:items-center justify-center p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:pb-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-[340px] rounded-2xl overflow-hidden"
              style={{
                background: isDark
                  ? "linear-gradient(145deg, hsl(240 15% 14%), hsl(240 12% 11%))"
                  : "linear-gradient(145deg, hsl(0 0% 100%), hsl(220 20% 97%))",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.08)",
                boxShadow: isDark
                  ? "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset"
                  : "0 24px 60px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              {/* Icon + title */}
              <div className="px-6 pt-7 pb-5">
                <div
                  className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center mx-auto"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, hsl(195 70% 30% / 0.4), hsl(265 60% 35% / 0.4))"
                      : "linear-gradient(135deg, hsl(195 70% 88%), hsl(265 60% 90%))",
                    boxShadow: isDark
                      ? "0 0 24px hsl(195 80% 50% / 0.2)"
                      : "0 0 16px hsl(195 80% 70% / 0.3)",
                    border: isDark
                      ? "1px solid hsl(195 60% 50% / 0.2)"
                      : "1px solid hsl(195 60% 70% / 0.3)",
                  }}
                >
                  <Mail className={`h-5 w-5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
                </div>

                <h3 className={`text-center text-[15px] font-semibold tracking-tight ${isDark ? "text-white/90" : "text-gray-800"}`}>
                  Open Mail?
                </h3>
                <p className={`text-center text-[12.5px] mt-1.5 leading-relaxed ${isDark ? "text-white/40" : "text-gray-400"}`}>
                  <span className={`font-mono text-[11px] ${isDark ? "text-white/55" : "text-gray-500"}`}>namansanil.dev</span>
                  {" "}wants to open your mail app
                </p>
                <p className={`text-center text-[12px] font-medium mt-1 font-mono ${isDark ? "text-cyan-400/80" : "text-cyan-600/90"}`}>
                  namansanil3@gmail.com
                </p>
              </div>

              {/* Divider */}
              <div
                className="h-px"
                style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)" }}
              />

              {/* Buttons */}
              <div className="flex gap-2.5 p-4">
                <button
                  onClick={onClose}
                  className={`flex-1 h-10 rounded-xl text-[13px] font-medium transition-colors ${isDark
                    ? "text-white/55 hover:text-white/80"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                  style={{
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={openMail}
                  className="flex-1 h-10 rounded-xl text-[13px] font-semibold text-white transition-all active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(135deg, hsl(195 70% 38%), hsl(265 60% 45%))",
                    boxShadow: "0 4px 16px hsl(265 60% 45% / 0.4)",
                  }}
                >
                  Open Mail
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Nav({ onContact }: { onContact: () => void }) {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight" onClick={closeMenu}>
          <span className="text-gradient font-semibold">NS</span>
          <span className="text-muted-foreground">/naman.sanil</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Get in touch — hidden on very small, show on sm+ */}
          <Button
            size="sm"
            variant="outline"
            onClick={onContact}
            className="hidden sm:inline-flex border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            Get in touch <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {[
                ["#about", "About"],
                ["#projects", "Work"],
                ["#skills", "Stack"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="pt-2 border-t border-border/40 mt-1">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                  onClick={() => { onContact(); closeMenu(); }}
                >
                  Get in touch <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Suspense fallback={<div className="w-full h-full" />}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full min-h-[100svh] flex flex-col pt-28 pb-8 md:justify-center md:pt-16 md:pb-16">
        
        {/* Block 1: Name and Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl md:-mt-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tighter">
            Naman <br />
            <span className="text-gradient">Sanil</span>
          </h1>
        </motion.div>

        {/* Mobile middle spacer pushes info block to the bottom */}
        <div className="flex-1 md:hidden" />

        {/* Block 2: Info (Paragraph, Buttons, Metrics) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mt-8 md:mt-4 relative z-10"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Full-Stack <span className="text-foreground font-medium">AI Developer</span> &amp; Software Engineer.
            Building production-grade marketplaces, booking systems and intelligent agents with
            React, Node.js and modern AI tooling.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]">
              <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
              <a href="https://github.com/Namansanil" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
              <a href="https://www.linkedin.com/in/naman-sanil" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 text-xs font-mono text-muted-foreground">
            <div><span className="text-primary">02</span> Production Apps</div>
            <div><span className="text-primary">20+</span> Technologies</div>
            <div><span className="text-primary">BCA</span> AI &amp; ML</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground/60 tracking-widest hidden md:block">
        SCROLL ↓
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-8 md:gap-12">
        <motion.div {...fadeUp} className="md:col-span-4">
          <div className="font-mono text-xs text-primary mb-3">01 — ABOUT</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Engineer at the<br />intersection of <span className="text-gradient">AI &amp; product</span>.
          </h2>
        </motion.div>
        <motion.div {...fadeUp} className="md:col-span-7 md:col-start-6 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <p>
            I'm a BCA (AI &amp; ML) student at SCS First Grade College, Mangalore University,
            currently in my 4th semester — and a freelance full-stack developer shipping
            real production systems.
          </p>
          <p>
            My focus is building things people actually use: scalable e-commerce platforms,
            booking engines, payment integrations, and AI-assisted workflows. I care about
            clean architecture, fast iteration, and the craft of putting something live.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
            {[
              { icon: Code2, title: "Full-Stack", desc: "React, Node, PostgreSQL" },
              { icon: Brain, title: "AI Foundations", desc: "Agents, PEAS, heuristics" },
              { icon: Sparkles, title: "AI-Assisted Dev", desc: "Claude, Cursor workflows" },
              { icon: ExternalLink, title: "Shipped", desc: "Marketplaces & bookings" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card/40 p-3 sm:p-4 backdrop-blur-sm">
                <Icon className="h-5 w-5 text-primary mb-2" />
                <div className="text-foreground font-medium text-sm">{title}</div>
                <div className="text-xs text-muted-foreground mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="mb-10 md:mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs text-primary mb-3">02 — SELECTED WORK</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Things I've <span className="text-gradient">shipped</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
            Freelance and personal projects — real platforms with real users.
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 md:p-10 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.18 195 / 0.08), transparent 40%)" }}
              />
              <div className="grid md:grid-cols-12 gap-5 sm:gap-8 relative">
                <div className="md:col-span-4">
                  <div className="font-mono text-xs text-muted-foreground mb-2">{p.period}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
                  <div className="text-primary text-sm mt-1">{p.tag}</div>
                </div>
                <div className="md:col-span-8 space-y-4 sm:space-y-5">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{p.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="outline" className="font-mono text-[10px] border-border bg-secondary/40 text-muted-foreground">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors group"
                    >
                      View Case Study
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="mb-10 md:mb-12">
          <div className="font-mono text-xs text-primary mb-3">03 — STACK</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Tools of the <span className="text-gradient">trade</span>.
          </h2>
        </motion.div>
        <motion.div {...fadeUp} className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card/40 backdrop-blur-sm text-xs sm:text-sm font-mono text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="rounded-2xl sm:rounded-3xl border border-border bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-md p-8 sm:p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <div className="font-mono text-xs text-primary mb-4">04 — LET'S BUILD</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl mx-auto">
              Have an idea worth <span className="text-gradient">shipping</span>?
            </h2>
            <p className="mt-4 sm:mt-6 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              I'm open to freelance projects, internships and full-time roles in AI and full-stack engineering.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)] w-full sm:w-auto">
                <a href="mailto:namansanil3@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  <span className="truncate">namansanil3@gmail.com</span>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary w-full sm:w-auto">
                <a href="tel:+919353425319">
                  <Phone className="mr-2 h-4 w-4" /> +91 93534 25319
                </a>
              </Button>
            </div>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <a href="https://github.com/Namansanil" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="h-4 w-4" /> Namansanil
              </a>
              <a href="https://www.linkedin.com/in/naman-sanil" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" /> Naman Sanil
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Mulki, Karnataka, India
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4 text-xs font-mono text-muted-foreground">
        <div>© 2026 Naman Sanil — Engineered with React & Three.js</div>
        <div className="text-primary/70">v1.0 · built to ship</div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <div className="min-h-screen">
      <ContactModal open={contactOpen} onClose={closeContact} />
      <Nav onContact={openContact} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}