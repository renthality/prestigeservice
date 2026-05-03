import { useLanguage } from "@/i18n/LanguageContext";
import CrownLogo from "./CrownLogo";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-gold/15 bg-noir/80 py-12">
      <div className="container flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-4">
          <CrownLogo size={48} />
          <div>
            <div className="font-display text-lg font-bold text-gold-gradient">Prestige Service</div>
            <p className="text-xs text-foreground/60">{t.footer.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#discord" className="text-foreground/70 hover:text-gold transition-colors">
            {t.footer.links.discord}
          </a>
          <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
            {t.footer.links.terms}
          </a>
          <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
            {t.footer.links.support}
          </a>
        </nav>
      </div>

      <div className="container mt-8 border-t border-gold/10 pt-6 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} Prestige Service. {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;
