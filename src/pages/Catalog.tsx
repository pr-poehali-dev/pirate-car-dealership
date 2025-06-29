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
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 120000,
    category: "phones",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    description: "Новейший флагманский смартфон Apple",
  },
  {
    id: 2,
    name: "MacBook Pro 14",
    price: 250000,
    category: "laptops",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    description: "Профессиональный ноутбук для творчества",
  },
  {
    id: 3,
    name: "iPad Air",
    price: 80000,
    category: "tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    description: "Планшет для работы и развлечений",
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 25000,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    description: "Беспроводные наушники с шумоподавлением",
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    price: 95000,
    category: "phones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    description: "Флагманский Android смартфон",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    price: 180000,
    category: "laptops",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
    description: "Ультрабук для бизнеса",
  },
];

const categories = [
  { value: "all", label: "Все категории" },
  { value: "phones", label: "Смартфоны" },
  { value: "laptops", label: "Ноутбуки" },
  { value: "tablets", label: "Планшеты" },
  { value: "accessories", label: "Аксессуары" },
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
        <h1 className="text-3xl font-bold mb-6">Каталог товаров</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Поиск товаров..."
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

              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
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
          <p className="text-gray-500 text-lg">Товары не найдены</p>
        </div>
      )}
    </div>
  );
}
