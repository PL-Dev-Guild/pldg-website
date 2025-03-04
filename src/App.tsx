import { useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Timeline } from './components/Timeline';
import { RewardCalculator } from './components/RewardCalculator';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './components/Footer';
import { ImpactStats } from './components/ImpactStats';
import { TimelineEvent } from './types';
import { motion } from 'framer-motion';

// Lazy load components that are below the fold
const FAQSection = lazy(() => import('./components/FAQSection').then(module => ({ default: module.FAQSection })));
const PartnerShowcase = lazy(() => import('./components/PartnerShowcase').then(module => ({ default: module.PartnerShowcase })));

const timelineEvents: TimelineEvent[] = [
  {
    title: "Cohort 2",
    date: "Jan 13 - Apr 6, 2025",
    status: "in-progress"
  },
  {
    title: "Cohort 3 Starts",
    date: "May 2025",
    status: "upcoming"
  },
  {
    title: "Phase 1: Foundation",
    date: "Jan 13 - Feb 23, 2025",
    status: "completed"
  },
  {
    title: "Phase 2: Impact",
    date: "Feb 24 - Apr 6, 2025",
    status: "in-progress"
  }
];

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.02)_0,rgba(99,102,241,0)_100%)]">
      <ErrorBoundary>
        <Navbar />
        <div className="relative">
          <Hero />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <Section id="about" title="About PLDG" className="pt-24 md:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">
            <div className="space-y-6 md:space-y-8">
              <p className="text-steel text-base md:text-lg leading-relaxed">
                The Protocol Labs Developer Guild (PLDG) grows the impact of open source contributors 
                to Protocol Labs & Web3 public goods projects.
              </p>
              <div className="space-y-6">
                <h3 className="font-spaceGrotesk font-bold text-xl md:text-2xl bg-gradient-to-r from-electric to-mint bg-clip-text text-transparent">
                  Our Commitment
                </h3>
                <ul className="space-y-4 md:space-y-6 text-steel">
                  <li className="flex items-start group">
                    <span className="text-electric mr-2 transition-transform group-hover:translate-x-1">→</span>
                    <span>Empower & educate contributors through hands-on experience with cutting-edge open source projects</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-electric mr-2 transition-transform group-hover:translate-x-1">→</span>
                    <span>Provide expert mentorship from open source leaders</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-electric mr-2 transition-transform group-hover:translate-x-1">→</span>
                    <span>Create tangible pathways to contribute and earn rewards based on impact</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <h3 className="font-spaceGrotesk font-bold text-xl md:text-2xl bg-gradient-to-r from-electric to-mint bg-clip-text text-transparent">
                Program Structure
              </h3>
              <ul className="space-y-4 md:space-y-6 text-steel">
                <li className="flex items-center space-x-3 group">
                  <span className="w-2 h-2 rounded-full bg-electric group-hover:scale-110 transition-transform"></span>
                  <span>12-week program split into two 6-week phases</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <span className="w-2 h-2 rounded-full bg-electric group-hover:scale-110 transition-transform"></span>
                  <span>10-15 hours per week commitment</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <span className="w-2 h-2 rounded-full bg-electric group-hover:scale-110 transition-transform"></span>
                  <span>Work with mentors on real-world projects</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <span className="w-2 h-2 rounded-full bg-electric group-hover:scale-110 transition-transform"></span>
                  <span>Earn FIL rewards based on impact</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <span className="w-2 h-2 rounded-full bg-electric group-hover:scale-110 transition-transform"></span>
                  <span>Connect with a global community of developers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="font-spaceGrotesk text-2xl md:text-3xl font-bold text-center mb-12">
              Proven Track Record
            </h3>
            <ImpactStats />
          </div>
        </Section>

        <ErrorBoundary>
          <Suspense fallback={
            <div className="w-full h-[400px] flex items-center justify-center">
              <div className="animate-pulse bg-steel/5 rounded-lg w-full max-w-3xl h-64" />
            </div>
          }>
            <Section id="partners" title="Our Ecosystem" className="pt-32 md:pt-40 pb-20 md:pb-32">
              <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center px-4 md:px-0">
                <p className="text-steel text-base md:text-lg leading-relaxed">
                  Work with leading Web3 protocols and technologies that are shaping the future of the decentralized internet.
                </p>
              </div>
              <PartnerShowcase />
            </Section>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Section id="rewards" title="Calculate Your Impact Rewards" className="pt-40 md:pt-52 bg-steel/5">
            <div className="max-w-3xl mb-8 md:mb-12 px-4 md:px-0">
              <p className="text-steel text-base md:text-lg leading-relaxed">
                Contributors receive weekly rewards based on their impact level and time commitment. 
                Use the calculator below to estimate potential rewards based on your contribution level.
              </p>
            </div>
            <RewardCalculator />
          </Section>
        </ErrorBoundary>

        <ErrorBoundary>
          <Section id="timeline" title="Program Timeline" className="pt-32 md:pt-40">
            <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-center px-4 md:px-0">
              <p className="text-steel text-base md:text-lg leading-relaxed">
                Join our next cohort and start your journey in open source development.
              </p>
            </div>
            <Timeline events={timelineEvents} />
          </Section>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={
            <div className="w-full h-[400px] flex items-center justify-center">
              <div className="animate-pulse bg-steel/5 rounded-lg w-full max-w-3xl h-64" />
            </div>
          }>
            <Section id="faq" title="FAQ" className="pt-32 md:pt-40 bg-steel/5">
              <FAQSection />
            </Section>
          </Suspense>
        </ErrorBoundary>

        <Section id="apply" title="Ready to Build the Future?" className="pt-32 md:pt-40 pb-20 md:pb-32">
          <div className="text-center max-w-2xl mx-auto px-4 md:px-0">
            <p className="text-steel text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
              Join a community of developers creating lasting impact in the open source ecosystem.
            </p>
            <motion.a 
              href="https://airtable.com/appFEDy5FPBFHPY5r/pagtQ6iiVRuettENG/form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 md:px-8 py-4 bg-electric text-white font-inter text-base md:text-lg rounded-full hover:bg-electric/90 transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-electric/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Cohort 3
            </motion.a>
            <p className="mt-4 md:mt-6 text-steel/70 font-jetbrains text-sm">
              Applications go live in May 2025
            </p>
          </div>
        </Section>

        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;