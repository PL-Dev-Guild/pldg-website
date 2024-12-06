import { Logo } from './Logo';
import { Button } from './Button';

export const Navbar = () => (
  <nav className="fixed w-full z-50">
    <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
    <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-purple/10" />
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center space-x-4">
          <Logo />
          <div className="hidden sm:block h-5 w-px bg-steel/20" />
          <span className="hidden sm:block font-jetbrains text-white/90 text-sm tracking-wide">
            Protocol Labs Dev Guild
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button href="#about" variant="nav" className="font-jetbrains text-sm px-4 py-2 text-white/90 hover:text-white">
            About
          </Button>
          <Button href="#partners" variant="nav" className="font-jetbrains text-sm px-4 py-2 text-white/90 hover:text-white">
            Partners
          </Button>
          <Button href="#faq" variant="nav" className="font-jetbrains text-sm px-4 py-2 text-white/90 hover:text-white">
            FAQ
          </Button>
          <a 
            href="https://airtable.com/appFEDy5FPBFHPY5r/pagUmnY8upmg0Ge5q/form"
            target="_blank"
            rel="noopener noreferrer" 
            className="ml-4 font-jetbrains text-base px-6 py-2.5 bg-electric text-white rounded-full hover:bg-electric/90 transition-all hover:scale-105 shadow-lg shadow-electric/20 font-medium"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  </nav>
);