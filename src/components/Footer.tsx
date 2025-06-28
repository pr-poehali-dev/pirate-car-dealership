import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              🏴‍☠️ <span className="text-blue-400">Пират</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Автосалон "Пират" — ваш надёжный партнёр в мире автомобилей. Мы
              предлагаем качественные автомобили по честным ценам.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={20} className="text-blue-400" />
              <span className="text-gray-300">+7 (800) 555-0123</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <Icon name="Mail" size={20} className="text-blue-400" />
              <span className="text-gray-300">info@pirat-auto.ru</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/catalog"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Услуги
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Трейд-ин
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Страхование
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Техосмотр
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 Автосалон "Пират". Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Icon name="Facebook" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Icon name="Youtube" size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
