
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

const OrderPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if a menu was pre-selected
    if (location.state?.selectedMenu) {
      handleSelectMenu(location.state.selectedMenu);
    }
  }, [location.state]);

  const handleSelectMenu = (menuName: string) => {
    navigate("/contact", { state: { selectedMenu: menuName } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">{t('order.title')}</h1>
              <p className="text-xl text-gray-700">{t('order.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Men's Large Menu */}
              <Card className="shadow-lg border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{t('order.mensLarge.title')}</CardTitle>
                  <CardDescription>
                    <span className="font-semibold text-lg">{t('order.mensLarge.calories')}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{t('order.mensLarge.description')}</p>
                  <div className="text-2xl font-bold text-primary">{t('order.mensLarge.price')}</div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleSelectMenu(t('order.mensLarge.title'))}
                  >
                    {t('order.selectMenu')}
                  </Button>
                </CardFooter>
              </Card>

              {/* Men's Small Menu */}
              <Card className="shadow-lg border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{t('order.mensSmall.title')}</CardTitle>
                  <CardDescription>
                    <span className="font-semibold text-lg">{t('order.mensSmall.calories')}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{t('order.mensSmall.description')}</p>
                  <div className="text-2xl font-bold text-primary">{t('order.mensSmall.price')}</div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleSelectMenu(t('order.mensSmall.title'))}
                  >
                    {t('order.selectMenu')}
                  </Button>
                </CardFooter>
              </Card>

              {/* Women's Large Menu */}
              <Card className="shadow-lg border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{t('order.womensLarge.title')}</CardTitle>
                  <CardDescription>
                    <span className="font-semibold text-lg">{t('order.womensLarge.calories')}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{t('order.womensLarge.description')}</p>
                  <div className="text-2xl font-bold text-primary">{t('order.womensLarge.price')}</div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleSelectMenu(t('order.womensLarge.title'))}
                  >
                    {t('order.selectMenu')}
                  </Button>
                </CardFooter>
              </Card>

              {/* Women's Small Menu */}
              <Card className="shadow-lg border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{t('order.womensSmall.title')}</CardTitle>
                  <CardDescription>
                    <span className="font-semibold text-lg">{t('order.womensSmall.calories')}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{t('order.womensSmall.description')}</p>
                  <div className="text-2xl font-bold text-primary">{t('order.womensSmall.price')}</div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleSelectMenu(t('order.womensSmall.title'))}
                  >
                    {t('order.selectMenu')}
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Daily menu prices section */}
            <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center">Dnevne cene menija</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <p className="font-medium">Mali meni za žene</p>
                  <p className="font-bold text-primary mt-1 mb-2">2200 RSD</p>
                  <Button 
                    onClick={() => handleSelectMenu("Mali meni za žene (dnevna cena)")}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="sm"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <p className="font-medium">Veliki meni za žene</p>
                  <p className="font-bold text-primary mt-1 mb-2">2400 RSD</p>
                  <Button 
                    onClick={() => handleSelectMenu("Veliki meni za žene (dnevna cena)")}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="sm"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <p className="font-medium">Mali meni za muškarce</p>
                  <p className="font-bold text-primary mt-1 mb-2">2600 RSD</p>
                  <Button 
                    onClick={() => handleSelectMenu("Mali meni za muškarce (dnevna cena)")}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="sm"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <p className="font-medium">Veliki meni za muškarce</p>
                  <p className="font-bold text-primary mt-1 mb-2">3000 RSD</p>
                  <Button 
                    onClick={() => handleSelectMenu("Veliki meni za muškarce (dnevna cena)")}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="sm"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 text-center">
              <p className="text-lg text-gray-700">{t('order.orderNote')}</p>
              
              {/* Added trainer contact information */}
              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-lg font-medium text-gray-800">
                  Za dodatne informacije o treningu javite se iskusnom treneru:
                </p>
                <a 
                  href="https://www.instagram.com/luka_sakovic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  @luka_sakovic
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OrderPage;
