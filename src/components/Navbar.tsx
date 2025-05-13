
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";

// Import our new components
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import MobileDrawer from "./navigation/MobileDrawer";
import ScrollHandler from "./navigation/ScrollHandler";
import useScrollNavigation from "@/hooks/useScrollNavigation";

const Navbar = () => {
  const isMobile = useIsMobile();
  const { scrollToSection } = useScrollNavigation();

  return (
    <ScrollHandler>
      {(isScrolled) => (
        <nav 
          className="fixed top-0 w-full z-50 transition-all duration-300"
        >
          <div className="container-width mx-auto backdrop-blur-md bg-white/80 shadow-md">
            <div className="flex justify-between items-center py-3 px-6 md:px-10 lg:px-16">
              {/* Logo */}
              <Logo scrollToSection={scrollToSection} />

              {/* Desktop Navigation */}
              <DesktopNav scrollToSection={scrollToSection} />

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
                    <MobileDrawer scrollToSection={scrollToSection} />
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
            
            {/* Separator */}
            <Separator className="bg-momoOrange/30 h-0.5" />
          </div>
        </nav>
      )}
    </ScrollHandler>
  );
};

export default Navbar;
