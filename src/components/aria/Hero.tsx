import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tagline = "Transformez votre vie. Silencieusement.";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const words = tagline.split(" ");

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
        aria-hidden
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-charcoal) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8"
        >
          Aria Wellness — Bordeaux
        </motion.p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[1.05] text-balance">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w === "Silencieusement." ? <em className="italic text-[var(--color-gold)]">{w}</em> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-10 text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light"
        >
          Un accompagnement holistique pour celles et ceux qui cherchent la clarté,
          la présence, et une transformation profonde.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Défilez
      </motion.div>
    </section>
  );
}