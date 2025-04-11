
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JelovnikPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">{t('jelovnik.title')}</h1>
              <p className="text-xl text-gray-600">{t('jelovnik.subtitle')}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src="/lovable-uploads/0e3683f6-1aa8-4990-8024-e8270c078d88.png" 
                  alt="Nedeljni jelovnik" 
                  className="w-full h-auto" 
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                {t('jelovnik.weeklyMenu')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JelovnikPage;
