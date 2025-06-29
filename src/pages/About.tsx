const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">⚓ О нас</h1>
        <p className="text-xl text-gray-600">
          Ваши верные спутники в мире автомобильных приключений
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">🏴‍☠️ Наша история</h2>
          <p className="text-gray-700 leading-relaxed">
            Компания "Пират" была основана командой энтузиастов, которые верят в
            свободу передвижения и качественный сервис. Мы предлагаем широкий
            выбор автомобилей для любых целей - от деловых поездок до
            увлекательных путешествий.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">🎯 Наша миссия</h3>
            <p className="text-gray-700">
              Предоставлять качественные автомобили и безупречный сервис, делая
              каждую поездку комфортной и безопасной.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">⭐ Наши ценности</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Честность и прозрачность</li>
              <li>• Качество обслуживания</li>
              <li>• Забота о клиентах</li>
              <li>• Надежность</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📞 Свяжитесь с нами</h3>
          <div className="space-y-2 text-gray-700">
            <p>Телефон: +7 (xxx) xxx-xx-xx</p>
            <p>Email: info@pirat-auto.ru</p>
            <p>Адрес: г. Москва, ул. Морская, д. 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
