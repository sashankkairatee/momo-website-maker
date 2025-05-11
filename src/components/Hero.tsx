
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menu.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-b from-slate-900/70 to-slate-900/30 flex items-center justify-center">
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/hero-background.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="container mx-auto text-center px-4">
        <img 
          src="/lovable-uploads/bc5541ef-2d64-47fe-a0e2-e34542f7decb.png" 
          alt="Momo & More Logo" 
          className="mx-auto mb-6 h-24 md:h-32"
        />
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Delicious Bites, Every Time</h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience the authentic taste of handcrafted momos and Chinese specialties, 
          made fresh daily with love and tradition.
        </p>
        <Button 
          onClick={scrollToMenu}
          className="bg-momoOrange hover:bg-momoAccent text-white px-8 py-6 rounded-lg text-lg font-medium transition-all"
        >
          See Our Menu
        </Button>
      </div>
    </div>
  );
};

export default Hero;
