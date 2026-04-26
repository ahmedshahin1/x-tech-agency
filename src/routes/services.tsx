import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useApp();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 -z-10 hero-bg" />

        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-5xl font-bold">
            <span className="text-gradient-brand">
              {t.servicesPage.title}
            </span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground">
            {t.servicesPage.lead}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">

          {t.servicesPage.groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ y: -6, scale: 1.02 }}

              className="group relative rounded-3xl p-[1px] will-change-transform"
            >
              {/* 🔵 GRADIENT FRAME (same as About) */}
              <div className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-r from-premium-500 via-sky-500 to-cyan-400
                opacity-0 transition-opacity duration-200
                group-hover:opacity-100
              " />

              {/* CARD */}
              <div className="
                relative glass rounded-3xl p-8
                transition-colors duration-200
                group-hover:bg-background/80
              ">

                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  0{i + 1}
                </div>

                <h2 className="font-display text-2xl font-bold">
                  {group.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                        <Check className="h-3 w-3" />
                      </span>

                      <span className="text-foreground/90">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <CTASection />
    </>
  );
}