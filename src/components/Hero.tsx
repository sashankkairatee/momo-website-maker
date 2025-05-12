
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const foodItems = [
    {
      name: "Steaming Momos",
      quote: "Delicious Bites, Every Time",
      description: "Experience the authentic taste of handcrafted momos, made fresh daily with love and tradition."
    },
    {
      name: "Chow Mein",
      quote: "Noodles that spark joy",
      description: "Perfectly stir-fried noodles with fresh vegetables and your choice of protein."
    },
    {
      name: "Fried Rice",
      quote: "A flavorful journey in every bite",
      description: "Our signature fried rice combines aromatic spices and fresh ingredients for an unforgettable taste."
    },
    {
      name: "Manchurian",
      quote: "Bold flavors that impress",
      description: "Crispy vegetable or meat balls tossed in our special tangy and spicy sauce."
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-slide effect
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000); // 5 seconds

    return () => clearInterval(autoSlideInterval);
  }, [api]);

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
        <Carousel className="max-w-3xl mx-auto" setApi={setApi}>
          <CarouselContent>
            {foodItems.map((item, index) => (
              <CarouselItem key={index} className="px-1">
                <div className="p-4">
                  <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{item.quote}</h2>
                  <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    {item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious className="relative inline-flex h-10 w-10" />
            <CarouselNext className="relative inline-flex h-10 w-10" />
          </div>
        </Carousel>
        
        <div className="mt-8 animate-fade-in">
          <p className="text-momoOrange text-xl md:text-2xl font-semibold">
            Your everyday craving stop
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
