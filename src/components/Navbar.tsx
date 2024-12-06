import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking anchor links or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-transparent to-purple/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-electric transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden absolute left-0 right-0 top-20 bg-black/95 backdrop-blur-xl border-t border-steel/10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex flex-col space-y-4 p-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Button 
                    href="#about" 
                    variant="nav" 
                    className="font-jetbrains text-base px-4 py-3 text-white/90 hover:text-white text-left w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Button 
                    href="#partners" 
                    variant="nav" 
                    className="font-jetbrains text-base px-4 py-3 text-white/90 hover:text-white text-left w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <Button 
                    href="#faq" 
                    variant="nav" 
                    className="font-jetbrains text-base px-4 py-3 text-white/90 hover:text-white text-left w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                >
                  <a 
                    href="https://airtable.com/appFEDy5FPBFHPY5r/pagUmnY8upmg0Ge5q/form"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-jetbrains text-base px-6 py-3 bg-electric text-white rounded-full hover:bg-electric/90 transition-all text-center shadow-lg shadow-electric/20 font-medium block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Apply Now
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};