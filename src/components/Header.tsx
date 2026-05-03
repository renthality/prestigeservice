import { useEffect, useState } from "react";
import LanguageSwitch from "./LanguageSwitch";
import CrownLogo from "./CrownLogo";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/15 bg-noir/80 py-3 backdrop-blur-xl"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <CrownLogo size={42} className="transition-transform duration-500 group-hover:scale-110 animate-crown-glow" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-gold-gradient">Prestige</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold/60">Service</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#packs" className="text-foreground/80 hover:text-gold transition-colors">{t.nav.packs}</a>
          <a href="#why" className="text-foreground/80 hover:text-gold transition-colors">{t.nav.why}</a>
          <a href="#discord" className="text-foreground/80 hover:text-gold transition-colors">{t.nav.discord}</a>
        </nav>

        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
