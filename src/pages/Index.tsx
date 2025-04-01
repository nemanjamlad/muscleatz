
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import { ChefHat, Clock, Salad, Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">{t('home.aboutUs')}</h2>
              <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                {t('home.aboutText')}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">{t('home.features.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title={t('home.features.freshFood.title')}
                description={t('home.features.freshFood.description')}
                icon={Salad}
              />
              
              <FeatureCard 
                title={t('home.features.delivery.title')}
                description={t('home.features.delivery.description')}
                icon={Clock}
              />
              
              <FeatureCard 
                title={t('home.features.nutrition.title')}
                description={t('home.features.nutrition.description')}
                icon={TrendingUp}
              />
              
              <FeatureCard 
                title={t('home.features.chefs.title')}
                description={t('home.features.chefs.description')}
                icon={ChefHat}
              />
              
              <FeatureCard 
                title={t('home.features.experts.title')}
                description={t('home.features.experts.description')}
                icon={Shield}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Šta naše mušterije kažu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard
                name="Marko Petrović"
                role="Fitnes trener"
                content="MusclEatz mi je promenio život! Hrana je ukusna i nutritivno izbalansirana. Perfektno za moje klijente i za mene."
                rating={5}
              />
              
              <TestimonialCard
                name="Ana Jovanović"
                role="IT Stručnjak"
                content="Nemam vremena da kuvam zdrave obroke. MusclEatz je savršeno rešenje - sveže, ukusno i zdravo!"
                rating={5}
              />
              
              <TestimonialCard
                name="Nikola Nikolić"
                role="Sportista"
                content="Otkad koristim MusclEatz, moji rezultati su drastično poboljšani. Kvalitet hrane je izvanredan."
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* Order Instructions Section */}
        <section id="order-instructions" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">{t('home.orderInstructions')}</h2>
              <ul className="space-y-6">
                {t('home.orderSteps', { returnObjects: true }).map((step: string, index: number) => (
                  <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-4 shadow-md">
                      {index + 1}
                    </span>
                    <p className="text-lg text-gray-700 pt-1">{step}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 text-center">
                <Button 
                  onClick={() => navigate('/order')}
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
                  size="lg"
                >
                  {t('home.orderCta')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menus" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">{t('order.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t('order.mensLarge.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.mensLarge.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.mensLarge.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{t('order.mensLarge.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t('order.mensSmall.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.mensSmall.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.mensSmall.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{t('order.mensSmall.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t('order.womensLarge.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.womensLarge.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.womensLarge.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{t('order.womensLarge.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {t('order.selectMenu')}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{t('order.womensSmall.title')}</h3>
                <p className="text-gray-500 mb-2">{t('order.womensSmall.calories')}</p>
                <p className="text-gray-700 mb-4">{t('order.womensSmall.description')}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{t('order.womensSmall.price')}</span>
                  <Button 
                    onClick={() => navigate('/order')}
                    className="bg-primary hover:bg-primary/90 text-white"
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
};

export default Index;
