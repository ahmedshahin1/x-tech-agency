import { useApp } from "@/contexts/AppContext";

export function ClientsSlider() {
  const { t } = useApp();

  const clientItems = Array.isArray(t?.clients?.items)
    ? t.clients.items
    : [];

  const items = clientItems.concat(clientItems);

  return (
    <section className="border-y border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {t?.clients?.title ?? "Clients"}
        </p>

        <div className="mask-fade-edges overflow-hidden">
          <div className="flex w-max animate-slide-x gap-4">

            {items.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="group relative rounded-2xl p-[1px] will-change-transform"
              >
                {/* INNER BACKGROUND (HOVER COLOR FILL) */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-700 via-sky-700 to-cyan-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                {/* CARD */}
                <div className="glass relative flex h-20 min-w-[200px] items-center gap-3 rounded-2xl px-4 transition-all duration-200 group-hover:bg-transparent:80">

                  <img
                    src={item.image}
                    className="h-10 w-10 rounded-md object-cover"
                  />

                  <span className="font-display text-sm font-semibold tracking-tight text-foreground/80 group-hover:transition-colors">
                    {item.name}
                  </span>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}