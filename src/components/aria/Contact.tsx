import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[var(--color-charcoal)] text-[var(--color-offwhite)] px-6 py-40 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative max-w-4xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-10"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl leading-[1.05] text-balance"
        >
          Le premier pas <em className="italic text-[var(--color-gold)]">commence ici.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 text-white/60 max-w-xl mx-auto font-light"
        >
          Échangeons. Un premier appel de 20 minutes, offert et sans engagement.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04 }}
          href="mailto:contact@aria-wellness.fr"
          className="inline-flex items-center gap-3 mt-14 px-10 py-5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] text-xs uppercase tracking-[0.3em] hover:shadow-[0_20px_60px_-10px_oklch(0.74_0.09_80/0.6)] transition-shadow"
        >
          Réserver mon appel
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid sm:grid-cols-3 gap-8 text-sm"
        >
          {[
            { icon: MapPin, label: "Bordeaux & visio" },
            { icon: Phone, label: "06 XX XX XX XX" },
            { icon: Mail, label: "contact@aria-wellness.fr" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-white/70 font-light">
              <Icon size={18} strokeWidth={1.25} className="text-[var(--color-gold)]" />
              {label}
            </div>
          ))}
        </motion.div>

        <p className="mt-24 text-[10px] uppercase tracking-[0.4em] text-white/30">
          © Aria Wellness — Tous droits réservés
        </p>
      </div>
    </section>
  );
}