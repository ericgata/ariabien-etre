import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Années de pratique" },
  { value: 480, suffix: "", label: "Vies accompagnées" },
  { value: 98, suffix: "%", label: "Satisfaction profonde" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Manifeste() {
  return (
    <section id="manifeste" className="py-40 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8"
        >
          Manifeste
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl leading-tight max-w-4xl text-balance"
        >
          Le silence est le langage le plus clair.
          <span className="text-muted-foreground"> Nous l'écoutons ensemble.</span>
        </motion.h2>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border pt-8"
            >
              <div className="font-display text-6xl md:text-7xl text-[var(--color-gold)]">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}