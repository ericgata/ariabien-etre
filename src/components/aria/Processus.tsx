import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Rencontre", text: "Un premier échange offert pour ressentir l'alignement et poser l'intention." },
  { n: "02", title: "Diagnostic", text: "Cartographie de votre paysage intérieur — corps, émotions, schémas." },
  { n: "03", title: "Pratique", text: "Sessions sur-mesure mêlant coaching, méditation et respiration." },
  { n: "04", title: "Intégration", text: "Ancrage des transformations dans votre quotidien, durablement." },
];

export function Processus() {
  return (
    <section id="processus" className="py-40 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8"
        >
          Processus
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-4xl md:text-6xl leading-tight max-w-3xl"
        >
          Quatre étapes. <span className="text-muted-foreground">Une transformation.</span>
        </motion.h2>

        <div className="mt-24 relative">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-gold)]"
          />

          <div className="space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-[18px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-gold)] ring-8 ring-background" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <p className="font-display text-5xl text-[var(--color-gold)]/70">{s.n}</p>
                  <h3 className="font-display text-3xl mt-2">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground font-light max-w-md md:inline-block">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}