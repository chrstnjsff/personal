import { User, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {/* About Me */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 border border-gray-200 dark:border-[#2a2a2a]">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
            <User className="w-5 h-5" />
            About Me
          </h2>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              From troubleshooting tickets to architecting cloud platforms, my journey in tech has been driven by a passion for automation and building systems that scale. With over 6 years of experience, I&apos;ve evolved from a Service Desk Engineer to a Cloud & DevOps Engineer, constantly pushing the boundaries of what&apos;s possible with infrastructure.
            </p>
            <p>
              Today, I specialize in Kubernetes orchestration, AWS cloud architecture, and building Internal Developer Platforms that empower engineering teams. I thrive on transforming complex infrastructure challenges into elegant, automated solutions that reduce costs and accelerate delivery.
            </p>
            <p>
              When I&apos;m not immersed in YAML files or Terraform modules, you&apos;ll find me in the pool swimming laps, on the court playing basketball or pickleball, or most importantly, spending quality time playing with my son.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 border border-gray-200 dark:border-[#2a2a2a]">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
            <GraduationCap className="w-5 h-5" />
            Education
          </h2>
          <div className="border-l-2 border-blue-500 pl-4">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              BS Information Technology
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jose Rizal University
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Mandaluyong City, Metro Manila
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Graduated: October 2017
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
