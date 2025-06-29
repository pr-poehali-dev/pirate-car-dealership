import Icon from "@/components/ui/icon";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

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

          {/* Cart */}
          <div className="flex items-center">
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Icon name="ShoppingCart" size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
