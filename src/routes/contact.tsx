import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const steps = [
  { key: "name", question: "Comment vous appelez-vous ?", placeholder: "Votre prénom", type: "text" as const },
  { key: "email", question: "Quel est votre email ?", placeholder: "vous@exemple.fr", type: "email" as const },
  { key: "intent", question: "Qu'est-ce qui vous amène ?", placeholder: "Quelques mots suffisent…", type: "textarea" as const },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aria Wellness" },
      { name: "description", content: "Réservez un premier appel offert avec Aria Laurent." },
      { property: "og:title", content: "Contact — Aria Wellness" },
      { property: "og:description", content: "Le premier pas commence ici." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const current = steps[step];

  function next(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = (form.elements.namedItem(current.key) as HTMLInputElement).value.trim();
    if (!value) return;
    setValues((v) => ({ ...v, [current.key]: value }));
    if (step === steps.length - 1) setDone(true);
    else setStep((s) => s + 1);
  }

  return (
    <section className="min-h-screen flex items-center px-6 py-32 relative overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-offwhite)]">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} aria-hidden />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 flex gap-2">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`h-px transition-all duration-500 ${
              i <= step ? "w-12 bg-[var(--color-gold)]" : "w-6 bg-white/20"
            }`}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full border border-[var(--color-gold)] flex items-center justify-center mx-auto text-[var(--color-gold)]">
                <Check size={28} strokeWidth={1.5} />
              </div>
              <h1 className="font-display text-5xl md:text-7xl mt-12 leading-tight">
                Merci, <em className="italic text-[var(--color-gold)]">{values.name}</em>.
              </h1>
              <p className="mt-8 text-white/60 max-w-xl mx-auto font-light">
                Vous recevrez une réponse personnelle sous 24 heures à
                <span className="text-white"> {values.email}</span>.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key={current.key}
              onSubmit={next}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">
                Question {step + 1} / {steps.length}
              </p>
              <label htmlFor={current.key} className="block">
                <span className="font-display text-3xl md:text-5xl leading-tight block mb-10">
                  {current.question}
                </span>
                {current.type === "textarea" ? (
                  <textarea
                    id={current.key}
                    name={current.key}
                    autoFocus
                    required
                    rows={3}
                    placeholder={current.placeholder}
                    className="w-full bg-transparent border-b border-white/30 focus:border-[var(--color-gold)] outline-none py-4 text-2xl font-light placeholder:text-white/30 transition-colors resize-none"
                  />
                ) : (
                  <input
                    id={current.key}
                    name={current.key}
                    type={current.type}
                    autoFocus
                    required
                    placeholder={current.placeholder}
                    className="w-full bg-transparent border-b border-white/30 focus:border-[var(--color-gold)] outline-none py-4 text-2xl md:text-3xl font-light placeholder:text-white/30 transition-colors"
                  />
                )}
              </label>
              <div className="mt-12 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white disabled:opacity-30 transition-colors"
                >
                  ← Retour
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] text-xs uppercase tracking-[0.3em] hover:shadow-[0_20px_60px_-10px_oklch(0.74_0.09_80/0.6)] transition-shadow"
                >
                  {step === steps.length - 1 ? "Envoyer" : "Suivant"}
                  <ArrowRight size={14} />
                </button>
              </div>
              <p className="mt-16 text-xs uppercase tracking-[0.3em] text-white/30">
                Appuyez sur Entrée ↵
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}