import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects, type Project } from "@/data/projects";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = getProjectBySlug(params.slug);
    if (!p) return { meta: [{ title: "Project Not Found" }] };
    return {
      meta: [
        { title: `${p.title} — Naman Sanil` },
        { name: "description", content: p.description },
      ],
    };
  },
  loader: ({ params }): { project: Project } => {
    const p = getProjectBySlug(params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-bold text-primary mb-4">404</div>
        <p className="text-muted-foreground mb-6">Project not found</p>
        <Button asChild>
          <Link to="/">← Back home</Link>
        </Button>
      </div>
    </div>
  ),
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const currentIndex = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  const statusColor =
    p.status === "in-progress"
      ? "text-amber-400 bg-amber-400/10 border-amber-400/20"
      : p.status === "live"
      ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
      : "text-blue-400 bg-blue-400/10 border-blue-400/20";

  const statusLabel =
    p.status === "in-progress" ? "In Progress" : p.status === "live" ? "Live" : "Completed";

  return (
    <div className="min-h-screen bg-background">
      {/* ── Sticky top bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-gradient font-semibold">NS</span>
            <span className="hidden sm:inline">/naman.sanil</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
              <a href="/#contact">Get in touch <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* ── Hero block ── */}
          <motion.div {...fadeUp} className="mb-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/" hash="projects" className="hover:text-primary transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-foreground">{p.title}</span>
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border ${statusColor}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {statusLabel}
              </span>
              <span className="text-xs font-mono text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {p.period}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-6">
              {p.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              {p.longDescription}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              {p.liveUrl && (
                <Button asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live
                  </a>
                </Button>
              )}
              {p.github && (
                <Button asChild variant="outline" className="border-border hover:bg-secondary">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* ── Tech stack ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-primary mb-4">
              <Layers className="h-4 w-4" /> TECH STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s: string) => (
                <Badge key={s} variant="outline" className="font-mono text-[11px] border-border bg-secondary/40 text-foreground/80 px-2.5 py-1">
                  {s}
                </Badge>
              ))}
            </div>
          </motion.section>

          {/* ── 2-col: Problem + Solution ── */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-primary mb-3">
                <Target className="h-4 w-4" /> THE PROBLEM
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{p.problem}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-primary mb-3">
                <Lightbulb className="h-4 w-4" /> THE SOLUTION
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{p.solution}</p>
            </motion.section>
          </div>

          {/* ── Overview ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-primary mb-4">01 — OVERVIEW</div>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-3xl">{p.overview}</p>
          </motion.section>

          {/* ── Features ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-primary mb-6">02 — KEY FEATURES</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.features.map((f: Project["features"][number], i: number) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.04, duration: 0.4 }}
                  className="rounded-xl border border-border bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 hover:bg-primary/[0.02] transition-all"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Code2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="font-semibold text-sm text-foreground mb-2">{f.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Architecture ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-12 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-primary mb-4">
              <Zap className="h-4 w-4" /> 03 — ARCHITECTURE
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{p.architecture}</p>
          </motion.section>

          {/* ── Challenges ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="mb-12"
          >
            <div className="font-mono text-xs text-primary mb-6">04 — TECHNICAL CHALLENGES</div>
            <div className="space-y-4">
              {p.challenges.map((c: Project["challenges"][number], i: number) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.05, duration: 0.4 }}
                  className="flex gap-4 rounded-xl border border-border bg-card/40 backdrop-blur-sm p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                    <span className="text-[10px] font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-1">{c.title}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Outcomes ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="mb-16 rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-8"
          >
            <div className="font-mono text-xs text-primary mb-6">05 — OUTCOMES</div>
            <div className="space-y-3">
              {p.outcomes.map((o: string) => (
                <div key={o} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  {o}
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Prev / Next project navigation ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="border-t border-border pt-10 flex flex-col sm:flex-row gap-4 justify-between"
          >
            {prev ? (
              <Link
                to="/projects/$slug"
                params={{ slug: prev.slug }}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 hover:border-primary/40 hover:bg-primary/[0.02] transition-all flex-1"
              >
                <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Previous</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{prev.title}</div>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            {next ? (
              <Link
                to="/projects/$slug"
                params={{ slug: next.slug }}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 hover:border-primary/40 hover:bg-primary/[0.02] transition-all flex-1 justify-end text-right"
              >
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Next</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{next.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </Link>
            ) : <div className="flex-1" />}
          </motion.div>

        </div>
      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>© 2026 Naman Sanil</div>
          <Link to="/" className="hover:text-primary transition-colors">← Back to portfolio</Link>
        </div>
      </footer>
    </div>
  );
}
