import { useLanguage } from "@/i18n/LanguageContext";
import CrownLogo from "./CrownLogo";
import GoldParticles from "./GoldParticles";
import { ArrowRight } from "lucide-react";
import { DISCORD_URL } from "@/lib/constants";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-20 bg-noir" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 35%, hsl(45 100% 50% / 0.16), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 -z-10 noise-texture opacity-30" />
      <GoldParticles count={22} />

      <div className="container relative flex flex-col items-center text-center">
        <div className="animate-scale-in [animation-delay:0.1s]">
          <CrownLogo size={240} className="logo-glow-soft drop-shadow-[0_8px_30px_hsl(45_100%_50%/0.25)]" />
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-noir/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.32em] text-gold/80 backdrop-blur animate-fade-in [animation-delay:0.35s]">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {t.hero.tagline}
        </div>

        <h1 className="mt-8 font-display text-6xl font-bold leading-[1.05] tracking-tight md:text-8xl lg:text-9xl animate-fade-in [animation-delay:0.5s]">
          <span className="text-shine">{t.hero.title}</span>
        </h1>

        <p className="mt-4 font-display text-lg text-gold/85 md:text-2xl animate-fade-in [animation-delay:0.7s]">
          {t.hero.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-base text-foreground/65 md:text-lg leading-relaxed animate-fade-in [animation-delay:0.9s]">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-in [animation-delay:1.1s]">
          <a
            href="#packs"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-noir shadow-gold transition-all duration-700 ease-in-out hover:scale-[1.03] hover:shadow-gold-lg"
            style={{ backgroundSize: "200% auto" }}
          >
            {t.hero.cta_packs}
            <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-in-out group-hover:translate-x-1" />
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-noir/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur transition-all duration-700 ease-in-out hover:border-gold hover:bg-noir/70 hover:scale-[1.03]"
          >
            {t.hero.cta_discord}
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;
