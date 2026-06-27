import SectionObserver from './SectionObserver';

const skills = [
  { name: 'React 18+', level: 95 },
  { name: 'TypeScript', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'MobX / Redux Toolkit', level: 90 },
  { name: 'RxJS', level: 80 },
  { name: 'D3.js / Highcharts', level: 85 },
  { name: 'Material-UI', level: 90 },
  { name: 'Docker', level: 80 },
  { name: 'CI/CD', level: 85 },
  { name: 'Jest / RTL', level: 90 },
  { name: 'Express.js', level: 80 },
  { name: 'Webpack / Vite', level: 85 },
  { name: 'REST API', level: 90 },
];

const categories = [
  {
    title: 'Frontend',
    color: 'from-purple-500 to-purple-600',
    items: ['React 18+', 'TypeScript', 'Next.js', 'MobX / Redux Toolkit', 'RxJS', 'Material-UI'],
  },
  {
    title: 'Data & UI',
    color: 'from-blue-500 to-blue-600',
    items: ['D3.js / Highcharts', 'Webpack / Vite', 'ESLint / Prettier', 'CSS3 / Sass'],
  },
  {
    title: 'Backend & DevOps',
    color: 'from-indigo-500 to-indigo-600',
    items: ['Node.js', 'Express.js', 'Docker', 'CI/CD', 'REST API', 'Jest / RTL'],
  },
];

export default function Skills() {
  return (
    <SectionObserver id="skills">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              На<span className="gradient-text">выки</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Современный стек для надёжных и масштабируемых решений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {categories.map((cat) => (
              <div key={cat.title} className="glass rounded-xl p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4 bg-gradient-to-r ${cat.color}`}>
                  {cat.title}
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-6 text-center">Детальный уровень владения</h3>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{skill.name}</span>
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
      </section>
    </SectionObserver>
  );
}
