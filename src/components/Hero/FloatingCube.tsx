import { motion } from 'framer-motion';
import { Cube } from '../Cube';

export const FloatingCube = () => (
  <motion.div 
    className="absolute right-0 top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none opacity-80"
    initial={{ opacity: 0, scale: 0.9, x: 50 }}
    animate={{ 
      opacity: [0.6, 0.8, 0.6],
      scale: [0.95, 1, 0.95],
      x: 0,
      rotate: [0, 2, 0]
    }}
    transition={{ 
      duration: 12,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0"
        animate={{
          filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
          opacity: [0.8, 0.9, 0.8]
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Cube className="w-full h-full opacity-90" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-tr from-electric/10 via-transparent to-purple/10 backdrop-blur-[1px]" />
    </div>
  </motion.div>
);