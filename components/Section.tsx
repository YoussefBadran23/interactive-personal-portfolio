
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-teal-500 rounded-full"></span>
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
};
