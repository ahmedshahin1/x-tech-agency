import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { CTASection } from "@/components/CTASection";
import {
  Building2,
  Sofa,
  Rocket,
  Shirt,
  Dumbbell,
  Car,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — X Tech Agency" },
      {
        name: "description",
        content:
          "X Tech Agency is a hybrid marketing and tech studio helping ambitious brands scale with bold creative and modern AI systems.",
      },
      { property: "og:title", content: "About X Tech Agency" },
      {
        property: "og:description",
        content: "Vision, mission and the industries we serve.",
      },
    ],
  }),
  component: AboutPage,
});

const INDUSTRY_ICONS = [
  Building2,
  Sofa,
  Rocket,
  Shirt,
  Dumbbell,
  Car,
  Sparkles,
];

type ClientItem = {
  name: string;
  category: string;
  image: string;
};

function AboutPage() {
  const { t } = useApp();

  const industries: ClientItem[] = Array.isArray(t?.clients?.items)
    ? (t.clients.items as ClientItem[])
    : [];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 -z-10 hero-bg" />

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold tracking-tight sm:text-6xl"
          >
            <span className="text-gradient-brand">{t.about.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            {t.about.lead}
          </motion.p>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold">
              {t.about.visionTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.about.visionText}
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold">
              {t.about.missionTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.about.missionText}
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            {t.about.industriesTitle}
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((item, i) => {
              const Icon = INDUSTRY_ICONS[i % INDUSTRY_ICONS.length];

              return (
                <motion.div
                  key={`${item.name}-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.015 }}

                  // 🚀 smooth fast hover
                  whileHover={{ y: -6, scale: 1.02 }}

                  className="group relative rounded-2xl p-[1px] will-change-transform"
                >
                  {/* GRADIENT BORDER */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-sky-500 to-cyan-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                  {/* CARD */}
                  <div className="relative glass flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-colors duration-200 group-hover:bg-background/80">
                    
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-xl object-cover"
                    />

                    <div className="flex flex-col items-center">
                      <p className="text-sm font-semi">{item.name}</p>

                      <span className="font-extrabold sm:font-black text-gradient-brand">
                        {item.category}
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}