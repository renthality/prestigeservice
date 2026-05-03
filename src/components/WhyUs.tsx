import { useLanguage } from "@/i18n/LanguageContext";
import { Zap, ShieldCheck, BadgeCheck, MessagesSquare, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  shield: ShieldCheck,
  check: BadgeCheck,
  chat: MessagesSquare,
};

const WhyUs = () => {
  const { t } = useLanguage();
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, hsl(45 100% 50% / 0.07), transparent 70%)",
        }}
      />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-gold/70">
            {t.why.label}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            <span className="text-shine">{t.why.title}</span>
          </h2>
          <p className="mt-4 text-foreground/65">{t.why.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 p-8 text-center backdrop-blur-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold animate-float-up"
                style={{ animationDelay: `${i * 0.15}s`, animationDuration: "1s" }}
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-700 ease-in-out group-hover:border-gold/60 group-hover:bg-gold/10">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-gold">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
