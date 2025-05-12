
import { useState, useEffect } from 'react';
import { Menu, MessageCircle, X, Facebook, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerTrigger
} from "@/components/ui/drawer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for the navbar
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
    toast({
      title: "WhatsApp Contact",
      description: "+1 123-456-7890",
      duration: 5000,
    });
  };

  return (
    <nav 
      className="fixed top-0 w-full z-50 transition-all duration-300"
    >
      <div className="container-width mx-auto backdrop-blur-md bg-white/80 shadow-md">
        <div className="flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/lovable-uploads/906ecb3b-9372-423f-8754-f6950c5dd236.png" 
              alt="Momo & More Logo" 
              className="h-12" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection('home')} 
              className="nav-link text-lg font-medium cursor-pointer hover:text-momoOrange transition-colors"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('about')} 
              className="nav-link text-lg font-medium cursor-pointer hover:text-momoOrange transition-colors"
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('menu')} 
              className="nav-link text-lg font-medium cursor-pointer hover:text-momoOrange transition-colors"
            >
              Menu
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-lg font-medium cursor-pointer hover:text-momoOrange transition-colors"
            >
              Contact
            </a>
            <a 
              onClick={() => scrollToSection('map')} 
              className="nav-link text-lg font-medium cursor-pointer hover:text-momoOrange transition-colors"
            >
              Map
            </a>
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleWhatsAppClick}
                className="text-green-600 hover:bg-green-100"
              >
                <img 
                  src="/lovable-uploads/33897046-fc1a-47aa-98ce-ab0efe59c72a.png" 
                  alt="WhatsApp Icon" 
                  className="h-6 w-6"
                />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-0 h-full max-h-[100dvh]">
                <div className="bg-[#FF8C00] text-white h-full flex flex-col">
                  <div className="flex justify-end p-4">
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-orange-600 drawer-close">
                        <X className="h-6 w-6" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl font-medium">
                    <DrawerClose asChild>
                      <a 
                        onClick={() => scrollToSection('home')}
                        className="cursor-pointer text-white hover:text-gray-200"
                      >
                        HOME
                      </a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a 
                        onClick={() => scrollToSection('about')}
                        className="cursor-pointer text-white hover:text-gray-200"
                      >
                        ABOUT
                      </a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a 
                        onClick={() => scrollToSection('menu')}
                        className="cursor-pointer text-white hover:text-gray-200"
                      >
                        MENU
                      </a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a 
                        onClick={() => scrollToSection('contact')}
                        className="cursor-pointer text-white hover:text-gray-200"
                      >
                        CONTACT
                      </a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a 
                        onClick={() => scrollToSection('map')}
                        className="cursor-pointer text-white hover:text-gray-200"
                      >
                        MAP
                      </a>
                    </DrawerClose>
                  </div>
                  
                  {/* Separator line */}
                  <div className="px-12 py-4">
                    <div className="h-px bg-white/50"></div>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-6 p-6">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={handleWhatsAppClick}
                      className="text-white hover:bg-orange-600"
                    >
                      <img 
                        src="/lovable-uploads/33897046-fc1a-47aa-98ce-ab0efe59c72a.png" 
                        alt="WhatsApp Icon" 
                        className="h-6 w-6"
                      />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={handleWhatsAppClick}
                      className="text-white hover:bg-orange-600"
                    >
                      <Facebook className="h-6 w-6" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={handleWhatsAppClick}
                      className="text-white hover:bg-orange-600"
                    >
                      <Instagram className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        
        {/* Separator */}
        <Separator className="bg-momoOrange/30 h-0.5" />
      </div>
    </nav>
  );
};

export default Navbar;
