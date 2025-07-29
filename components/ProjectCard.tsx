
import React from 'react';
import type { Project } from '../constants';

export const ProjectCard: React.FC<Project> = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-teal-500/20 hover:-translate-y-1 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400 flex-grow">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
