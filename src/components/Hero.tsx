import { useLanguage } from "@/i18n/LanguageContext";
import CrownLogo from "./CrownLogo";
import GoldParticles from "./GoldParticles";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-noir" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(45 100% 50% / 0.18), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 -z-10 noise-texture opacity-40" />
      <GoldParticles count={32} />

      {/* Faint rotating ring behind crown */}
      <div className="pointer-events-none absolute left-1/2 top-32 -z-10 -translate-x-1/2 md:top-40">
        <div
          className="h-[520px] w-[520px] rounded-full border border-gold/10 animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, hsl(45 100% 50% / 0.12) 25%, transparent 50%, hsl(45 100% 50% / 0.08) 75%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative flex flex-col items-center text-center">
        <div className="animate-scale-in [animation-delay:0.1s]">
          <CrownLogo size={140} className="animate-crown-glow" />
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-noir/60 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold/80 backdrop-blur animate-fade-in [animation-delay:0.3s]">
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_hsl(45_100%_50%)]" />
          {t.hero.tagline}
        </div>

        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl animate-fade-in [animation-delay:0.4s]">
          <span className="text-shine">{t.hero.title}</span>
        </h1>

        <p className="mt-4 font-display text-lg text-gold/90 md:text-2xl animate-fade-in [animation-delay:0.55s]">
          {t.hero.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-base text-foreground/70 md:text-lg animate-fade-in [animation-delay:0.7s]">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-in [animation-delay:0.85s]">
          <a
            href="#discord"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-widest text-noir shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-gold-lg shine"
            style={{ backgroundSize: "200% auto" }}
          >
            <span className="relative z-10">🔗 {t.hero.cta_discord}</span>
          </a>
          <a
            href="#packs"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-noir/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold backdrop-blur transition-all duration-300 hover:border-gold hover:bg-noir/70 hover:scale-105 hover:shadow-gold"
          >
            🛒 {t.hero.cta_packs}
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
