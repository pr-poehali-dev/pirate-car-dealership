import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import CartSheet from "@/components/CartSheet";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          TechShop
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/catalog"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Каталог
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            О нас
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <CartSheet />
          <Button variant="outline" size="sm">
            <Icon name="User" size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}
