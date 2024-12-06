import { motion } from 'framer-motion';
import { Cube } from '../Cube';

export const FloatingCube = () => (
  <motion.div 
    className="absolute right-0 top-1/2 -translate-y-1/2 w-[45rem] h-[45rem] pointer-events-none"
    initial={{ opacity: 0, scale: 0.8, x: 100 }}
    animate={{ 
      opacity: [0.1, 0.15, 0.1],
      scale: [1, 1.05, 1],
      x: 0,
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0"
        animate={{
          filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
          opacity: [1, 0.8, 1]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Cube className="w-full h-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 via-transparent to-purple/20" />
    </div>
  </motion.div>
);