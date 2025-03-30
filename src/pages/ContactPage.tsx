
import { useLocation, Navigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const ContactPage = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const selectedMenu = location.state?.selectedMenu;

  // If no menu is selected, redirect back to order page
  if (!selectedMenu) {
    return <Navigate to="/order" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-amber-50 p-4 rounded-md mb-4 border border-amber-200">
              <p className="text-amber-800 text-center">{t('contact.deliveryTime')}</p>
            </div>
            <ContactForm selectedMenu={selectedMenu} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
