
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-gray-50 to-green-50 py-20">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">{t('home.title')}</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">{t('home.subtitle')}</p>
              <p className="text-lg md:text-xl mb-8 text-gray-700">{t('home.heroText')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={() => navigate('/order')}
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
                  size="lg"
                >
                  {t('home.orderCta')}
                </Button>
                <Button 
                  onClick={() => {
                    document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gray-700 hover:bg-gray-800 text-white text-lg px-8 py-6"
                  size="lg"
                >
                  {t('common.menus')}
                </Button>
              </div>
              <p className="mt-4 text-gray-600">{t('home.orderInfo')}</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-600">{t('home.aboutUs')}</h2>
              <p className="text-lg text-gray-700 mb-6 text-center">
                {t('home.aboutText')}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-600">{t('home.features.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-green-600">{t('home.features.freshFood.title')}</h3>
                <p className="text-gray-700">{t('home.features.freshFood.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-green-600">{t('home.features.delivery.title')}</h3>
                <p className="text-gray-700">{t('home.features.delivery.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-green-600">{t('home.features.nutrition.title')}</h3>
                <p className="text-gray-700">{t('home.features.nutrition.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-green-600">{t('home.features.chefs.title')}</h3>
                <p className="text-gray-700">{t('home.features.chefs.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-green-600">{t('home.features.experts.title')}</h3>
                <p className="text-gray-700">{t('home.features.experts.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Instructions Section */}
        <section id="order-instructions" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-600">{t('home.orderInstructions')}</h2>
              <ul className="space-y-4">
                {t('home.orderSteps', { returnObjects: true }).map((step: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <p className="text-lg text-gray-700">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menus" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-600">{t('order.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-green-600">{t('order.mensLarge.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.mensLarge.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.mensLarge.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">{t('order.mensLarge.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-green-600">{t('order.mensSmall.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.mensSmall.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.mensSmall.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">{t('order.mensSmall.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-green-600">{t('order.womensLarge.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.womensLarge.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.womensLarge.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">{t('order.womensLarge.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-green-600">{t('order.womensSmall.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.womensSmall.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.womensSmall.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">{t('order.womensSmall.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Index;
