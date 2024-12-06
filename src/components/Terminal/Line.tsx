import { TypingText } from './TypingText';

interface LineProps {
  prefix?: string;
  text: string;
  delay?: number;
  prefixColor?: string;
  textColor?: string;
  onComplete?: () => void;
  shouldAnimate?: boolean;
  showCursor?: boolean;
}

export const Line = ({ 
  prefix, 
  text, 
  delay = 0,
  prefixColor = 'text-steel',
  textColor = 'text-mint font-medium',
  onComplete,
  shouldAnimate = true,
  showCursor = false
}: LineProps) => (
  <code className="block text-base leading-relaxed font-jetbrains">
    {prefix && <span className={`${prefixColor} font-medium opacity-90`}>{prefix} </span>}
    {shouldAnimate ? (
      <TypingText 
        text={text}
        delay={delay}
        className={`${textColor} drop-shadow-sm brightness-110`}
        onComplete={onComplete}
      />
    ) : (
      <span className={`${textColor} drop-shadow-sm brightness-110`}>{text}</span>
    )}
    {showCursor && (
      <span className="inline-block w-2 h-4 ml-0.5 align-middle bg-electric animate-pulse-fast" />
    )}
  </code>
);