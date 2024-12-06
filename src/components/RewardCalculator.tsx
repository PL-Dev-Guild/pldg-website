import { useState } from 'react';
import { motion } from 'framer-motion';

interface RewardTier {
  label: string;
  description: string;
  multiplier: number;
}

const rewardTiers: RewardTier[] = [
  {
    label: "Learning",
    description: "Completing onboarding, attending workshops, basic contributions",
    multiplier: 1
  },
  {
    label: "Contributing",
    description: "Regular PRs, bug fixes, documentation improvements",
    multiplier: 2
  },
  {
    label: "Building",
    description: "Feature development, significant improvements",
    multiplier: 4
  },
  {
    label: "Leading",
    description: "Project leadership, mentoring others, major features",
    multiplier: 8
  },
  {
    label: "Innovating",
    description: "Architectural improvements, breakthrough solutions",
    multiplier: 16
  }
];

const baseWeeklyAmount = 32; // Base weekly amount in USD
const baseHours = 10; // Baseline hours for 100% reward

export const RewardCalculator = () => {
  const [selectedTier, setSelectedTier] = useState<number>(2);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);

  // Calculate hours multiplier (10 hours = 1.0x, 15 hours = 1.5x, 5 hours = 0.5x)
  const hoursMultiplier = hoursPerWeek / baseHours;
  
  // Calculate rewards with both tier and hours multipliers
  const weeklyReward = baseWeeklyAmount * rewardTiers[selectedTier].multiplier * hoursMultiplier;
  const monthlyReward = weeklyReward * 4;

  return (
    <div className="space-y-8 px-4 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-steel mb-4 font-jetbrains text-base sm:text-lg">Select Impact Level</label>
            <div className="space-y-3">
              {rewardTiers.map((tier, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedTier(index)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all ${
                    selectedTier === index 
                      ? 'border-electric bg-electric/10' 
                      : 'border-steel/10 hover:border-steel/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="font-spaceGrotesk font-bold text-base sm:text-lg">{tier.label}</div>
                      <div className="text-xs sm:text-sm text-steel/70 mt-1 line-clamp-2">{tier.description}</div>
                    </div>
                    <div className="font-jetbrains text-electric text-base sm:text-lg ml-4 flex-shrink-0">x{tier.multiplier}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div>
            <label className="block text-steel mb-4 font-jetbrains text-base sm:text-lg">Weekly Hours</label>
            <div className="bg-steel/5 p-4 sm:p-6 rounded-lg">
              <input
                type="range"
                min="5"
                max="15"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-steel/10 rounded-lg appearance-none cursor-pointer accent-electric"
              />
              <div className="flex justify-between mt-4 items-center">
                <span className="text-steel/70 text-sm">5 hrs</span>
                <div className="text-center">
                  <span className="font-spaceGrotesk text-electric text-base sm:text-lg">{hoursPerWeek} hrs</span>
                  <div className="text-xs sm:text-sm text-steel/70 mt-1">({(hoursMultiplier * 100).toFixed(0)}% scaling)</div>
                </div>
                <span className="text-steel/70 text-sm">15 hrs</span>
              </div>
            </div>
          </div>

          <motion.div 
            className="bg-steel/5 rounded-lg p-6 sm:p-8"
            initial={false}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="text-sm text-steel/70 mb-2">Weekly Reward</div>
                <div className="font-spaceGrotesk text-3xl sm:text-5xl font-bold text-electric">
                  ${weeklyReward.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-sm text-steel/70 mb-2">Monthly Reward</div>
                <div className="font-spaceGrotesk text-3xl sm:text-5xl font-bold text-electric">
                  ${monthlyReward.toFixed(2)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};