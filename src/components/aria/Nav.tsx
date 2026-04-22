import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#manifeste", label: "Manifeste" },
  { href: "#services", label: "Services" },
  { href: "#processus", label: "Processus" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#tarifs", label: "Tarifs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/40 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl tracking-tight">
          Aria<span className="text-[var(--color-gold)]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs uppercase tracking-[0.2em] border border-foreground/20 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-all"
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}