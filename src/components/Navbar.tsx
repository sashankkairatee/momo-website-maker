
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
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

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-momoLight shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="flex items-center cursor-pointer"
        >
          <img 
            src="/lovable-uploads/bc5541ef-2d64-47fe-a0e2-e34542f7decb.png" 
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
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-momoLight animate-fade-in">
          <div className="px-4 py-2 space-y-4 flex flex-col shadow-lg">
            <a 
              onClick={() => scrollToSection('home')} 
              className="py-2 px-4 block font-medium hover:bg-secondary rounded-md cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('about')} 
              className="py-2 px-4 block font-medium hover:bg-secondary rounded-md cursor-pointer"
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('menu')} 
              className="py-2 px-4 block font-medium hover:bg-secondary rounded-md cursor-pointer"
            >
              Menu
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="py-2 px-4 block font-medium hover:bg-secondary rounded-md cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
