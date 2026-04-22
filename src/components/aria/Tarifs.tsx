import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Séance unique",
    price: "120",
    desc: "Une rencontre ponctuelle, 75 minutes.",
    features: ["Échange préliminaire", "Pratique sur-mesure", "Note d'intégration", "Bordeaux ou visio"],
    accent: false,
  },
  {
    name: "Parcours immersif",
    price: "980",
    desc: "Accompagnement profond sur 3 mois.",
    features: ["8 sessions individuelles", "Méditations enregistrées dédiées", "Suivi messagerie illimité", "Rituel de clôture"],
    accent: true,
  },
];

export function Tarifs() {
  return (
    <section id="tarifs" className="py-40 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6"
          >
            Tarifs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-4xl md:text-6xl"
          >
            Deux chemins. <em className="italic text-[var(--color-gold)]">Sans détour.</em>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`glass rounded-3xl p-10 md:p-12 border ${
                p.accent ? "border-[var(--color-gold)]/50 shadow-[var(--shadow-luxe)]" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl">{p.name}</h3>
                {p.accent && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)] border border-[var(--color-gold)]/40 px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
              </div>
              <p className="mt-2 text-muted-foreground font-light">{p.desc}</p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl">{p.price}</span>
                <span className="text-muted-foreground">€</span>
              </div>

              <ul className="mt-10 space-y-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-[var(--color-gold)] mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="text-foreground/80 font-light">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 block text-center text-xs uppercase tracking-[0.3em] py-4 rounded-full transition-all ${
                  p.accent
                    ? "bg-[var(--color-charcoal)] text-[var(--color-offwhite)] hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)]"
                    : "border border-foreground/20 hover:bg-foreground hover:text-background"
                }`}
              >
                Réserver
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}