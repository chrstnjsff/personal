import { Award } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "AWS",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    badge: "TF",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white mb-12">
          <Award className="w-8 h-8" />
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 border border-gray-200 dark:border-[#2a2a2a] shadow-sm flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {cert.badge}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
