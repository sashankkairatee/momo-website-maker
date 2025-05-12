
import { X, Facebook, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DrawerClose,
} from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast";

interface MobileDrawerProps {
  scrollToSection: (sectionId: string) => void;
}

const MobileDrawer = ({ scrollToSection }: MobileDrawerProps) => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    toast({
      title: "WhatsApp Contact",
      description: "+1 123-456-7890",
      duration: 5000,
    });
  };

  return (
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
  );
};

export default MobileDrawer;
