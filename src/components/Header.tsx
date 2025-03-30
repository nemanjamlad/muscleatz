
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { t, changeLanguage, locale } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    changeLanguage(locale === 'sr' ? 'en' : 'sr');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            MusclEatz
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="font-medium hover:text-primary transition-colors">
            {t('common.home')}
          </a>
          <a href="/order" className="font-medium hover:text-primary transition-colors">
            {t('common.menus')}
          </a>
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
            className="bg-primary hover:bg-primary/90 text-white"
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
            className="bg-primary hover:bg-primary/90 text-white"
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
            <a 
              href="/" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('common.home')}
            </a>
            <a 
              href="/order" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('common.menus')}
            </a>
            <a 
              href="/jelovnik" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('common.jelovnik')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
