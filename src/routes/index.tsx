import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/aria/Nav";
import { Hero } from "@/components/aria/Hero";
import { Manifeste } from "@/components/aria/Manifeste";
import { Services } from "@/components/aria/Services";
import { Processus } from "@/components/aria/Processus";
import { Temoignages } from "@/components/aria/Temoignages";
import { Tarifs } from "@/components/aria/Tarifs";
import { Contact } from "@/components/aria/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aria Wellness — Accompagnement holistique à Bordeaux" },
      {
        name: "description",
        content:
          "Coaching de vie, méditation guidée, libération émotionnelle et respiration consciente. Transformez votre vie, silencieusement.",
      },
      { property: "og:title", content: "Aria Wellness — Accompagnement holistique" },
      {
        property: "og:description",
        content: "Un accompagnement holistique à Bordeaux et en visio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Manifeste />
      <Services />
      <Processus />
      <Temoignages />
      <Tarifs />
      <Contact />
    </main>
  );
}
