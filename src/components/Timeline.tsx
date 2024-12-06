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
        return <CheckCircle className="w-6 h-6 text-mint" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-electric animate-pulse" />;
      case 'upcoming':
        return <div className="w-3 h-3 rounded-full bg-purple" />;
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
            className="relative flex-1 min-w-[300px] max-w-[400px]"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="z-10 p-2 rounded-full bg-black ring-2 ring-steel/20 shadow-lg">
                {getIcon(event.status)}
              </div>
              <div className="flex-1 w-full bg-black/40 backdrop-blur-sm rounded-lg p-6 space-y-3 shadow-xl border border-steel/10">
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
              <div className="absolute left-[48px] top-4 w-[calc(100%-48px)] h-0.5 bg-gradient-to-r from-electric via-purple to-mint opacity-50" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};