import { Eye, Code, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Camouflaged Object Detection (COD)',
      year: '2025',
      type: 'Final Year Major Project',
      description: 'Developed a Camouflaged Object Detection system using deep learning techniques to identify objects hidden in complex backgrounds with high precision.',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning'],
      highlights: [
        'Built using deep learning-based segmentation models',
        'Accurately detects hidden objects in complex environments',
        'Leverages PyTorch framework for model training',
        'Implements computer vision techniques with OpenCV',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Vehicle Record System (VRS)',
      year: '2024',
      type: 'Mini Project',
      description: 'A comprehensive vehicle management system built with PHP and MySQL for efficient record keeping and data management.',
      technologies: ['PHP 5.62', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
      highlights: [
        'Add and manage vehicle records',
        'Track vehicle details: number, model, type, owner',
        'Store engine and chassis numbers',
        'User-friendly interface with responsive design',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Calendar size={18} />
                    <span className="font-semibold">{project.year}</span>
                  </div>
                </div>
                <p className="text-white/90 font-medium">{project.type}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={20} className="text-blue-600" />
                    <h4 className="font-semibold text-gray-800">Technologies Used:</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Eye size={20} className="text-green-600" />
                    <h4 className="font-semibold text-gray-800">Key Highlights:</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-green-500 mt-1 flex-shrink-0">●</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
