import { Heart } from "lucide-react";

const hobbies = [
  { emoji: "🏊", title: "Swimming" },
  { emoji: "🏀", title: "Basketball" },
  { emoji: "🏓", title: "Pickleball" },
  { emoji: "👨‍👦", title: "Family Time" },
];

export function BeyondTheScreen() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 border border-gray-200 dark:border-[#2a2a2a]">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
            <Heart className="w-5 h-5 text-red-500" />
            Beyond the Screen
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            When I step away from the terminal, I focus on staying active and spending quality time with family. These activities keep me balanced, energized, and ready to tackle the next infrastructure challenge.
          </p>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#222]"
              >
                <span className="text-lg">{hobby.emoji}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{hobby.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
