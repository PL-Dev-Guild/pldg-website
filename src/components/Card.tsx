import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, children, className = '' }: CardProps) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    <h3 className="font-spaceGrotesk font-bold text-xl mb-4">{title}</h3>
    {children}
  </div>
);