import { RewardBucket } from '../types';

const rewards: RewardBucket[] = [
  { multiplier: 1, amount: 32 },
  { multiplier: 2, amount: 64 },
  { multiplier: 4, amount: 128 },
  { multiplier: 8, amount: 256 },
  { multiplier: 16, amount: 512 },
];

export const RewardTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <th className="py-4 text-left font-spaceGrotesk">Impact Bucket</th>
          <th className="py-4 text-left font-spaceGrotesk">Weekly Reward</th>
          <th className="py-4 text-left font-spaceGrotesk">Monthly Reward</th>
        </tr>
      </thead>
      <tbody>
        {rewards.map((reward, index) => (
          <tr key={index} className="border-b">
            <td className="py-4">🪣 x{reward.multiplier}</td>
            <td className="py-4">${reward.amount}</td>
            <td className="py-4">${reward.amount * 4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);