
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="container mx-auto px-4 py-16 relative z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{t('home.title')}</h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90">{t('home.subtitle')}</p>
          <p className="text-lg md:text-xl mb-8 text-white/80">{t('home.heroText')}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => navigate('/order')}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              size="lg"
            >
              {t('home.orderCta')}
            </Button>
            <Button 
              onClick={() => {
                document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white text-lg px-8 py-6"
              size="lg"
            >
              {t('common.menus')}
            </Button>
          </div>
          
          <p className="mt-6 text-white/70 max-w-lg mx-auto">{t('home.orderInfo')}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
