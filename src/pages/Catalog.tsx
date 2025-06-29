import Icon from "@/components/ui/icon";
import { useCart } from "@/hooks/useCart";

const Catalog = () => {
  const { addToCart, isInCart } = useCart();

  const cars = [
    {
      id: 5,
      name: "Volkswagen Golf",
      year: 2023,
      price: "2 400 000",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      specs: ["1.4L", "Автомат", "Бензин"],
    },
    {
      id: 6,
      name: "Honda CR-V",
      year: 2022,
      price: "3 100 000",
      image:
        "https://images.unsplash.com/photo-1602882304721-53b4bd1b6829?w=400&h=300&fit=crop",
      specs: ["1.5L", "Автомат", "Бензин"],
    },
    {
      id: 7,
      name: "Ford Focus",
      year: 2023,
      price: "1 950 000",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
      specs: ["1.6L", "Механика", "Бензин"],
    },
    {
      id: 8,
      name: "Nissan Qashqai",
      year: 2022,
      price: "2 750 000",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      specs: ["2.0L", "Автомат", "Бензин"],
    },
    {
      id: 9,
      name: "Hyundai Tucson",
      year: 2023,
      price: "2 900 000",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
      specs: ["1.6L", "Автомат", "Бензин"],
    },
    {
      id: 10,
      name: "Mazda CX-5",
      year: 2022,
      price: "3 200 000",
      image:
        "https://images.unsplash.com/photo-1567395787002-d8bf8d34fa96?w=400&h=300&fit=crop",
      specs: ["2.5L", "Автомат", "Бензин"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🚗 Каталог автомобилей
        </h1>
        <p className="text-xl text-gray-600">
          Найдите идеальный автомобиль для ваших приключений
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <Icon
                  name="Heart"
                  size={20}
                  className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors"
                />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {car.name} {car.year}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {car.specs.map((spec, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  {car.price} ₽
                </span>
                <button
                  onClick={() => addToCart(car)}
                  disabled={isInCart(car.id)}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    isInCart(car.id)
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  <Icon
                    name={isInCart(car.id) ? "Check" : "ShoppingCart"}
                    size={16}
                  />
                  {isInCart(car.id) ? "В корзине" : "В корзину"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
