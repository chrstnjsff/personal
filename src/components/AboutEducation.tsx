import { User, GraduationCap, Wrench, Award, Heart, Briefcase, Mail, Linkedin, Github, MessageCircle, Quote, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Tech Radar Visualization",
    description: "Built a Tech Radar platform for MRGE on Kubernetes with end-to-end CI/CD, enabling engineering teams to track and standardize technology adoption decisions.",
    tags: ["Kubernetes", "ArgoCD", "React"],
    type: "Work",
  },
  {
    title: "Aircraft Parts QR Scanner",
    description: "A web application for aircraft mechanics that displays detailed aircraft parts information when scanning QR codes, improving maintenance workflow efficiency.",
    tags: ["Web App", "QR Code", "Aviation"],
    type: "Personal",
  },
  {
    title: "Terraform AWS Modules",
    description: "Personal collection of reusable Terraform modules for deploying AWS CUDOS Dashboard and Amazon EKS clusters with best practices baked in.",
    tags: ["Terraform", "AWS", "EKS", "CUDOS"],
    type: "Personal",
  },
];

const recommendations = [
  {
    quote: "CJ is a fast learner and easy to work with. Even I am a senior to him, he also helped me with difficulties at work. He is very cooperative and hardworking.",
    author: "Danica Capistrano",
    role: "Support Analyst 2 at Koerber Supply Chain Software",
  },
];

const experiences = [
  { title: "Cloud & DevOps Engineer", company: "One Team Anywhere (MRGE)", period: "2024 - Present", current: true },
  { title: "Cloud Engineer III", company: "Stratpoint Global Outsourcing", period: "2022 - 2024", current: false },
  { title: "Svc Information Developer III", company: "DXC Technology", period: "2020 - 2022", current: false },
  { title: "Service Desk Engineer", company: "Bosch Service Solutions", period: "2018 - 2020", current: false },
];

const skillCategories = [
  { title: "Cloud Platforms", skills: ["AWS", "GCP", "Azure"] },
  { title: "Container & Orchestration", skills: ["Kubernetes", "Docker", "Helm", "ArgoCD"] },
  { title: "Infrastructure as Code", skills: ["Terraform", "OpenTofu", "Ansible"] },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "HashiCorp Terraform Associate (003)", issuer: "HashiCorp" },
];

const hobbies = [
  { emoji: "🏊", title: "Swimming" },
  { emoji: "🏀", title: "Basketball" },
  { emoji: "🏓", title: "Pickleball" },
  { emoji: "👨‍👦", title: "Family Time" },
];

export function AboutEducation() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="space-y-5">
            {/* About Me */}
            <div className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-3">
                <User className="w-4 h-4" />
                About Me
              </h2>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  From troubleshooting tickets to architecting cloud platforms, my journey in tech has been driven by a passion for automation and building systems that scale. With over 6 years of experience, I&apos;ve evolved from a Service Desk Engineer to a Cloud & DevOps Engineer.
                </p>
                <p>
                  Today, I specialize in Kubernetes orchestration, AWS cloud architecture, and building Internal Developer Platforms that empower engineering teams.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-3">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>
              <div className="border-l-2 border-blue-500 pl-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">BS Information Technology</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Jose Rizal University</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">2013 - 2017</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-4">
                <Wrench className="w-4 h-4" />
                Tech Stack
              </h2>
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2">{category.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-[#3a3a3a]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-3">
                <Award className="w-4 h-4" />
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-[#252525]">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{cert.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond the Screen */}
            <div className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-3">
                <Heart className="w-4 h-4 text-red-500" />
                Beyond the Screen
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                When I step away from the terminal, I focus on staying active and spending quality time with family.
              </p>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-[#252525]">
                    <span>{hobby.emoji}</span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{hobby.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Experience */}
            <div id="experience" className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-4">
                <Briefcase className="w-4 h-4" />
                Experience
              </h2>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
                    </div>
                    <div className="flex-1 flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{exp.company}</p>
                      </div>
                      <p className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-4">
                <FolderGit2 className="w-4 h-4" />
                Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-[#252525]">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${project.type === 'Work' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}`}>
                        {project.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] bg-gray-200 dark:bg-[#333] text-gray-600 dark:text-gray-400 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white mb-4">
                <Quote className="w-4 h-4" />
                Recommendations
              </h2>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-[#252525] border-l-2 border-blue-500">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-3">
                      &ldquo;{rec.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">— {rec.author}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{rec.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="bg-white dark:bg-[#1c1c1c] rounded-xl p-5 border border-gray-200 dark:border-[#2d2d2d]">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Let&apos;s work <span className="text-blue-500">together.</span>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Available for Cloud & DevOps consulting, platform engineering, and Kubernetes architecture.
              </p>

              <div className="flex gap-2 mb-5">
                <a href="https://www.linkedin.com/in/cjosefaquino/" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#3a3a3a] text-gray-500 hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/chrstnjsff" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#3a3a3a] text-gray-500 hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Get in Touch</p>
              <div className="space-y-2">
                <a href="mailto:chrstnjsff@gmail.com" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-[#3a3a3a] hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Email</p>
                    <p className="text-sm text-gray-900 dark:text-white">chrstnjsff@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/639295092251" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-[#3a3a3a] hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm text-gray-900 dark:text-white">+63 929 509 2251</p>
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
