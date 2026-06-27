export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Senior Frontend Developer · 11+ лет опыта
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Разработка ботов для{' '}
          <span className="gradient-text">Telegram</span>,{' '}
          <span className="gradient-text">MAX</span>
          <br />
          и других платформ под ключ
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Закажите разработку бота любой сложности: от простого Telegram-бота до
          AI-ассистента с интеграциями. Node.js, TypeScript, современный стек.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#bots"
            className="px-8 py-3 rounded-full text-base font-semibold gradient-bg text-white hover:opacity-90 transition-opacity"
          >
            Что я умею
          </a>
          <a
            href="#pricing"
            className="px-8 py-3 rounded-full text-base font-semibold border border-white/10 text-gray-300 hover:bg-white/5 transition-all"
          >
            Стоимость
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
