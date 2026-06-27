import SectionObserver from './SectionObserver';

const plans = [
  {
    title: 'Простой бот',
    price: 'от 15 000 ₽',
    desc: 'Базовые команды, интеграция с одним API, простое меню',
    features: ['Команды и кнопки', 'Одно API', 'Базовое меню', 'Деплой на сервер'],
  },
  {
    title: 'Средний бот',
    price: 'от 35 000 ₽',
    desc: 'Мультиязычность, база данных, кэширование, расширенная логика',
    features: ['i18n / локализация', 'PostgreSQL / Redis', 'Расширенная логика', 'CI/CD + тесты'],
    popular: true,
  },
  {
    title: 'Сложный бот',
    price: 'от 70 000 ₽',
    desc: 'AI, платежи, мультиплатформенность, микросервисная архитектура',
    features: ['AI / OpenAI интеграция', 'Платёжная система', 'Микросервисы', 'Полный цикл CI/CD'],
  },
];

export default function Pricing() {
  return (
    <SectionObserver id="pricing">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Стоимость <span className="gradient-text">разработки</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Цена зависит от сложности. Называю точную сумму после брифа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`glass rounded-xl p-6 flex flex-col relative ${
                  plan.popular ? 'border-purple-500/40' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium gradient-bg text-white">
                    Популярный
                  </span>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
                  <div className="text-2xl font-bold gradient-text mt-2">{plan.price}</div>
                  <p className="text-sm text-gray-400 mt-2">{plan.desc}</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="w-full text-center py-2.5 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 transition-all"
                >
                  Узнать точную цену
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Поддержка и доработки — от 3 000 ₽/мес
          </p>
        </div>
      </section>
    </SectionObserver>
  );
}
