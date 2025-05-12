
import { ArrowRight, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    // This can be changed to a direct link to WhatsApp
    toast({
      title: "WhatsApp Contact",
      description: "+1 123-456-7890",
      duration: 5000,
    });
  };

  const handleFacebookClick = () => {
    // This can be changed to open your Facebook page
    window.open('https://facebook.com/your-page', '_blank');
  };

  const handleInstagramClick = () => {
    // This can be changed to open your Instagram page
    window.open('https://instagram.com/your-handle', '_blank');
  };

  return (
    <footer className="bg-momoDark text-white pt-24 pb-16 mt-24">
      <div className="container-width px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <img 
              src="/lovable-uploads/bc5541ef-2d64-47fe-a0e2-e34542f7decb.png" 
              alt="Momo & More Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 mb-6">
              Authentic Himalayan and Chinese cuisine made with love and tradition.
              Visit us for an unforgettable dining experience.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={handleFacebookClick}
                className="bg-momoOrange p-2 rounded-full hover:bg-momoAccent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                onClick={handleInstagramClick}
                className="bg-momoOrange p-2 rounded-full hover:bg-momoAccent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-momoOrange p-2 rounded-full hover:bg-momoAccent transition-colors"
              >
                <img 
                  src="/lovable-uploads/33897046-fc1a-47aa-98ce-ab0efe59c72a.png" 
                  alt="WhatsApp Icon" 
                  className="w-5 h-5"
                />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-momoOrange cursor-pointer transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-momoOrange cursor-pointer transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> About Us
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('menu')} 
                  className="text-gray-300 hover:text-momoOrange cursor-pointer transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Our Menu
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-momoOrange cursor-pointer transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('map')} 
                  className="text-gray-300 hover:text-momoOrange cursor-pointer transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Map
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-12 text-center text-gray-400">
          <p>&copy; {currentYear} Momo & More. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
