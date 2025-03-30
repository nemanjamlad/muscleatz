
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrderPage = () => {
  const { t } = useLanguage();

  const handleSelectMenu = (menuName: string) => {
    toast({
      title: "Uspešno",
      description: `Izabrali ste ${menuName}. Uskoro će vam stići email sa detaljima.`,
    });
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

            <div className="max-w-4xl mx-auto mt-12 text-center">
              <p className="text-lg text-gray-700">{t('order.orderNote')}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OrderPage;
