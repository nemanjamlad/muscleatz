
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default AboutSection;
