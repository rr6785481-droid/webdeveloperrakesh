import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Bachelor of Engineering in Computer Science
                </h4>
                <p className="text-gray-600 font-medium mb-2">
                  Navodaya Institute of Technology
                </p>
                <p className="text-gray-500 mb-2">
                  Raichur, Karnataka
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                    2022 - Present
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                    CGPA: 7.97/10
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Till 7th Semester</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-4 rounded-lg">
                <Award className="text-green-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Full Stack Web Development
                </h4>
                <p className="text-gray-600 font-medium mb-2">Udemy</p>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  2024
                </span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-orange-600" size={24} />
                <h4 className="text-lg font-bold text-gray-800">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['English', 'Kannada', 'Hindi', 'Lambani'].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium border border-orange-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
