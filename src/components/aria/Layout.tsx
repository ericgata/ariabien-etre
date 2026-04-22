import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cursor } from "./Cursor";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-border/40 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="font-display text-xl tracking-tight">
            Aria<span className="text-[var(--color-gold)]">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {links.slice(1, -1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-foreground" }}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] border border-foreground/20 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-all"
          >
            Contact
          </Link>
          <button
            className="md:hidden text-xs uppercase tracking-[0.2em]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass border-t border-border/40 px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm uppercase tracking-[0.2em]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </motion.header>

      <main className="bg-background text-foreground overflow-x-hidden">
        <Outlet />
      </main>

      <footer className="bg-[var(--color-charcoal)] text-[var(--color-offwhite)] px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-white/50">
          <span className="font-display normal-case text-2xl text-white">
            Aria<span className="text-[var(--color-gold)]">.</span>
          </span>
          <span>Bordeaux & visio · contact@aria-wellness.fr</span>
          <span>© {new Date().getFullYear()} Aria Wellness</span>
        </div>
      </footer>
    </>
  );
}