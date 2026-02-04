import { Wrench, Cloud, Server, Terminal, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "GCP", "Azure (Fundamentals)"],
  },
  {
    title: "Container & Orchestration",
    icon: Server,
    skills: ["Kubernetes", "Docker", "Helm", "ArgoCD", "ArgoWorkflows"],
  },
  {
    title: "Infrastructure as Code",
    icon: Terminal,
    skills: ["Terraform", "OpenTofu", "Ansible", "CloudFormation"],
  },
  {
    title: "Observability & Monitoring",
    icon: Wrench,
    skills: ["Grafana", "Prometheus", "Thanos", "CloudWatch", "Datadog"],
  },
  {
    title: "CI/CD & Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub Actions", "GitLab CI", "Jenkins", "ArgoWorkflows"],
  },
  {
    title: "Languages & Scripting",
    icon: Terminal,
    skills: ["Python", "Bash", "PowerShell", "YAML", "HCL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white mb-12">
          <Wrench className="w-8 h-8" />
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <category.icon className="w-5 h-5 text-blue-500" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
