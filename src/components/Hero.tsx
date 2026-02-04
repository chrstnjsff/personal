import { MapPin, Mail, Linkedin, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            CJA
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Christian Josef Aquino
            </h1>
            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 mb-4">
              <MapPin className="w-4 h-4" />
              Mandaluyong City, Metro Manila, Philippines
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Cloud & DevOps Engineer | Platform Engineering | Kubernetes & AWS Specialist
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="mailto:chrstnjsff@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/chrstnjsff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/chrstnjsff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
