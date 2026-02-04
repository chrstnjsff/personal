import { User, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* About Me */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-100 dark:border-[#2a2a2a] shadow-sm hover:shadow-md transition-shadow">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-6">
            <User className="w-6 h-6" />
            About Me
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-100 dark:border-[#2a2a2a] shadow-sm hover:shadow-md transition-shadow">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-6">
            <GraduationCap className="w-6 h-6" />
            Education
          </h2>
          <div className="border-l-2 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              BS Information Technology
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Jose Rizal University
            </p>
            <p className="text-gray-500 dark:text-gray-500">
              Mandaluyong City, Metro Manila
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Graduated: October 2017
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
