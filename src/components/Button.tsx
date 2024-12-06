import { type ReactNode } from 'react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'ghost' | 'nav';
  children: ReactNode;
  className?: string;
}

export const Button = ({ href, variant = 'ghost', children, className = '' }: ButtonProps) => {
  const baseStyles = "font-inter transition-all duration-200 text-sm tracking-wide";
  const variants = {
    primary: "px-6 py-3 bg-electric text-white hover:bg-electric/90 border-2 border-electric hover:border-electric/90 rounded-full",
    ghost: "px-6 py-3 text-steel hover:text-white border-2 border-steel/30 hover:border-steel/50 bg-black rounded-full",
    nav: "px-4 py-2 text-steel hover:text-white"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};