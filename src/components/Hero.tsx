const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Найди своё
            <span className="block text-blue-400">идеальное авто</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Автосалон "Пират" — ваш надёжный партнёр в мире автомобилей.
            Качественные авто, честные цены, полный сервис.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Посмотреть каталог
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
