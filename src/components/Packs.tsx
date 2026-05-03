import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const Packs = () => {
  const { t } = useLanguage();

  const packs = [
    { key: "silver", icon: "🥈", data: t.packs.silver, popular: false },
    { key: "gold", icon: "💎", data: t.packs.gold, popular: true },
    { key: "diamond", icon: "👑", data: t.packs.diamond, popular: false },
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
          <p className="mt-4 text-foreground/70">{t.packs.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {packs.map((p, i) => (
            <article
              key={p.key}
              className={cn(
                "group relative overflow-hidden rounded-2xl gold-border p-8 hover-lift shine",
                "animate-float-up",
                p.popular && "md:-translate-y-4 md:scale-[1.03]"
              )}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              {/* Inner background */}
              <div className="absolute inset-[1px] -z-10 rounded-2xl bg-gradient-to-b from-noir to-[hsl(0_0%_8%)]" />
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse at top, hsl(45 100% 50% / 0.18), transparent 70%)" }}
              />

              {p.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-noir shadow-gold">
                  {t.packs.popular}
                </div>
              )}

              <div className="relative">
                <div className="text-5xl">{p.icon}</div>
                <h3 className="mt-4 font-display text-2xl font-bold text-gold-gradient">
                  {p.data.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-foreground">
                    {p.data.price}
                  </span>
                </div>

                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                <ul className="space-y-3">
                  {p.data.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#discord"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300",
                    p.popular
                      ? "bg-gold-gradient text-noir shadow-gold hover:shadow-gold-lg hover:scale-[1.02]"
                      : "border border-gold/40 text-gold hover:border-gold hover:bg-gold/10 hover:shadow-gold"
                  )}
                  style={p.popular ? { backgroundSize: "200% auto" } : undefined}
                >
                  {t.packs.order}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packs;
