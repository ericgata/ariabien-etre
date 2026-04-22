import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ScrollText } from "@/components/aria/ScrollText";

const timeline = [
  { year: "2016", title: "L'éveil", text: "Burn-out après 10 ans en finance. Premier silence de 10 jours en Vipassana. Tout bascule." },
  { year: "2017", title: "L'apprentissage", text: "Formation à la méditation pleine conscience (MBSR), Université de Bangor." },
  { year: "2019", title: "La certification", text: "Certifiée coach professionnelle ICF, spécialisation transformation profonde." },
  { year: "2021", title: "Le breathwork", text: "Formation au breathwork holotropique, Grof Transpersonal Training." },
  { year: "2024", title: "Aria Wellness", text: "Ouverture du studio à Bordeaux. Plus de 480 personnes accompagnées à ce jour." },
];

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Aria Laurent, coach holistique" },
      { name: "description", content: "Aria Laurent, coach certifiée ICF, 8 ans d'expérience en accompagnement holistique à Bordeaux." },
      { property: "og:title", content: "À propos — Aria Laurent" },
      { property: "og:description", content: "Le parcours d'une coach holistique." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="min-h-screen flex items-end pb-20 px-6 pt-40 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8">À propos</p>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.95] text-balance">
              Aria <em className="italic font-light text-[var(--color-gold)]">Laurent</em>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Coach certifiée ICF · 8 ans d'expérience · Bordeaux & visio
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 aspect-[3/4] rounded-3xl relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.78 0.09 80 / 0.5), oklch(0.5 0.05 60 / 0.3)), radial-gradient(circle at 30% 20%, oklch(0.85 0.05 80), oklch(0.4 0.04 60))",
            }}
          >
            <div className="absolute inset-0 mix-blend-overlay opacity-40" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }} />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xs uppercase tracking-[0.3em] opacity-70">Studio</p>
              <p className="font-display text-3xl mt-2">Bordeaux · Chartrons</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollText
            as="h2"
            className="font-display text-4xl md:text-6xl leading-tight text-balance"
          >
            Mon travail n'est pas de vous donner des réponses. C'est de vous aider à entendre les vôtres.
          </ScrollText>
        </div>
      </section>

      <section className="py-32 px-6 bg-[var(--color-charcoal)] text-[var(--color-offwhite)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-8">Parcours</p>
          <h2 className="font-display text-4xl md:text-6xl mb-20 max-w-2xl">
            Huit ans. <span className="text-white/40">Cinq tournants.</span>
          </h2>

          <div className="relative">
            <div className="absolute left-[18px] md:left-32 top-0 bottom-0 w-px bg-white/20" />
            <div className="space-y-20">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 md:pl-48"
                >
                  <div className="absolute left-[14px] md:left-[122px] top-2 w-3 h-3 rounded-full bg-[var(--color-gold)] ring-8 ring-[var(--color-charcoal)]" />
                  <span className="absolute left-0 top-0 font-display text-2xl text-[var(--color-gold)] hidden md:block">
                    {t.year}
                  </span>
                  <span className="md:hidden text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-2">
                    {t.year}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl">{t.title}</h3>
                  <p className="mt-3 text-white/60 font-light max-w-xl leading-relaxed">{t.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}