import SectionObserver from './SectionObserver';

export default function SeoText() {
  return (
    <SectionObserver id="seo-text">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Разработка ботов <span className="gradient-text">под ключ</span>
            </h2>

            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Заказывайте разработку Telegram ботов и ботов для MAX. Я беру проекты
                от идеи до полноценного запуска и дальнейшей поддержки. Telegram, MAX,
                Discord, AI-ассистенты, торговые роботы — любой тип бота под вашу задачу.
              </p>
              <p>
                Современный стек: <strong className="text-white">Node.js, TypeScript, React, Redis, Docker</strong>.
                Автоматическое тестирование (Jest, 85%+ coverage), CI/CD пайплайны,
                мультиязычность (i18n) — всё включено в разработку.
              </p>
              <p>
                Опыт 11+ лет, работал в Лаборатории Касперского, Газпром нефти,
                Сбербанке. Сейчас занимаюсь частной разработкой — уделяю максимум
                внимания каждому проекту.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionObserver>
  );
}
