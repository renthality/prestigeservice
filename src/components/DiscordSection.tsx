import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

const DiscordSection = () => {
  const { t } = useLanguage();
  return (
    <section id="discord" className="relative py-24 md:py-32">
      <div className="container">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl gold-border p-10 md:p-16 text-center shine-auto">
          <div className="absolute inset-[1px] -z-10 rounded-3xl bg-gradient-to-br from-noir via-[hsl(0_0%_7%)] to-noir" />

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-gold/70">
            {t.discord.label}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            <span className="text-shine">{t.discord.title}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/70 leading-relaxed">{t.discord.subtitle}</p>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-gold/50 bg-noir/80 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur transition-all duration-700 ease-in-out hover:border-gold hover:bg-noir hover:scale-[1.03] hover:shadow-gold-lg animate-pulse-soft"
          >
            {t.discord.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-in-out group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
