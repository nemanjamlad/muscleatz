
import { useLanguage } from "@/context/LanguageContext";
import { Instagram } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">MuscleEatz</h3>
            <p className="text-gray-600 mb-4">
              {t('home.aboutText')}
            </p>
            <div className="flex mt-4">
              <a 
                href="https://www.instagram.com/muscle.eatz.rs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.contact')}</h4>
            <address className="not-italic">
              <p className="mb-2">{t('footer.address')}</p>
              <p className="mb-2">Tel: 0603187333</p>
              <p className="mb-2">Email: muscleatz@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} MuscleEatz. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
