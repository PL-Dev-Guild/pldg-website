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

export const RewardCalculator = () => {
  const [selectedTier, setSelectedTier] = useState<number>(2);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);

  const weeklyReward = baseWeeklyAmount * rewardTiers[selectedTier].multiplier;
  const monthlyReward = weeklyReward * 4;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-steel mb-4 font-jetbrains text-lg">Select Impact Level</label>
            <div className="space-y-3">
              {rewardTiers.map((tier, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedTier(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedTier === index 
                      ? 'border-electric bg-electric/10' 
                      : 'border-steel/10 hover:border-steel/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-spaceGrotesk font-bold text-lg">{tier.label}</div>
                      <div className="text-sm text-steel/70 mt-1">{tier.description}</div>
                    </div>
                    <div className="font-jetbrains text-electric text-lg">x{tier.multiplier}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-steel mb-4 font-jetbrains text-lg">Weekly Hours</label>
            <div className="bg-steel/5 p-6 rounded-lg">
              <input
                type="range"
                min="5"
                max="15"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-steel/10 rounded-lg appearance-none cursor-pointer accent-electric"
              />
              <div className="flex justify-between mt-4 text-sm">
                <span className="text-steel/70">5 hrs</span>
                <span className="font-spaceGrotesk text-electric text-lg">{hoursPerWeek} hrs</span>
                <span className="text-steel/70">15 hrs</span>
              </div>
            </div>
          </div>

          <motion.div 
            className="bg-steel/5 rounded-lg p-8"
            initial={false}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-8">
              <div>
                <div className="text-sm text-steel/70 mb-2">Weekly Reward</div>
                <div className="font-spaceGrotesk text-5xl font-bold text-electric">
                  ${weeklyReward.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-sm text-steel/70 mb-2">Monthly Reward</div>
                <div className="font-spaceGrotesk text-5xl font-bold text-electric">
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