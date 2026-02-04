import Image from "next/image";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex-shrink-0">
            <Image
              src="/personal/profile.png"
              alt="Christian Josef Aquino"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
              Christian Josef Aquino
            </h1>
            <p className="flex items-center justify-center md:justify-start gap-1.5 text-gray-500 dark:text-gray-400 text-sm mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Mandaluyong City, Metro Manila, Philippines
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-5">
              Cloud & DevOps Engineer | Platform Engineering | Kubernetes & AWS Specialist
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="mailto:chrstnjsff@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/cjosefaquino/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/chrstnjsff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
