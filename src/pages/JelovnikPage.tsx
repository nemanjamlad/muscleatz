
import { useState, useRef, ChangeEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image, Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const JelovnikPage = () => {
  const { t } = useLanguage();
  const [menuImage, setMenuImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Error",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setMenuImage(reader.result);
        toast({
          title: "Success",
          description: "Menu image uploaded successfully",
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">{t('jelovnik.title')}</h1>
              <p className="text-xl text-gray-600">{t('jelovnik.subtitle')}</p>
            </div>

            <div className="mb-8 flex justify-center">
              <Button 
                onClick={triggerFileInput} 
                className="flex items-center gap-2"
              >
                <Upload size={18} />
                {t('jelovnik.uploadButton')}
              </Button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="flex flex-col items-center">
              {menuImage ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer hover:opacity-90 transition-opacity">
                      <img 
                        src={menuImage} 
                        alt="Menu"
                        className="max-w-full h-auto border rounded-lg shadow-md" 
                      />
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        {t('jelovnik.clickToEnlarge')}
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw]">
                    <img 
                      src={menuImage} 
                      alt="Menu" 
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="flex flex-col items-center gap-4 p-12 border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
                  <Image size={48} />
                  <p>{t('jelovnik.noMenu')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JelovnikPage;
