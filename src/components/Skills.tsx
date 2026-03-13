import { Code2, Database, LayoutGrid as Layout } from 'lucide-react';

export default function Skills() {
  const skills = {
    languages: [
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 90 },
    ],
    webDev: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
    ],
    databases: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Code2 className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Languages</h3>
            </div>
            {skills.languages.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Layout className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Web Dev</h3>
            </div>
            {skills.webDev.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Database className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Databases</h3>
            </div>
            {skills.databases.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
