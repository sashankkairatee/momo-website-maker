
import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  vegetarian?: boolean;
  className?: string;
}

const MenuItem = ({
  name,
  description,
  price,
  image,
  popular = false,
  vegetarian = false,
  className
}: MenuItemProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {popular && (
          <div className="absolute top-2 right-2 bg-momoOrange text-white text-xs font-bold px-2 py-1 rounded">
            Popular
          </div>
        )}
        {vegetarian && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Veg
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-momoDark">{name}</h3>
          <span className="text-momoOrange font-bold">{price}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
