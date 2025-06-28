import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Truck",
      title: "Доставка по региону",
      description:
        "Быстрая и надёжная доставка автомобилей в любую точку региона",
    },
    {
      icon: "ArrowUpDown",
      title: "Трейд-ин",
      description:
        "Выгодный обмен вашего старого автомобиля на новый с доплатой",
    },
    {
      icon: "Shield",
      title: "Страхование",
      description:
        "Полное страховое сопровождение и оформление всех документов",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем полный спектр услуг для максимального удобства
            наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name={feature.icon} size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
