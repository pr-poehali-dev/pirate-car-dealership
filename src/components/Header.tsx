import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              🏴‍☠️ <span className="text-blue-600">Пират</span>
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="/catalog"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Каталог
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              О нас
            </a>
            <a
              href="/contacts"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Icon name="ShoppingCart" size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-gray-900 hover:text-blue-600 font-medium"
              >
                Главная
              </a>
              <a
                href="/catalog"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Каталог
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                О нас
              </a>
              <a
                href="/contacts"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
