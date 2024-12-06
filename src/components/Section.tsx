import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = '' }: SectionProps) => (
  <section id={id} className={`py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-spaceGrotesk font-bold mb-12">{title}</h2>
      {children}
    </div>
  </section>
);