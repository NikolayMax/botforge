'use client';

import { useState } from 'react';
import SectionObserver from './SectionObserver';

const faqs = [
  {
    q: 'Сколько времени занимает разработка бота?',
    a: 'Простой бот с базовыми командами — 3–7 дней. Средний по сложности (i18n, БД, кэш) — 2–3 недели. Сложные проекты с AI, платежами и микросервисами обсуждаются индивидуально.',
  },
  {
    q: 'Какие боты можно разработать для MAX?',
    a: 'Для MAX можно разработать чат-ботов, автоответчики, интеграции с внешними API, кастомные сервисы уведомлений, ботов для бизнес-процессов. MAX активно развивается, и это хорошая площадка для запуска ботов.',
  },
  {
    q: 'Вы даёте гарантию на работу?',
    a: 'Да. Исправляю баги бесплатно в течение месяца после сдачи проекта. Также могу предложить ежемесячную поддержку и доработки по мере необходимости.',
  },
  {
    q: 'Нужен свой сервер или хостинг для бота?',
    a: 'Нет, вам не нужно ничего покупать самостоятельно. Я могу настроить VPS/хостинг под ключ и поддерживать его работоспособность. Вы получаете готового работающего бота.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Предоплата 50% — после утверждения брифа. Оставшиеся 50% — после приёмки готового бота. Работаю по договору или ТЗ, всё прозрачно.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionObserver id="faq">
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass rounded-xl transition-all duration-300 ${
                  open === i ? 'border-purple-500/30' : ''
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-sm sm:text-base font-medium text-white pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionObserver>
  );
}
