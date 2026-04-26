import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import {
  Megaphone,
  Target,
  Sparkles,
  Code2,
  Wand2,
  Camera,
  ShieldCheck,
  Bot,
} from "lucide-react";

const ICONS = [Megaphone, Target, Sparkles, Code2, Wand2, Camera, ShieldCheck, Bot];

export function ServicesGrid() {
  const { t } = useApp();
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute -end-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elevated">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
