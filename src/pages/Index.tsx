
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
