import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { BarChart3, Layers, Briefcase, Rocket } from "lucide-react";

const ICONS = [BarChart3, Layers, Briefcase, Rocket];

export function WhyUs() {
  const { t } = useApp();
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 hero-bg" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t.why.eyebrow}
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t.why.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.why.items.map((it, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-5"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-display text-base font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
