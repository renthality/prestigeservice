import { useLanguage } from "@/i18n/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, hsl(45 100% 50% / 0.08), transparent 70%)",
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
          <p className="mt-4 text-foreground/70">{t.why.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/60 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-gold animate-float-up shine"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-3xl ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold/20">
                {item.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-gold">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
