import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useCart } from "@/hooks/useCart";

const products = [
  // Седаны
  {
    id: 1,
    name: "Toyota Camry",
    price: 2850000,
    category: "sedans",
    year: 2023,
    engine: "2.5L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=400&fit=crop",
    description: "Надежный семейный седан с комфортом и экономичностью",
  },
  {
    id: 2,
    name: "Mercedes C-Class",
    price: 3200000,
    category: "sedans",
    year: 2023,
    engine: "2.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=400&fit=crop",
    description: "Премиальный седан с передовыми технологиями",
  },
  {
    id: 3,
    name: "BMW 3 Series",
    price: 3500000,
    category: "sedans",
    year: 2024,
    engine: "2.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop",
    description: "Спортивный седан с динамичным характером",
  },
  // Внедорожники
  {
    id: 4,
    name: "BMW X5",
    price: 4950000,
    category: "suvs",
    year: 2022,
    engine: "3.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=400&fit=crop",
    description: "Роскошный внедорожник для города и бездорожья",
  },
  {
    id: 5,
    name: "Audi Q7",
    price: 5100000,
    category: "suvs",
    year: 2023,
    engine: "3.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop",
    description: "Семейный внедорожник премиум-класса",
  },
  {
    id: 6,
    name: "Toyota RAV4",
    price: 2900000,
    category: "suvs",
    year: 2023,
    engine: "2.5L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=400&h=400&fit=crop",
    description: "Надежный компактный кроссовер",
  },
  // Хэтчбеки
  {
    id: 7,
    name: "Volkswagen Golf",
    price: 2200000,
    category: "hatchbacks",
    year: 2023,
    engine: "1.4L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=400&fit=crop",
    description: "Компактный хэтчбек для городской жизни",
  },
  {
    id: 8,
    name: "BMW 1 Series",
    price: 2800000,
    category: "hatchbacks",
    year: 2023,
    engine: "1.5L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop",
    description: "Премиальный компактный хэтчбек",
  },
  // Купе
  {
    id: 9,
    name: "BMW 4 Series Coupe",
    price: 4200000,
    category: "coupe",
    year: 2023,
    engine: "2.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
    description: "Элегантное спортивное купе",
  },
  {
    id: 10,
    name: "Mercedes C-Class Coupe",
    price: 3800000,
    category: "coupe",
    year: 2022,
    engine: "2.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop",
    description: "Стильное купе с роскошным интерьером",
  },
  // Кабриолеты
  {
    id: 11,
    name: "BMW Z4",
    price: 4500000,
    category: "convertibles",
    year: 2023,
    engine: "2.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=400&fit=crop",
    description: "Спортивный родстер для настоящих ценителей",
  },
  {
    id: 12,
    name: "Mercedes SL-Class",
    price: 6200000,
    category: "convertibles",
    year: 2023,
    engine: "3.0L",
    transmission: "Автомат",
    fuel: "Бензин",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400&h=400&fit=crop",
    description: "Роскошный кабриолет высшего класса",
  },
];

const categories = [
  { value: "all", label: "Все категории" },
  { value: "sedans", label: "Седаны" },
  { value: "suvs", label: "Внедорожники" },
  { value: "hatchbacks", label: "Хэтчбеки" },
  { value: "coupe", label: "Купе" },
  { value: "convertibles", label: "Кабриолеты" },
];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { addToCart } = useCart();

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Каталог автомобилей</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Поиск автомобилей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">По названию</SelectItem>
              <SelectItem value="price-asc">По цене (возр.)</SelectItem>
              <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <div className="mb-2">
                <Badge variant="secondary" className="text-xs">
                  {categories.find((c) => c.value === product.category)?.label}
                </Badge>
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {product.name} {product.year}
              </h3>
              <div className="flex flex-wrap gap-1 mb-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">
                  {product.engine}
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded">
                  {product.transmission}
                </span>
                <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded">
                  {product.fuel}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {product.price.toLocaleString()}₽
                </span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Icon name="ShoppingCart" size={16} />В корзину
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="Search"
            size={48}
            className="text-gray-400 mx-auto mb-4"
          />
          <p className="text-gray-500 text-lg">Автомобили не найдены</p>
        </div>
      )}
    </div>
  );
}
