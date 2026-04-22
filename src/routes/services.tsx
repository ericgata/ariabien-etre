import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Compass, Flower2, HeartHandshake, Wind, ArrowUpRight } from "lucide-react";
import { ScrollText } from "@/components/aria/ScrollText";

const services = [
  {
    icon: Compass,
    title: "Coaching de vie",
    kicker: "Direction",
    desc: "Un travail profond pour clarifier vos aspirations, sortir des cycles répétitifs et construire une vie alignée. Sessions individuelles de 75 minutes.",
    points: ["Cartographie des valeurs", "Plan d'action sur 90 jours", "Suivi messagerie illimité"],
    hue: 80,
  },
  {
    icon: Flower2,
    title: "Méditation guidée",
    kicker: "Présence",
    desc: "Apprendre à habiter le moment présent. Méditations sur-mesure, enregistrements personnalisés que vous gardez à vie.",
    points: ["Approche pleine conscience", "Méditations enregistrées", "Pratique quotidienne guidée"],
    hue: 160,
  },
  {
    icon: HeartHandshake,
    title: "Libération émotionnelle",
    kicker: "Libération",
    desc: "Accueillir ce qui pèse, démêler les nœuds anciens. Un espace sûr, sans jugement, pour transformer la souffrance en force.",
    points: ["Travail somatique", "Techniques EFT", "Intégration douce"],
    hue: 30,
  },
  {
    icon: Wind,
    title: "Respiration consciente",
    kicker: "Souffle",
    desc: "Le souffle comme porte d'entrée. Breathwork actif et passif pour réguler le système nerveux et libérer l'énergie bloquée.",
    points: ["Cohérence cardiaque", "Breathwork holotropique", "Pranayama adapté"],
    hue: 220,
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aria Wellness" },
      { name: "description", content: "Coaching de vie, méditation guidée, libération émotionnelle et respiration consciente à Bordeaux et en visio." },
      { property: "og:title", content: "Services — Aria Wellness" },
      { property: "og:description", content: "Quatre voies vers la transformation profonde." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="min-h-[80vh] flex items-end pb-20 px-6 pt-40">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8">Services</p>
          <ScrollText
            as="h1"
            className="font-display text-5xl md:text-8xl leading-[1.02] max-w-5xl text-balance"
          >
            Quatre pratiques. Une seule promesse : vous ramener à vous-même.
          </ScrollText>
        </div>
      </section>

      {services.map((s, i) => (
        <ServiceFullScreen key={s.title} service={s} index={i} />
      ))}

      <section className="py-32 px-6 text-center bg-background">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">Prêt(e) ?</p>
        <h2 className="font-display text-4xl md:text-6xl mb-10 max-w-3xl mx-auto leading-tight">
          Le premier appel est <em className="italic text-[var(--color-gold)]">offert</em>.
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[var(--color-charcoal)] text-[var(--color-offwhite)] text-xs uppercase tracking-[0.3em] hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] transition-colors"
        >
          Réserver mon appel <ArrowUpRight size={14} />
        </Link>
      </section>
    </>
  );
}

function ServiceFullScreen({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = service.icon;
  const dark = index % 2 === 1;
  return (
    <section
      className={`min-h-screen flex items-center px-6 py-32 relative overflow-hidden ${
        dark ? "bg-[var(--color-charcoal)] text-[var(--color-offwhite)]" : "bg-background"
      }`}
    >
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at ${index % 2 ? 80 : 20}% 50%, oklch(0.78 0.1 ${service.hue} / 0.3), transparent 60%)`,
        }}
      />
      <div className={`relative max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center ${index % 2 ? "md:flex-row-reverse" : ""}`}>
        <motion.div
          initial={{ opacity: 0, scale: 1.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className={`md:col-span-5 ${index % 2 ? "md:order-2" : ""}`}
        >
          <div
            className="aspect-square rounded-full relative flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at 30% 30%, oklch(0.78 0.1 ${service.hue} / 0.6), oklch(0.5 0.1 ${service.hue} / 0.2))`,
              boxShadow: `0 40px 120px -20px oklch(0.6 0.1 ${service.hue} / 0.5)`,
            }}
          >
            <Icon size={80} strokeWidth={1} className={dark ? "text-white" : "text-[var(--color-charcoal)]"} />
          </div>
        </motion.div>

        <div className={`md:col-span-7 ${index % 2 ? "md:order-1" : ""}`}>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">
            0{index + 1} · {service.kicker}
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05]">{service.title}</h2>
          <p className={`mt-8 text-lg font-light max-w-xl leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>
            {service.desc}
          </p>
          <ul className="mt-10 space-y-3 text-sm">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--color-gold)]" />
                <span className={dark ? "text-white/80" : "text-foreground/80"}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}