import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { quote: "Aria m'a appris à habiter mon silence. Six mois plus tard, je ne reconnais plus la femme que j'étais.", author: "Camille D.", role: "Bordeaux" },
  { quote: "Une présence rare. Chaque séance ouvre une porte que je n'avais jamais osé pousser.", author: "Julien M.", role: "Paris — visio" },
  { quote: "Ni gourou, ni thérapie. Une rencontre qui change la trajectoire, doucement, profondément.", author: "Léa V.", role: "Bordeaux" },
];

export function Temoignages() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);
  const cur = items[i];

  return (
    <section id="temoignages" className="min-h-screen flex items-center justify-center bg-[var(--color-charcoal)] text-[var(--color-offwhite)] px-6 py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative max-w-4xl w-full text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-12">Témoignages</p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-3xl md:text-5xl leading-tight text-balance italic font-light">
              « {cur.quote} »
            </p>
            <footer className="mt-12 text-xs uppercase tracking-[0.3em] text-white/50">
              {cur.author} <span className="text-[var(--color-gold)]">—</span> {cur.role}
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-16 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Témoignage ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-[var(--color-gold)]" : "w-6 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}