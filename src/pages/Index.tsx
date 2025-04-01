
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderInstructionsSection from "@/components/OrderInstructionsSection";
import MenusSection from "@/components/MenusSection";

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
        <AboutSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Order Instructions Section */}
        <OrderInstructionsSection />

        {/* Menu Section */}
        <MenusSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
