import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="text-blue-400">Rakesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Full Stack Developer & Computer Science Student
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about building efficient solutions with modern web technologies and deep learning
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://github.com/webdeveloperrakesh69-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-rathod-0b03432a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:webdeveloperrakesh69@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all hover:scale-105"
          >
            <Mail size={20} />
            Email
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            webdeveloperrakesh69@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            +91-8951272028
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}
