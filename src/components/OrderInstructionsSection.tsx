
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OrderInstructionsSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
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
  );
};

export default OrderInstructionsSection;
