import { Terminal } from '../Terminal';

export const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_0,rgba(16,185,129,0.01)_50%,transparent_100%)]" />
    
    <div className="relative z-10 w-full">
      <Terminal />
    </div>
  </div>
);