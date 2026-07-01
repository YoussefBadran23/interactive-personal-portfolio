import React from 'react';

interface SectionProps {
  title: string;
  id?: string;
  eyebrow?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  id,
  eyebrow,
  subtitle,
  children,
}) => {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-400/80 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white mb-3 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-teal-500 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
};
