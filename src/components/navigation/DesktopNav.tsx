
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface DesktopNavProps {
  scrollToSection: (sectionId: string) => void;
}

const DesktopNav = ({ scrollToSection }: DesktopNavProps) => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    toast({
      title: "WhatsApp Contact",
      description: "+1 123-456-7890",
      duration: 5000,
    });
  };

  return (
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
  );
};

export default DesktopNav;
