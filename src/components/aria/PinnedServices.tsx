import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Compass, Flower2, HeartHandshake, Wind } from "lucide-react";

const services = [
  { icon: Compass, title: "Coaching de vie", text: "Clarifier vos aspirations, aligner vos décisions, retrouver une direction profonde.", hue: 80 },
  { icon: Flower2, title: "Méditation guidée", text: "Sessions immersives pour cultiver la présence et apaiser le mental.", hue: 160 },
  { icon: HeartHandshake, title: "Libération émotionnelle", text: "Un espace sûr pour accueillir, comprendre et transformer ce qui pèse.", hue: 30 },
  { icon: Wind, title: "Respiration consciente", text: "Techniques de breathwork pour réguler le système nerveux et l'énergie vitale.", hue: 220 },
];

/**
 * Sticky pinned section: 4 services reveal one by one as scroll progresses,
 * background hue shifts under them.
 */
export function PinnedServices() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const hue = useTransform(scrollYProgress, [0, 1], [80, 220]);
  const bg = useTransform(
    hue,
    (h) => `radial-gradient(ellipse at 30% 40%, oklch(0.78 0.1 ${h} / 0.35), transparent 60%)`,
  );

  return (
    <section ref={ref} className="relative bg-[var(--color-charcoal)] text-[var(--color-offwhite)]" style={{ height: `${services.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div className="absolute inset-0" style={{ background: bg }} aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">
              Services · 04
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-md">
              Quatre voies. <em className="italic text-[var(--color-gold)]">Une destination.</em>
            </h2>
            <div className="mt-12 flex gap-2">
              {services.map((_, i) => {
                const active = useTransform(scrollYProgress, (v) => {
                  const idx = Math.min(services.length - 1, Math.floor(v * services.length));
                  return idx >= i ? 1 : 0.2;
                });
                return (
                  <motion.span
                    key={i}
                    style={{ opacity: active }}
                    className="h-px w-12 bg-[var(--color-gold)]"
                  />
                );
              })}
            </div>
          </div>

          <div className="relative h-[420px]">
            {services.map((s, i) => {
              const start = i / services.length;
              const end = (i + 1) / services.length;
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
                [0, 1, 1, 0],
              );
              const y = useTransform(scrollYProgress, [start, end], [60, -60]);
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 text-[var(--color-gold)]">
                    <Icon size={28} strokeWidth={1.25} />
                    <span className="text-xs uppercase tracking-[0.3em]">
                      0{i + 1} / 0{services.length}
                    </span>
                  </div>
                  <h3 className="font-display text-5xl md:text-7xl mt-6 leading-[1.05]">
                    {s.title}
                  </h3>
                  <p className="mt-6 text-white/60 max-w-md font-light text-lg leading-relaxed">
                    {s.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}