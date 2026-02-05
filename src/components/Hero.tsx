import Image from "next/image";
import { MapPin, Mail, Linkedin, Github } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden border border-gray-200 dark:border-[#2d2d2d] flex-shrink-0">
            <Image
              src="/personal/profile.png"
              alt="Christian Josef Aquino"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Christian Josef Aquino
            </h1>
            <p className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-500 dark:text-gray-500 text-xs mb-2">
              <MapPin className="w-3 h-3" />
              Mandaluyong City, Metro Manila, Philippines
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Experienced DevOps Engineer | Platform Engineering
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <a
                href="mailto:chrstnjsff@gmail.com"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-xs font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/cjosefaquino/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 dark:border-[#3a3a3a] text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-[#1c1c1c] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/chrstnjsff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 dark:border-[#3a3a3a] text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-[#1c1c1c] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
