import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Line } from './Line';

const commands = [
  {
    command: "pldg init",
    outputs: [
      { text: "Initializing PLDG environment...", color: "text-purple" },
      { text: "Installing dependencies...", color: "text-mint" },
      { text: "Checking protocol compatibility... ✓", color: "text-electric" }
    ]
  },
  {
    command: "pldg stats --rewards",
    outputs: [
      { text: "Active Contributors: 500+ 🚀", color: "text-electric" },
      { text: "Total FIL Rewards: 500,000 ⚡", color: "text-mint" },
      { text: "Open Issues: 247 // Join the movement 🌟", color: "text-purple" }
    ]
  },
  {
    command: "pldg apply --cohort=2 --confirm",
    outputs: [
      { text: "Scanning GitHub profile... 🔍", color: "text-steel/70" },
      { text: "Analyzing contribution history... 📊", color: "text-mint" },
      { text: "Ready to build the future of open source ⚡", color: "text-electric" }
    ]
  }
];

export const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [activeCommand, setActiveCommand] = useState(0);
  const [currentOutputIndex, setCurrentOutputIndex] = useState(-1);
  const [isTypingCommand, setIsTypingCommand] = useState(false);
  const [showInitialCursor, setShowInitialCursor] = useState(true);

  const currentCommand = commands[activeCommand];

  // Start typing after initial cursor blink
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialCursor(false);
      setIsTypingCommand(true);
    }, 2000); // Show blinking cursor for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const moveToNextOutput = () => {
    if (currentOutputIndex < currentCommand.outputs.length - 1) {
      setCurrentOutputIndex(prev => prev + 1);
    } else if (activeCommand < commands.length - 1) {
      setTimeout(() => {
        setCommandHistory(prev => [...prev, currentCommand.command]);
        setActiveCommand(prev => prev + 1);
        setCurrentOutputIndex(-1);
        setIsTypingCommand(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setCommandHistory([]);
        setActiveCommand(0);
        setCurrentOutputIndex(-1);
        setIsTypingCommand(true);
      }, 2000);
    }
  };

  const handleCommandComplete = () => {
    setIsTypingCommand(false);
    moveToNextOutput();
  };

  const handleOutputComplete = () => {
    setTimeout(() => {
      moveToNextOutput();
    }, 1000);
  };

  return (
    <motion.div
      className="bg-black/50 backdrop-blur-sm border border-steel/10 rounded-lg overflow-hidden font-jetbrains shadow-2xl w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-8 py-5 border-b border-steel/10 flex items-center justify-between">
        <div className="flex space-x-3">
          <div className="w-4 h-4 rounded-full bg-[#FF5F56]" />
          <div className="w-4 h-4 rounded-full bg-[#FFBD2E]" />
          <div className="w-4 h-4 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-steel/50 text-base">pldg-terminal</span>
          <TerminalIcon className="w-5 h-5 text-steel/50" />
        </div>
      </div>
      <div className="p-8 space-y-4 text-lg">
        {commandHistory.map((cmd, index) => (
          <div key={index} className="opacity-50">
            <Line prefix="$" text={cmd} textColor="text-mint" shouldAnimate={false} />
            {commands[index].outputs.map((output, outputIndex) => (
              <Line
                key={outputIndex}
                prefix="→"
                text={output.text}
                prefixColor="text-purple"
                textColor={output.color}
                shouldAnimate={false}
              />
            ))}
          </div>
        ))}
        
        {showInitialCursor && (
          <Line 
            prefix="$"
            text=""
            textColor="text-mint"
            showCursor={true}
          />
        )}
        
        {isTypingCommand && (
          <Line 
            prefix="$"
            text={currentCommand.command}
            textColor="text-mint"
            onComplete={handleCommandComplete}
            delay={activeCommand === 0 ? 100 : 0} // Slower typing for first command
          />
        )}
        
        {!isTypingCommand && currentOutputIndex >= 0 && (
          <Line 
            key={`output-${currentOutputIndex}`}
            prefix="→"
            text={currentCommand.outputs[currentOutputIndex].text}
            prefixColor="text-purple"
            textColor={currentCommand.outputs[currentOutputIndex].color}
            onComplete={handleOutputComplete}
          />
        )}
      </div>
    </motion.div>
  );
};