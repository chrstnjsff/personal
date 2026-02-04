import { Award } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 border border-gray-200 dark:border-[#2a2a2a]">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
            <Award className="w-5 h-5" />
            Certifications
          </h2>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-gray-50 dark:bg-[#222]"
              >
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
