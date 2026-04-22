import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const tagline = "Transformez votre vie. Silencieusement.";

/**
 * Sticky pinned hero. Section is 250vh tall but the inner stage stays
 * visually frozen at 100vh while the gradient shifts hue, the headline
 * scales down, and a giant supporting word zooms out behind it.
 */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });

  const hue = useTransform(p, [0, 1], [80, 30]);
  const bg = useTransform(
    hue,
    (h) =>
      `radial-gradient(ellipse at 50% 35%, oklch(0.78 0.1 ${h} / 0.4) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, oklch(0.72 0.08 ${h - 20} / 0.25) 0%, transparent 60%)`,
  );

  const titleScale = useTransform(p, [0, 1], [1, 0.55]);
  const titleY = useTransform(p, [0, 1], [0, -120]);
  const titleOpacity = useTransform(p, [0, 0.8, 1], [1, 1, 0]);

  const ghostScale = useTransform(p, [0, 1], [3.5, 1]);
  const ghostOpacity = useTransform(p, [0, 0.6, 1], [0, 0.08, 0.12]);

  const subOpacity = useTransform(p, [0, 0.3, 0.6], [0, 0, 1]);
  const subY = useTransform(p, [0.3, 0.6], [40, 0]);

  const words = tagline.split(" ");

  return (
    <section ref={ref} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0" style={{ background: bg }} aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-charcoal) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <motion.span
          style={{ scale: ghostScale, opacity: ghostOpacity }}
          className="absolute font-display text-[18vw] leading-none italic text-[var(--color-charcoal)] select-none pointer-events-none"
          aria-hidden
        >
          aria
        </motion.span>

        <motion.div
          style={{ scale: titleScale, y: titleY, opacity: titleOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8"
          >
            Aria Wellness — Bordeaux & visio
          </motion.p>

          <h1 className="font-display text-5xl sm:text-7xl md:text-[8rem] leading-[1.02] text-balance">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.1,
                  delay: 0.4 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {w === "Silencieusement." ? (
                  <em className="italic font-light text-[var(--color-gold)]">{w}</em>
                ) : (
                  <span className="font-light">{w}</span>
                )}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          style={{ opacity: subOpacity, y: subY }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 max-w-md text-center text-sm text-muted-foreground font-light px-6"
        >
          Un accompagnement holistique pour celles et ceux qui cherchent
          la clarté, la présence, et une transformation profonde.
        </motion.p>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2">
          <span>Défilez</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-8 bg-foreground/30"
          />
        </div>
      </div>
    </section>
  );
}