import Icon from "@/components/ui/icon";

const PopularCars = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      year: 2023,
      price: "2 850 000",
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
      specs: ["2.5L", "Автомат", "Бензин"],
    },
    {
      id: 2,
      name: "BMW X5",
      year: 2022,
      price: "4 950 000",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      specs: ["3.0L", "Автомат", "Бензин"],
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      year: 2023,
      price: "3 200 000",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
      specs: ["2.0L", "Автомат", "Бензин"],
    },
    {
      id: 4,
      name: "Audi Q7",
      year: 2022,
      price: "5 100 000",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
      specs: ["3.0L", "Автомат", "Бензин"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Популярные автомобили
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Самые востребованные модели в нашем автосалоне
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Icon name="Plus" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Смотреть все автомобили
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCars;
