import { Code, Database, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science student at Navodaya Institute of Technology, Raichur, with a strong passion for software development and data-driven solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a CGPA of 7.97/10, I've developed expertise in full-stack web development and deep learning, working on projects ranging from vehicle management systems to advanced object detection using PyTorch and OpenCV.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm motivated to create efficient, scalable solutions and contribute to impactful projects in software development and data-related fields.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Full Stack Developer</h3>
              </div>
              <p className="text-gray-600">
                Experienced in building web applications with React.js, Node.js, and modern frameworks
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Database Expert</h3>
              </div>
              <p className="text-gray-600">
                Proficient in MySQL and MongoDB for efficient data management and storage
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Multilingual</h3>
              </div>
              <p className="text-gray-600">
                Fluent in English, Kannada, Hindi, and Lambani
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
