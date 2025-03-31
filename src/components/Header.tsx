
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { t, changeLanguage, locale } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    changeLanguage(locale === 'sr' ? 'en' : 'sr');
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MusclEatz Logo" 
              className="h-14 md:h-16" 
            />
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('common.home')}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('common.about')}
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('common.features')}
          </button>
          <button 
            onClick={() => scrollToSection('menus')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('common.menus')}
          </button>
          <a href="/jelovnik" className="font-medium hover:text-primary transition-colors">
            {t('common.jelovnik')}
          </a>
          <button 
            onClick={toggleLanguage}
            className="p-2 font-medium hover:text-primary transition-colors"
          >
            {t('common.language')}
          </button>
          <Button 
            onClick={() => navigate('/order')}
            className="bg-black hover:bg-black/90 text-white"
          >
            {t('common.orderNow')}
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 font-medium hover:text-primary transition-colors"
          >
            {t('common.language')}
          </button>
          <Button 
            onClick={() => navigate('/order')}
            className="bg-black hover:bg-black/90 text-white"
            size="sm"
          >
            {t('common.orderNow')}
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background p-4 border-b">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-medium hover:text-primary transition-colors"
            >
              {t('common.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-medium hover:text-primary transition-colors"
            >
              {t('common.about')}
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="font-medium hover:text-primary transition-colors"
            >
              {t('common.features')}
            </button>
            <button 
              onClick={() => scrollToSection('menus')}
              className="font-medium hover:text-primary transition-colors"
            >
              {t('common.menus')}
            </button>
            <a 
              href="/jelovnik"
              className="font-medium hover:text-primary transition-colors"
            >
              {t('common.jelovnik')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
