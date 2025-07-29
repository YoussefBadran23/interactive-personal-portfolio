
import React from 'react';
import type { Experience } from '../constants';

export const ExperienceCard: React.FC<Experience> = ({ role, company, date, description }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-teal-500/20 hover:scale-[1.02]">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <p className="text-sm font-mono bg-gray-700 text-teal-300 px-3 py-1 rounded-full">{date}</p>
      </div>
      <p className="text-lg text-gray-400 font-medium mt-1">{company}</p>
      <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
