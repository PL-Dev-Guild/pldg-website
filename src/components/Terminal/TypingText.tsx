import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypingText = ({ 
  text, 
  delay = 0, 
  speed = 100,
  className = '',
  onComplete 
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!started) {
      timeout = setTimeout(() => {
        setStarted(true);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [delay, started]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {displayedText.length < text.length && (
        <span className="animate-pulse">▋</span>
      )}
    </span>
  );
};