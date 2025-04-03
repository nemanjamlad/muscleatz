
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

interface ContactFormProps {
  selectedMenu: string;
}

// EmailJS constants - make sure these match your EmailJS account details exactly
const SERVICE_ID = "service_muscleatz"; 
const TEMPLATE_ID = "template_order";
const USER_ID = "DUqRn7rla39uwArF-"; // Public key

export function ContactForm({ selectedMenu }: ContactFormProps) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // Initialize EmailJS
      emailjs.init(USER_ID);
      
      // Prepare template parameters according to the template structure
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        address: data.address,
        selected_menu: selectedMenu,
        message: `Order for: ${selectedMenu}`,
        reply_to: data.email,
      };

      console.log("Sending email with params:", templateParams);

      // Send email using EmailJS with your service ID and template ID
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      
      toast({
        title: t('contact.success'),
        description: t('contact.orderConfirmed'),
      });
      
      form.reset();
    } catch (error: any) {
      console.error("Error sending email:", error);
      
      // More detailed error message based on the error response
      const errorMessage = error.text 
        ? `Failed to send order: ${error.text}` 
        : "Failed to send order. Please try again or contact us directly.";
      
      setFormError(errorMessage);
      
      toast({
        title: "Error",
        description: "Failed to send order. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{t('contact.title')}</h2>
      <p className="mb-4">{t('contact.selectedMenu')}: <strong>{selectedMenu}</strong></p>
      
      {formError && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.name')}</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.email')}</FormLabel>
                <FormControl>
                  <Input required type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.phone')}</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.address')}</FormLabel>
                <FormControl>
                  <Textarea required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('contact.submitting') : t('contact.submit')}
          </Button>
        </form>
      </Form>
    </div>
  );
}
