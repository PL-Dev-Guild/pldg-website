import { TypingText } from './TypingText';

interface LineProps {
  prefix?: string;
  text: string;
  delay?: number;
  prefixColor?: string;
  textColor?: string;
  onComplete?: () => void;
  shouldAnimate?: boolean;
}

export const Line = ({ 
  prefix, 
  text, 
  delay = 0,
  prefixColor = 'text-steel/50',
  textColor = 'text-mint',
  onComplete,
  shouldAnimate = true
}: LineProps) => (
  <code className="block">
    {prefix && <span className={prefixColor}>{prefix} </span>}
    {shouldAnimate ? (
      <TypingText 
        text={text}
        delay={delay}
        className={textColor}
        onComplete={onComplete}
      />
    ) : (
      <span className={textColor}>{text}</span>
    )}
  </code>
);