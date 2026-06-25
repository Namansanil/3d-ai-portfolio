import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, ExternalLink, Code2, Brain, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Scene3D = lazy(() => import("./Scene3D"));

const skills = [
  "JavaScript", "TypeScript", "Python", "React.js", "Next.js",
  "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS",
  "Razorpay API", "REST APIs", "JWT Auth", "Pandas", "Matplotlib",
  "AI Agents", "PEAS Framework", "Search Heuristics", "Claude", "Cursor",
];

const projects = [
  {
    title: "SurferOfIndia",
    tag: "Multi-Vendor E-Commerce",
    period: "Jun 2026 — Present",
    description:
      "Scalable multi-vendor marketplace for surfboards, wetsuits and outdoor gear. Separate experiences for buyers, sellers and admins with full order, inventory and analytics workflows.",
    bullets: [
      "Seller dashboard with approval workflows",
      "Secure checkout & payment gateway integration",
      "Admin analytics, sales reports, monitoring",
      "Mobile-first responsive, real-time updates",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Tailwind", "Vercel", "Cloudflare"],
  },
  {
    title: "Mambo Jambo Surf Camp",
    tag: "Booking & Management Platform",
    period: "Jan 2026 — Jun 2026",
    description:
      "Full-stack booking system for surf lessons, accommodation and board rentals with an admin dashboard for occupancy, payments and lesson batch assignments.",
    bullets: [
      "Real-time accommodation availability",
      "Automated booking workflows",
      "Admin dashboard with guest records",
      "REST APIs for booking & operations",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "PostgreSQL", "Supabase", "Vercel"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-gradient font-semibold">NS</span>
          <span className="text-muted-foreground">/naman.sanil</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <Button asChild size="sm" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
          <a href="mailto:namansanil3@gmail.com">
            Get in touch <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Suspense fallback={<div className="w-full h-full" />}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tighter">
            Naman <br />
            <span className="text-gradient">Sanil</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Full-Stack <span className="text-foreground font-medium">AI Developer</span> & Software Engineer.
            Building production-grade marketplaces, booking systems and intelligent agents with
            React, Node.js and modern AI tooling.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]">
              <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
              <a href="https://github.com/Namansanil" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-xs font-mono text-muted-foreground">
            <div><span className="text-primary">02</span> Production Apps</div>
            <div><span className="text-primary">20+</span> Technologies</div>
            <div><span className="text-primary">BCA</span> AI & ML</div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground/60 tracking-widest">
        SCROLL ↓
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <motion.div {...fadeUp} className="md:col-span-4">
          <div className="font-mono text-xs text-primary mb-3">01 — ABOUT</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Engineer at the<br />intersection of <span className="text-gradient">AI & product</span>.
          </h2>
        </motion.div>
        <motion.div {...fadeUp} className="md:col-span-7 md:col-start-6 space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            I'm a BCA (AI & ML) student at SCS First Grade College, Mangalore University,
            currently in my 4th semester — and a freelance full-stack developer shipping
            real production systems.
          </p>
          <p>
            My focus is building things people actually use: scalable e-commerce platforms,
            booking engines, payment integrations, and AI-assisted workflows. I care about
            clean architecture, fast iteration, and the craft of putting something live.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: Code2, title: "Full-Stack", desc: "React, Node, PostgreSQL" },
              { icon: Brain, title: "AI Foundations", desc: "Agents, PEAS, heuristics" },
              { icon: Sparkles, title: "AI-Assisted Dev", desc: "Claude, Cursor workflows" },
              { icon: ExternalLink, title: "Shipped", desc: "Marketplaces & bookings" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card/40 p-4 backdrop-blur-sm">
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
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs text-primary mb-3">02 — SELECTED WORK</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Things I've <span className="text-gradient">shipped</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Freelance and personal projects — real platforms with real users.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 md:p-10 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.18 195 / 0.08), transparent 40%)" }}
              />
              <div className="grid md:grid-cols-12 gap-8 relative">
                <div className="md:col-span-4">
                  <div className="font-mono text-xs text-muted-foreground mb-2">{p.period}</div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
                  <div className="text-primary text-sm mt-1">{p.tag}</div>
                </div>
                <div className="md:col-span-8 space-y-5">
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
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
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp} className="mb-12">
          <div className="font-mono text-xs text-primary mb-3">03 — STACK</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
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
              className="px-4 py-2 rounded-full border border-border bg-card/40 backdrop-blur-sm text-sm font-mono text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
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
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-border bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-md p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <div className="font-mono text-xs text-primary mb-4">04 — LET'S BUILD</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl mx-auto">
              Have an idea worth <span className="text-gradient">shipping</span>?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              I'm open to freelance projects, internships and full-time roles in AI and full-stack engineering.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]">
                <a href="mailto:namansanil3@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> namansanil3@gmail.com
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
                <a href="tel:+919353425319">
                  <Phone className="mr-2 h-4 w-4" /> +91 93534 25319
                </a>
              </Button>
            </div>
            <div className="mt-10 flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="https://github.com/Namansanil" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="h-4 w-4" /> Namansanil
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
  return (
    <div className="min-h-screen">
      <Nav />
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