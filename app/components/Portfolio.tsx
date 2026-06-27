import SectionObserver from './SectionObserver';

export default function Portfolio() {
  return (
    <SectionObserver id="portfolio">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Порт<span className="gradient-text">фолио</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Pet-проект, демонстрирующий подход к разработке ботов
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">PoezdHelperBot</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium gradient-bg text-white">
                      Telegram Bot
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Бот для поиска железнодорожных билетов с кэшированием, i18n и CI/CD
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="glass rounded-xl p-5">
                  <div className="text-3xl font-bold gradient-text mb-1">85%</div>
                  <div className="text-sm text-gray-400">Code Coverage</div>
                </div>
                <div className="glass rounded-xl p-5">
                  <div className="text-3xl font-bold gradient-text mb-1">4</div>
                  <div className="text-sm text-gray-400">Уровня тестирования</div>
                </div>
                <div className="glass rounded-xl p-5">
                  <div className="text-3xl font-bold gradient-text mb-1">i18n</div>
                  <div className="text-sm text-gray-400">Мультиязычность</div>
                </div>
                <div className="glass rounded-xl p-5">
                  <div className="text-3xl font-bold gradient-text mb-1">CI/CD</div>
                  <div className="text-sm text-gray-400">GitLab Pipeline</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  Стек технологий
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'TypeScript', 'Grammy', 'Redis', 'Jest', 'GitLab CI/CD'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <a
                href="https://gitlab.com/kolmahmutow/poezdhelperbo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.679 14.254l-1.826-5.542a.837.837 0 00-.128-.244l-2.676-3.578a.644.644 0 00-.531-.276.644.644 0 00-.531.276l-2.677 3.578a.838.838 0 00-.128.244l-1.194 3.624a.267.267 0 00-.038.002H9.27c-.174 0-.315.141-.315.315 0 .04.007.078.02.114L11.214 21a.63.63 0 00.592.42h8.074a.63.63 0 00.592-.42l1.207-3.665v-.002z" />
                </svg>
                Смотреть на GitLab
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionObserver>
  );
}
