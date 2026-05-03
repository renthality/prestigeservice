import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { Check, Award, Crown, Gem } from "lucide-react";

const Packs = () => {
  const { t } = useLanguage();

  const packs = [
    { key: "silver", Icon: Award, data: t.packs.silver, badge: null },
    { key: "gold", Icon: Crown, data: t.packs.gold, badge: t.packs.popular },
    { key: "diamond", Icon: Gem, data: t.packs.diamond, badge: t.packs.best },
  ] as const;

  return (
    <section id="packs" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-gold/70">
            {t.packs.label}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            <span className="text-shine">{t.packs.title}</span>
          </h2>
          <p className="mt-4 text-foreground/65">{t.packs.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {packs.map((p, i) => {
            const isFeatured = p.key === "gold";
            return (
              <article
                key={p.key}
                className={cn(
                  "group relative overflow-hidden rounded-2xl gold-border p-8 hover-lift shine-auto",
                  "animate-float-up",
                  isFeatured && "md:-translate-y-4 md:scale-[1.03]"
                )}
                style={{ animationDelay: `${0.2 * i}s`, animationDuration: "1s" }}
              >
                <div className="absolute inset-[1px] -z-10 rounded-2xl bg-gradient-to-b from-noir to-[hsl(0_0%_8%)]" />
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                  style={{ background: "radial-gradient(ellipse at top, hsl(45 100% 50% / 0.15), transparent 70%)" }}
                />

                {p.badge && (
                  <div
                    className={cn(
                      "absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
                      isFeatured
                        ? "bg-gold-gradient text-noir shadow-gold"
                        : "border border-gold/40 bg-noir/70 text-gold backdrop-blur"
                    )}
                  >
                    {p.badge}
                  </div>
                )}

                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-700 ease-in-out group-hover:border-gold/60 group-hover:bg-gold/10">
                    <p.Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold text-gold-gradient">
                    {p.data.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-foreground">
                      {p.data.price}
                    </span>
                  </div>

                  <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                  <ul className="space-y-3">
                    {p.data.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/85">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                          <Check className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#discord"
                    className={cn(
                      "mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-700 ease-in-out",
                      isFeatured
                        ? "bg-gold-gradient text-noir shadow-gold hover:shadow-gold-lg hover:scale-[1.03]"
                        : "border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 hover:scale-[1.03] hover:shadow-gold"
                    )}
                    style={isFeatured ? { backgroundSize: "200% auto" } : undefined}
                  >
                    {t.packs.order}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packs;
