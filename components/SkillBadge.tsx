
import React from 'react';

interface SkillBadgeProps {
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon: IconComponent }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-700 text-teal-300 text-sm font-medium px-3 py-2 rounded-full shadow-sm transition-all duration-300 hover:bg-gray-600 hover:text-teal-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
      {IconComponent && <IconComponent className="h-5 w-5 fill-current" />}
      <span>{name}</span>
    </div>
  );
};
