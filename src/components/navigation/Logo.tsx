
interface LogoProps {
  scrollToSection: (sectionId: string) => void;
}

const Logo = ({ scrollToSection }: LogoProps) => {
  return (
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
  );
};

export default Logo;
