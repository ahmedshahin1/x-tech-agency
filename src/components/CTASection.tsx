import { Link } from "@tanstack/react-router";
import { useApp } from "@/contexts/AppContext";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  const { t } = useApp();
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-radial-glow)" }} />
          <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-bold sm:text-5xl">
            <span className="text-gradient-brand">{t.cta.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{t.cta.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-brand px-7 text-sm font-semibold text-white shadow-elevated transition-transform hover:scale-[1.03]"
            >
              {t.cta.primary} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-7 text-sm font-semibold text-foreground transition-colors hover:border-primary"
            >
              <MessageCircle className="h-4 w-4" /> {t.cta.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
