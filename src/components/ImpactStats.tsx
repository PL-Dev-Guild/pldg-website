import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { BarChart3, Users, Briefcase, Activity } from 'lucide-react';
import { useEffect } from 'react';

const Counter = ({ from, to }: { from: number; to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.round(latest));
  
  useEffect(() => {
    const animation = animate(count, to, { duration: 2 });
    return animation.stop;
  }, [count, to]);

  return <motion.span className="mr-2 text-electric">{rounded}</motion.span>;
};

export const ImpactStats = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.a
          href="https://pldg-dashboard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-black/40 backdrop-blur-sm border border-steel/10 rounded-lg p-6 hover:border-electric/30 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-electric/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-electric" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-spaceGrotesk font-bold text-lg text-white group-hover:text-electric transition-colors">
                  Live Dashboard
                </h4>
                <div className="relative flex items-center">
                  <Activity className="w-4 h-4 text-electric" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-electric rounded-full animate-ping" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-electric rounded-full" />
                </div>
              </div>
              <p className="text-steel text-sm">
                Track cohort performance metrics
              </p>
            </div>
          </div>
        </motion.a>

        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-steel/10 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-mint/10 rounded-lg">
              <Users className="w-6 h-6 text-mint" />
            </div>
            <div>
              <h4 className="font-spaceGrotesk font-bold text-lg text-white flex items-center">
                <Counter from={0} to={45} />
                Active Contributors
              </h4>
              <p className="text-steel text-sm">
                Across multiple protocols
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-steel/10 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-purple" />
            </div>
            <div>
              <h4 className="font-spaceGrotesk font-bold text-lg text-white flex items-center">
                <Counter from={0} to={3} />
                Full-Time Hires
              </h4>
              <p className="text-steel text-sm">
                From Cohort 1 by technology partners
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 