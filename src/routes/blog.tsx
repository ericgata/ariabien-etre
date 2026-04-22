import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/aria/TiltCard";

const articles = [
  {
    title: "Le silence comme thérapie",
    excerpt: "Pourquoi 10 minutes de vrai silence par jour transforment plus profondément qu'une heure de méditation guidée.",
    date: "Mars 2026",
    read: "6 min",
    hue: 80,
  },
  {
    title: "Sortir du mode survie",
    excerpt: "Le système nerveux ne ment pas. Trois pratiques de respiration pour quitter l'hypervigilance permanente.",
    date: "Février 2026",
    read: "8 min",
    hue: 30,
  },
  {
    title: "Habiter son corps",
    excerpt: "Nous vivons depuis nos pensées. Ce texte explore le retour somatique comme acte de réconciliation.",
    date: "Janvier 2026",
    read: "5 min",
    hue: 160,
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Aria Wellness" },
      { name: "description", content: "Réflexions sur le silence, le souffle et la transformation intérieure." },
      { property: "og:title", content: "Journal — Aria Wellness" },
      { property: "og:description", content: "Trois articles pour ralentir." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8">Journal</p>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.95] text-balance">
            Trois textes. <em className="italic font-light text-[var(--color-gold)]">À ralentir.</em>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="group cursor-pointer">
                <article className="rounded-3xl border border-border bg-background overflow-hidden h-full flex flex-col">
                  <div
                    className="aspect-[4/3] relative"
                    style={{
                      background: `radial-gradient(ellipse at 30% 30%, oklch(0.85 0.08 ${a.hue}), oklch(0.55 0.08 ${a.hue} / 0.8))`,
                    }}
                  >
                    <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "12px 12px",
                    }} />
                    <div className="absolute top-6 left-6 right-6 flex justify-between text-xs uppercase tracking-[0.3em] text-white/80">
                      <span>{a.date}</span>
                      <span>{a.read}</span>
                    </div>
                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h2 className="font-display text-2xl md:text-3xl leading-tight">{a.title}</h2>
                    <p className="mt-4 text-muted-foreground font-light text-sm leading-relaxed flex-1">
                      {a.excerpt}
                    </p>
                    <span className="mt-8 text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
                      Lire →
                    </span>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-32">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            La newsletter mensuelle
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-2xl md:text-4xl font-display border-b border-foreground/30 pb-2 hover:border-[var(--color-gold)] transition-colors"
          >
            S'inscrire <ArrowUpRight size={24} />
          </Link>
        </div>
      </section>
    </>
  );
}