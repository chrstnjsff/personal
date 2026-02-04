import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cloud & DevOps Engineer",
    company: "One Team Anywhere (MRGE)",
    location: "Mandaluyong City, Metro Manila",
    period: "May 2024 - Present",
    current: true,
    achievements: [
      "Led platform migrations from on-premises/legacy systems to AWS Kubernetes, reducing infrastructure costs by 40% and improving deployment velocity by 50%",
      "Architected enterprise observability stack (Grafana, Prometheus, Thanos) and modernized CI/CD by replacing Jenkins with ArgoWorkflows, achieving 45% faster deployments",
      "Built and deployed a Tech Radar visualization platform on Kubernetes with end-to-end CI/CD pipeline",
    ],
  },
  {
    title: "Cloud Engineer III",
    company: "Stratpoint Global Outsourcing",
    location: "Mandaluyong City, Metro Manila",
    period: "Mar 2022 - May 2024",
    current: false,
    achievements: [
      "Architected an Internal Developer Platform (IDP) enabling self-service AWS provisioning, reducing developer onboarding from 5 days to 2 days (60% faster)",
      "Built reusable Terraform modules for 10+ AWS services (EKS, RDS, S3, IAM), cutting provisioning time by 65%",
      "Led migration of 50+ microservices to Amazon EKS, reducing operational costs by 35%",
    ],
  },
  {
    title: "Svc Information Developer III",
    company: "DXC Technology",
    location: "Taguig City, Metro Manila",
    period: "Oct 2020 - Mar 2022",
    current: false,
    achievements: [
      "Optimized POS database queries and indexing strategies, reducing transaction latency by 20% for 500K+ daily transactions",
      "Managed multi-cloud infrastructure (AWS + GCP), improving service uptime from 95% to 99.5% SLA compliance",
      "Developed Terraform modules and Ansible playbooks for multi-cloud provisioning, automating 30% of manual operations",
    ],
  },
  {
    title: "Service Desk Engineer",
    company: "Bosch Service Solutions",
    location: "Taguig City, Metro Manila",
    period: "Dec 2018 - Oct 2020",
    current: false,
    achievements: [
      "Developed standardized troubleshooting protocols for 60+ daily tickets, reducing ticket backlog by 40%",
      "Automated software deployment using PowerShell scripts, reducing installation time by 93% (30 min to 2 min)",
      "Optimized ticket workflow in BMC Remedy, improving first-call resolution to 85%",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white mb-12">
          <Briefcase className="w-8 h-8" />
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-100 dark:border-[#2a2a2a] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {exp.location}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
