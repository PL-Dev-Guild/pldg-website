import { TimelineEvent } from '../types';
import { CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  const getIcon = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-8 h-8 text-mint" />;
      case 'in-progress':
        return <Clock className="w-8 h-8 text-electric animate-pulse" />;
      case 'upcoming':
        return <div className="w-4 h-4 rounded-full bg-purple" />;
    }
  };

  return (
    <div className="relative w-full overflow-x-auto pb-8">
      <div className="flex gap-8 min-w-max px-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative w-[350px]"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="z-10 p-3 rounded-full bg-black ring-2 ring-steel/20 shadow-lg flex items-center justify-center">
                {getIcon(event.status)}
              </div>
              <div className="flex-1 w-full h-[120px] bg-black/40 backdrop-blur-sm rounded-lg p-6 space-y-3 shadow-xl border border-steel/10">
                <h3 className="font-spaceGrotesk font-bold text-xl text-white">
                  {event.title}
                </h3>
                <p className="text-steel font-jetbrains">
                  {event.date}
                </p>
              </div>
            </div>
            {/* Horizontal connecting line */}
            {index < events.length - 1 && (
              <div className="absolute left-[56px] top-5 w-[calc(100%-56px)] h-0.5 bg-gradient-to-r from-electric via-purple to-mint opacity-50" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};