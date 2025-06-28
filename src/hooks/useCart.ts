import { useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

export interface CartItem {
  id: number;
  name: string;
  year: number;
  price: string;
  image: string;
  specs: string[];
  quantity: number;
}

export interface Car {
  id: number;
  name: string;
  year: number;
  price: string;
  image: string;
  specs: string[];
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((car: Car) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === car.id);

      if (existingItem) {
        toast({
          title: "Автомобиль уже в корзине",
          description: `${car.name} ${car.year} уже добавлен в корзину`,
        });
        return prevItems;
      }

      const newItem: CartItem = {
        ...car,
        quantity: 1,
      };

      toast({
        title: "Добавлено в корзину! 🚗",
        description: `${car.name} ${car.year} добавлен в корзину`,
      });

      return [...prevItems, newItem];
    });
  }, []);

  const removeFromCart = useCallback((carId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== carId));
  }, []);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const isInCart = useCallback(
    (carId: number) => {
      return items.some((item) => item.id === carId);
    },
    [items],
  );

  return {
    items,
    addToCart,
    removeFromCart,
    getTotalItems,
    isInCart,
  };
};
