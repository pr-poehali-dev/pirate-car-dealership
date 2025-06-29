const Catalog = () => {
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
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Автомобиль {item}</h3>
              <p className="text-gray-600 mb-4">
                Описание автомобиля и его характеристики
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ₽ 25,000
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Подробнее
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
