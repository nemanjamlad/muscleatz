
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";

const MenusSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSelectDailyMenu = (menuName: string) => {
    navigate('/order', { state: { selectedMenu: menuName } });
  };

  return (
    <section id="menus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">{t('order.title')}</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Kvalitetni obroci prilagođeni vašim potrebama i ukusu
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="menu-highlight bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-sm font-semibold">Popularno</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{t('order.mensLarge.title')}</h3>
            <p className="text-gray-500 mb-2 font-medium">{t('order.mensLarge.calories')}</p>
            <p className="text-gray-700 mb-4">{t('order.mensLarge.description')}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">{t('order.mensLarge.price')}</span>
              <Button 
                onClick={() => navigate('/order')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
          </div>
          
          <div className="menu-highlight bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{t('order.mensSmall.title')}</h3>
            <p className="text-gray-500 mb-2 font-medium">{t('order.mensSmall.calories')}</p>
            <p className="text-gray-700 mb-4">{t('order.mensSmall.description')}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">{t('order.mensSmall.price')}</span>
              <Button 
                onClick={() => navigate('/order')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
          </div>
          
          <div className="menu-highlight bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{t('order.womensLarge.title')}</h3>
            <p className="text-gray-500 mb-2 font-medium">{t('order.womensLarge.calories')}</p>
            <p className="text-gray-700 mb-4">{t('order.womensLarge.description')}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">{t('order.womensLarge.price')}</span>
              <Button 
                onClick={() => navigate('/order')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
          </div>
          
          <div className="menu-highlight bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{t('order.womensSmall.title')}</h3>
            <p className="text-gray-500 mb-2 font-medium">{t('order.womensSmall.calories')}</p>
            <p className="text-gray-700 mb-4">{t('order.womensSmall.description')}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">{t('order.womensSmall.price')}</span>
              <Button 
                onClick={() => navigate('/order')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Daily menu prices section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Dnevne cene menija</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2">Mali meni za žene</h4>
              <p className="text-primary font-semibold text-xl mb-3">2200 RSD</p>
              <Button 
                onClick={() => handleSelectDailyMenu("Mali meni za žene (dnevna cena)")}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="sm"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2">Veliki meni za žene</h4>
              <p className="text-primary font-semibold text-xl mb-3">2400 RSD</p>
              <Button 
                onClick={() => handleSelectDailyMenu("Veliki meni za žene (dnevna cena)")}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="sm"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2">Mali meni za muškarce</h4>
              <p className="text-primary font-semibold text-xl mb-3">2600 RSD</p>
              <Button 
                onClick={() => handleSelectDailyMenu("Mali meni za muškarce (dnevna cena)")}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="sm"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2">Veliki meni za muškarce</h4>
              <p className="text-primary font-semibold text-xl mb-3">3000 RSD</p>
              <Button 
                onClick={() => handleSelectDailyMenu("Veliki meni za muškarce (dnevna cena)")}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="sm"
              >
                {t('order.selectMenu')}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/jelovnik')}
            className="flex items-center gap-2 bg-white border border-primary text-primary hover:bg-primary/5"
            variant="outline"
            size="lg"
          >
            <FileText className="h-5 w-5" />
            {t('common.seeMenu')}
          </Button>
          <p className="text-gray-500 mt-3">Pogledajte naš kompletan aktuelni jelovnik</p>
        </div>
      </div>
    </section>
  );
};

export default MenusSection;
