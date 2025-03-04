import { motion } from 'framer-motion';
import { Button } from '../Button';

export const Content = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl">
          <h1 className="font-spaceGrotesk font-bold text-7xl sm:text-8xl text-white mb-8 tracking-tight leading-none">
            <span className="text-electric">{`{ `}</span>
            Accelerate
            <br />
            <span className="mt-1 inline-block bg-clip-text text-transparent bg-gradient-to-r from-electric via-purple to-mint">
              Open Source
            </span>
            <span className="text-electric">{` }`}</span>
          </h1>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-steel text-2xl font-jetbrains leading-relaxed">
                <span className="text-electric">const</span> impact = <span className="text-mint">await</span> PLDG.contribute();
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                href="https://airtable.com/appFEDy5FPBFHPY5r/pagtQ6iiVRuettENG/form" 
                variant="primary" 
                className="text-base px-8 py-4 group font-jetbrains"
              >
                pldg apply --cohort=3
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
              <div className="flex items-center space-x-4 bg-steel/5 rounded-full px-6 py-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                  <span className="font-jetbrains text-steel">process.env.APPLICATIONS_OPEN</span>
                </div>
                <div className="font-jetbrains text-white">
                  <span className="text-steel/70">=</span>{' '}
                  <span className="font-bold text-electric">true</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-steel/10">
              <div className="bg-steel/5 p-4 rounded-lg">
                <div className="font-jetbrains text-electric mb-2">runtime: 12w</div>
                <div className="text-steel font-jetbrains">Program.duration</div>
              </div>
              <div className="bg-steel/5 p-4 rounded-lg">
                <div className="font-jetbrains text-electric mb-2">reward: 2048</div>
                <div className="text-steel font-jetbrains">MaxMonthly.FIL</div>
              </div>
              <div className="bg-steel/5 p-4 rounded-lg">
                <div className="font-jetbrains text-electric mb-2">time: 10-15h</div>
                <div className="text-steel font-jetbrains">Weekly.commitment</div>
              </div>
            </div>

            <div className="pt-8 pb-12 border-t border-steel/10">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-electric rounded-full"></div>
                <p className="text-lg text-steel font-jetbrains">
                  <span className="text-electric">git checkout</span> cohort-3 <span className="text-steel/70">// Deadline: May 2025</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);