import SectionObserver from './SectionObserver';
import BotTypeCard from './BotTypeCard';

const botTypes = [
  {
    title: 'Max Bot',
    description: 'Боты для MAX — общение, сервисы, уведомления, интеграция с внешними API.',
    icon: (
      <img src="/max-favicon.png" alt="MAX" className="w-8 h-8" />
    ),
    features: [
      'Чат-боты и автоответчики',
      'Интеграция с внешними API',
      'Кастомные сервисы и уведомления',
      'Лёгкий запуск и поддержка',
    ],
    tech: 'MAX API · Node.js · TypeScript',
  },
  {
    title: 'Telegram Bot',
    description: 'Боты для мессенджеров с кастомной клавиатурой, i18n, кэшированием и тестами.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    features: [
      'Многоуровневое меню и клавиатуры',
      'i18n / локализация',
      'Кэширование через Redis',
      'Jest тесты (85%+ coverage)',
    ],
    tech: 'Grammy · Redis · TypeScript',
  },
  {
    title: 'Discord Bot',
    description: 'Многофункциональные боты для Discord с модерацией, ролями и мини-играми.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    features: [
      'Slash-команды и модальные окна',
      'Модерация и логирование',
      'Ролевая система',
      'Голосовые каналы',
    ],
    tech: 'Discord.js · TypeScript · PostgreSQL',
  },
  {
    title: 'Trading Bot',
    description: 'Боты для криптобирж с аналитикой в реальном времени и автоматическими стратегиями.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    features: [
      'Интеграция с биржами (REST/WebSocket)',
      'Стратегии: сетки, DCA, арбитраж',
      'Дашборд с Highcharts.js',
      'Уведомления в Telegram',
    ],
    tech: 'Node.js · WebSocket · Redis · Highcharts',
  },
  {
    title: 'AI Chatbot',
    description: 'Умные ассистенты на базе OpenAI с историей диалогов и контекстом.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    features: [
      'OpenAI / Ollama интеграция',
      'Контекстная память (RAG)',
      'Streaming ответов',
      'История диалогов в БД',
    ],
    tech: 'Python · LangChain · PostgreSQL · Redis',
  },
  {
    title: 'Slack Bot',
    description: 'Корпоративные боты для Slack: уведомления, интеграции, автоматизация.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    features: [
      'Slash-команды и модалки',
      'Webhook-интеграции',
      'Кастомные уведомления',
      'CI/CD нотификации',
    ],
    tech: 'Bolt.js · TypeScript · Node.js',
  },
  {
    title: 'Web Bot',
    description: 'Веб-боты: парсеры, скрейперы, мониторинг сайтов, автозаполнение форм.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    features: [
      'Парсинг HTML / API',
      'Мониторинг изменений',
      'Экспорт в CSV/Excel',
      'Расписание (cron)',
    ],
    tech: 'Puppeteer · Node.js · Redis · Docker',
  },
];

export default function BotTypes() {
  return (
    <SectionObserver id="bots">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Каких ботов <span className="gradient-text">разрабатываю</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Беру проекты от идеи до релиза. Выберите тип бота — посмотрите, что входит
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {botTypes.map((bot) => (
              <BotTypeCard key={bot.title} {...bot} />
            ))}
          </div>
        </div>
      </section>
    </SectionObserver>
  );
}
