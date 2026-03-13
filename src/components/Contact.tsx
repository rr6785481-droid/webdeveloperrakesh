import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm currently seeking opportunities in software development and would love to discuss how I can contribute to your team. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:webdeveloperrakesh69@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
              >
                <div className="bg-blue-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">webdeveloperrakesh69@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918951272028"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
              >
                <div className="bg-green-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold">+91-8951272028</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Raichur, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Social Links</h3>
            <p className="text-gray-300 mb-8">
              Connect with me on social media and check out my work on GitHub
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/webdeveloperrakesh69-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
              >
                <div className="bg-gray-700 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-semibold">webdeveloperrakesh69-eng</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rakesh-rathod-0b03432a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
              >
                <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-semibold">Rakesh Rathod</p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
              <p className="text-sm text-gray-300 italic">
                "Motivated and detail-oriented individual seeking challenging roles in software development, where I can utilize my programming skills to develop efficient solutions and contribute to impactful projects."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400">
            © 2024 Rakesh. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
