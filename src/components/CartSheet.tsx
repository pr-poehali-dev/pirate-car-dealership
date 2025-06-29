import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useCart } from "@/hooks/useCart";

export default function CartSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    items,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Здесь будет логика оформления заказа
    alert("Заказ оформлен! Спасибо за покупку!");
    clearCart();
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <Icon name="ShoppingCart" size={16} />
          {totalItems > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Корзина ({totalItems})</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Icon
                  name="ShoppingCart"
                  size={48}
                  className="text-gray-400 mb-4"
                />
                <p className="text-gray-500">Корзина пуста</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 p-3 border rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-primary font-semibold">
                        {item.price}₽
                      </p>

                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="h-8 w-8 p-0"
                        >
                          <Icon name="Minus" size={12} />
                        </Button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="h-8 w-8 p-0"
                        >
                          <Icon name="Plus" size={12} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="h-8 w-8 p-0 ml-2"
                        >
                          <Icon name="X" size={12} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Итого:</span>
                <span className="text-lg font-bold text-primary">
                  {totalPrice}₽
                </span>
              </div>

              <div className="space-y-2">
                <Button onClick={handleCheckout} className="w-full" size="lg">
                  Оформить заказ
                </Button>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full"
                  size="sm"
                >
                  Очистить корзину
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
