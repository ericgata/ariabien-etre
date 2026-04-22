import { motion } from "framer-motion";
import { Compass, Flower2, HeartHandshake, Wind } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Coaching de vie",
    desc: "Clarifier vos aspirations, aligner vos décisions, retrouver une direction profonde.",
    tone: "Direction",
  },
  {
    icon: Flower2,
    title: "Méditation guidée",
    desc: "Sessions immersives pour cultiver la présence et apaiser le mental.",
    tone: "Présence",
  },
  {
    icon: HeartHandshake,
    title: "Libération émotionnelle",
    desc: "Un espace sûr pour accueillir, comprendre et transformer ce qui pèse.",
    tone: "Libération",
  },
  {
    icon: Wind,
    title: "Respiration consciente",
    desc: "Techniques de breathwork pour réguler le système nerveux et l'énergie vitale.",
    tone: "Souffle",
  },
];

export function Services() {
  return (
    <section id="services" className="py-40 bg-[var(--color-charcoal)] text-[var(--color-offwhite)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-4xl md:text-6xl max-w-3xl leading-tight"
            >
              Quatre voies. Une seule destination&nbsp;: <em className="italic text-[var(--color-gold)]">vous.</em>
            </motion.h2>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 hidden md:block">← Glissez →</p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="snap-start shrink-0 w-[85%] sm:w-[420px] h-[520px] rounded-3xl p-10 flex flex-col justify-between border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-[var(--color-gold)]/40 transition-colors"
              >
                <div>
                  <div className="w-14 h-14 rounded-full border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold)]">
                    <Icon size={22} strokeWidth={1.25} />
                  </div>
                  <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-white/40">{s.tone}</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-3">{s.title}</h3>
                </div>
                <p className="text-white/60 leading-relaxed font-light">{s.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}