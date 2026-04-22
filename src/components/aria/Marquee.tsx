import { motion } from "framer-motion";

const items = ["Bien-être", "Bordeaux", "Transformation", "Liberté", "Présence", "Silence"];

export function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative py-12 overflow-hidden border-y border-border bg-background">
      <motion.div
        className="flex gap-16 whitespace-nowrap font-display text-6xl md:text-8xl"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className={i % 2 === 0 ? "text-foreground" : "text-foreground/20 italic"}>
              {w}
            </span>
            <span className="text-[var(--color-gold)] text-3xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}