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
  prefixColor = 'text-steel/70',
  textColor = 'text-mint font-medium',
  onComplete,
  shouldAnimate = true
}: LineProps) => (
  <code className="block text-base leading-relaxed">
    {prefix && <span className={`${prefixColor} font-medium`}>{prefix} </span>}
    {shouldAnimate ? (
      <TypingText 
        text={text}
        delay={delay}
        className={`${textColor} drop-shadow-sm`}
        onComplete={onComplete}
      />
    ) : (
      <span className={`${textColor} drop-shadow-sm`}>{text}</span>
    )}
  </code>
);