import { Terminal } from '../Terminal';
import { Content } from './Content';

export const Hero = () => (
  <div className="relative">
    {/* Full-height terminal section */}
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_0,rgba(16,185,129,0.01)_50%,transparent_100%)]" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <Terminal />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-steel/50 text-sm mb-2">Scroll</div>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-electric/50"
        >
          <path 
            d="M12 4L12 20M12 20L18 14M12 20L6 14" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>

    {/* Content section */}
    <div className="relative bg-black">
      <Content />
    </div>
  </div>
);