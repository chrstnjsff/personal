import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cloud & DevOps Engineer",
    company: "One Team Anywhere (MRGE)",
    period: "May 2024 - Present",
    current: true,
  },
  {
    title: "Cloud Engineer III",
    company: "Stratpoint Global Outsourcing",
    period: "Mar 2022 - May 2024",
    current: false,
  },
  {
    title: "Svc Information Developer III",
    company: "DXC Technology",
    period: "Oct 2020 - Mar 2022",
    current: false,
  },
  {
    title: "Service Desk Engineer",
    company: "Bosch Service Solutions",
    period: "Dec 2018 - Oct 2020",
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 border border-gray-200 dark:border-[#2a2a2a]">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-6">
            <Briefcase className="w-5 h-5" />
            Experience
          </h2>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {exp.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
