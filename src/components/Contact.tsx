import { Mail, Linkedin, Github, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-[#2a2a2a] shadow-sm">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s work{" "}
                <span className="text-blue-500">together.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Available for Cloud & DevOps consulting, platform engineering projects, and Kubernetes architecture. Let&apos;s build something scalable together.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/cjosefaquino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/chrstnjsff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <a
                href="mailto:chrstnjsff@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    chrstnjsff@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/639295092251"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <MessageCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    WhatsApp / Viber
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    +63 929 509 2251
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/cjosefaquino/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    LinkedIn
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
