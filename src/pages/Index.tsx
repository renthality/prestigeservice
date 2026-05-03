import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packs from "@/components/Packs";
import WhyUs from "@/components/WhyUs";
import DiscordSection from "@/components/DiscordSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Packs />
          <WhyUs />
          <DiscordSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
