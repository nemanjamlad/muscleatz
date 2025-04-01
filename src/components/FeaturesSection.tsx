
import { useLanguage } from "@/context/LanguageContext";
import FeatureCard from "@/components/FeatureCard";
import { ChefHat, Clock, Salad, Shield, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default FeaturesSection;
