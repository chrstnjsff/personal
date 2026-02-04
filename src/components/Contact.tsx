import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-gray-200 dark:border-[#2a2a2a]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s work{" "}
                <span className="text-blue-500">together.</span>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Available for Cloud & DevOps consulting, platform engineering projects, and Kubernetes architecture. Let&apos;s build something scalable together.
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Follow Me
              </p>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/cjosefaquino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#222] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/chrstnjsff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#222] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Get in Touch
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:chrstnjsff@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-[#333] hover:bg-gray-50 dark:hover:bg-[#222] transition-colors"
                >
                  <Mail className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                    <p className="text-sm text-gray-900 dark:text-white">chrstnjsff@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/639295092251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-[#333] hover:bg-gray-50 dark:hover:bg-[#222] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm text-gray-900 dark:text-white">+63 929 509 2251</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/cjosefaquino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-[#333] hover:bg-gray-50 dark:hover:bg-[#222] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm text-gray-900 dark:text-white">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
