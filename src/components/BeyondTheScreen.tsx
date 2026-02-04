import { Heart } from "lucide-react";

const hobbies = [
  {
    emoji: "🏊",
    title: "Swimming",
    description: "Clearing my mind with laps in the pool",
  },
  {
    emoji: "🏀",
    title: "Basketball",
    description: "Staying active on the court",
  },
  {
    emoji: "🏓",
    title: "Pickleball",
    description: "A new favorite for fun competition",
  },
  {
    emoji: "👨‍👦",
    title: "Family Time",
    description: "Playing and bonding with my son",
  },
];

export function BeyondTheScreen() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-200 dark:border-[#2a2a2a] shadow-sm">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-6">
            <Heart className="w-6 h-6 text-red-500" />
            Beyond the Screen
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            When I step away from the terminal, I focus on staying active and spending quality time with family. These activities keep me balanced, energized, and ready to tackle the next infrastructure challenge.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50"
              >
                <div className="text-4xl mb-3">{hobby.emoji}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
