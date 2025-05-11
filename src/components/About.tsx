
const About = () => {
  return (
    <section id="about" className="section-padding bg-momoLight">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-momoDark mb-2">About Us</h2>
          <div className="h-1 w-20 bg-momoOrange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-momoDark mb-4">Our Story</h3>
            <p className="text-lg mb-6 leading-relaxed">
              We are a family-run restaurant based in Nepalgunj, serving freshly made momos, noodles, and other Chinese specialties with love and authentic taste.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Our journey began over a decade ago with a simple mission: to bring the rich, authentic flavors of Himalayan and Chinese cuisine to our community. Each dish is crafted using traditional recipes passed down through generations, ensuring an experience that's both nostalgic and delightful.
            </p>
            <p className="text-lg leading-relaxed">
              At Momo & More, every meal is prepared with care, using locally sourced ingredients that are fresh and flavorful. We believe that great food brings people together, and we're honored to be part of your dining experiences and special moments.
            </p>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/restaurant-interior.jpg" 
                alt="Momo & More Interior" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-momoOrange p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-bold text-lg">Since 2012</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
