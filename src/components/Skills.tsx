import { Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "GCP", "Azure"],
  },
  {
    title: "Container & Orchestration",
    skills: ["Kubernetes", "Docker", "Helm", "ArgoCD"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "OpenTofu", "Ansible"],
  },
  {
    title: "Observability",
    skills: ["Grafana", "Prometheus", "Thanos", "CloudWatch"],
  },
  {
    title: "CI/CD",
    skills: ["GitHub Actions", "GitLab CI", "ArgoWorkflows", "Jenkins"],
  },
  {
    title: "Languages",
    skills: ["Python", "Bash", "YAML", "HCL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 border border-gray-200 dark:border-[#2a2a2a]">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-6">
            <Wrench className="w-5 h-5" />
            Tech Stack
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-[#252525] text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-[#333]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
