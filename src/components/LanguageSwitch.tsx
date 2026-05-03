import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative inline-flex items-center rounded-full border border-gold/30 bg-noir/60 p-1 backdrop-blur-md shadow-[0_0_20px_hsl(45_100%_50%/0.15)]">
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "relative z-10 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest transition-colors duration-300",
            lang === l ? "text-noir" : "text-gold/70 hover:text-gold"
          )}
          aria-pressed={lang === l}
        >
          {l}
          {lang === l && (
            <span className="absolute inset-0 -z-10 rounded-full bg-gold-gradient shadow-gold" />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
