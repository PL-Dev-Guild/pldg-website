import { FAQ } from '../types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs: FAQ[] = [
  {
    question: "What are the selection and evaluation criteria?",
    answer: [
      {
        title: "Technical Skills and Experience (40%)",
        items: [
          "Blockchain knowledge and fundamentals",
          "Programming proficiency in relevant languages",
          "Quality of previous contributions",
          "Experience with Rust, Go, or distributed systems"
        ]
      },
      {
        title: "Community Engagement and Collaboration (25%)",
        items: [
          "Clear communication skills",
          "Active open source participation",
          "Community building experience",
          "Collaboration abilities"
        ]
      },
      {
        title: "Problem-Solving and Creativity (20%)",
        items: [
          "Innovative thinking approach",
          "Complex problem-solving abilities",
          "Technical solution design"
        ]
      },
      {
        title: "Learning and Adaptability (15%)",
        items: [
          "Growth mindset",
          "Adaptability to new technologies",
          "Resilience in challenges"
        ]
      }
    ]
  },
  {
    question: "How do rewards and payments work?",
    answer: [
      {
        title: "Program Structure",
        items: [
          "Weekly rewards based on participation quality",
          "Weeks 1-6: Foundation Program engagement rewards",
          "Weeks 6-12: Impact-based evaluation by Tech Mentors"
        ]
      },
      {
        title: "Reward Tiers (USD equivalent in FIL)",
        items: [
          "🪣 x1 = $32/week",
          "🪣 x2 = $64/week",
          "🪣 x4 = $128/week",
          "🪣 x8 = $256/week",
          "🪣 x16 = $512/week"
        ]
      },
      {
        title: "Monthly Range",
        items: [
          "Total potential earnings: $128-$2048 per month",
          "Rewards allocated in FIL using 30-day price average"
        ]
      }
    ]
  },
  {
    question: "What are the perks of joining the program?",
    answer: [
      {
        title: "Professional Development",
        items: [
          "Work on real-world impact projects",
          "Earn retro impact awards",
          "Technical mentorship",
          "Career training & opportunities"
        ]
      },
      {
        title: "Learning & Growth",
        items: [
          "Tailored resources & speaker series",
          "Improved technical skills",
          "OSS best practices",
          "Connect with like-minded individuals"
        ]
      }
    ]
  },
  {
    question: "What makes a strong candidate?",
    answer: [
      {
        title: "Required Experience",
        items: [
          "At least 3 years of coding experience",
          "1-3 years of weekly coding practice",
          "Understanding of blockchain fundamentals"
        ]
      },
      {
        title: "Preferred Skills",
        items: [
          "Previous open source contributions",
          "Experience with distributed systems",
          "Proficiency in Rust and Go",
          "Strong collaboration skills"
        ]
      }
    ]
  },
  {
    question: "What happens after applying?",
    answer: [
      {
        title: "Application Process",
        items: [
          "Email notification within weeks after deadline",
          "10 hours of required program pre-work if accepted",
          "Pre-work completion mandatory for final admission"
        ]
      }
    ]
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto px-4 md:px-0">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-steel/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-steel/5 transition-colors"
          >
            <h3 className="font-spaceGrotesk font-bold text-lg md:text-xl pr-8">{faq.question}</h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-electric" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-8 pt-2 space-y-6">
                  {Array.isArray(faq.answer) && faq.answer.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <h4 className="font-spaceGrotesk font-semibold text-white/90">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start space-x-3 text-steel">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0 mt-2" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};