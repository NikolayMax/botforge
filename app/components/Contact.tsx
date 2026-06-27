import SectionObserver from './SectionObserver';

export default function Contact() {
  return (
    <SectionObserver id="contact">
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Кон<span className="gradient-text">такты</span>
            </h2>
            <p className="text-gray-400">
              Готов к обсуждению вашего проекта — пишите!
            </p>
          </div>

          <div className="glass rounded-2xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <a
                href="https://t.me/nmahmutov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-purple-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                    @nmahmutov
                  </div>
                  <div className="text-xs text-gray-500">Telegram</div>
                </div>
              </a>

              <a
                href="mailto:79995815250@ya.ru"
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-purple-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors break-all">
                    79995815250@ya.ru
                  </div>
                  <div className="text-xs text-gray-500">Email</div>
                </div>
              </a>

              <a
                href="https://max.ru/u/f9LHodD0cOLMf1t-m7ctyrmKkylRxa4_cU1Gyp15QJKRKlGlizfYP95bR3c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-purple-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-white">
                  <img
                    src="/max-favicon.png"
                    alt="MAX"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                    @nmahmutov
                  </div>
                  <div className="text-xs text-gray-500">Max</div>
                </div>
              </a>
            </div>

            <div className="border-t border-white/5 pt-6">
              <p className="text-center text-sm text-gray-500">
                Или напишите в MAX: @nmahmutov — я отвечаю быстро
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <a
                  href="https://max.ru/u/f9LHodD0cOLMf1t-m7ctyrmKkylRxa4_cU1Gyp15QJKRKlGlizfYP95bR3c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium gradient-bg text-white hover:opacity-90 transition-opacity"
                >
                  <img src="/max-favicon.png" alt="" className="w-4 h-4" />
                  Написать в MAX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionObserver>
  );
}
