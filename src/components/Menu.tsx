
import MenuItem from "./MenuItem";

const menuItems = [
  {
    id: 1,
    name: "Chicken Momo",
    description: "Steamed dumplings filled with minced chicken, herbs, and spices",
    price: "Rs. 150",
    image: "/chicken-momo.jpg",
    popular: true,
    vegetarian: false
  },
  {
    id: 2,
    name: "Veg Momo",
    description: "Steamed dumplings with a mix of fresh vegetables and aromatic spices",
    price: "Rs. 120",
    image: "/veg-momo.jpg",
    popular: false,
    vegetarian: true
  },
  {
    id: 3,
    name: "Kothey Momo",
    description: "Pan-fried dumplings filled with chicken or vegetables, crispy on bottom, steamed on top",
    price: "Rs. 180",
    image: "/kothey-momo.jpg",
    popular: true,
    vegetarian: false
  },
  {
    id: 4,
    name: "Jhol Momo",
    description: "Steamed momos served in a spicy, flavorful broth with herbs and spices",
    price: "Rs. 190",
    image: "/jhol-momo.jpg",
    popular: true,
    vegetarian: false
  },
  {
    id: 5,
    name: "Chow Mein",
    description: "Stir-fried noodles with vegetables and your choice of protein",
    price: "Rs. 160",
    image: "/chow-mein.jpg",
    popular: false,
    vegetarian: false
  },
  {
    id: 6,
    name: "Fried Rice",
    description: "Fragrant rice stir-fried with eggs, vegetables, and your choice of protein",
    price: "Rs. 150",
    image: "/fried-rice.jpg",
    popular: false,
    vegetarian: false
  },
  {
    id: 7,
    name: "Chilli Chicken",
    description: "Crispy chicken pieces tossed in a spicy and tangy sauce with bell peppers and onions",
    price: "Rs. 220",
    image: "/chilli-chicken.jpg",
    popular: true,
    vegetarian: false
  },
  {
    id: 8,
    name: "Manchurian",
    description: "Vegetable or chicken balls in a savory sauce with garlic, ginger, and soy",
    price: "Rs. 200",
    image: "/manchurian.jpg",
    popular: false,
    vegetarian: true
  }
];

const Menu = () => {
  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-momoDark mb-2">Our Menu</h2>
          <div className="h-1 w-20 bg-momoOrange mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our delicious offerings of authentic Himalayan and Chinese cuisine, 
            crafted with love and tradition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              popular={item.popular}
              vegetarian={item.vegetarian}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
