import SectionObserver from './SectionObserver';

export default function About() {
  return (
    <SectionObserver id="about">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Обо <span className="gradient-text">мне</span>
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">
              Senior Frontend Developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-white">
                  B
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                  <p className="text-gray-400 text-sm">11+ лет опыта</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Senior Frontend-разработчик с 11-летним опытом. Специализируюсь на
                  React, TypeScript и Node.js. Работал в Лаборатории Касперского,
                  Газпром нефти, Сбербанке.
                </p>
                <p>
                  Сейчас занимаюсь частной разработкой ботов под ключ. Беру проекты
                  от идеи до полноценного запуска и поддержки.
                </p>

              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6">Ключевые компетенции</h3>
              <div className="space-y-4">
                {[
                  { label: 'React 18+ / TypeScript', level: 95 },
                  { label: 'Next.js', level: 90 },
                  { label: 'Node.js / Express.js', level: 85 },
                  { label: 'UI / Highcharts.js / D3.js', level: 90 },
                  { label: 'CI/CD / Docker', level: 80 },
                  { label: 'Bot Development', level: 75 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.label}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full gradient-bg transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionObserver>
  );
}
