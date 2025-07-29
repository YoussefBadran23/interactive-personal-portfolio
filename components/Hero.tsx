
import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LocationIcon } from './icons/LocationIcon';

export const Hero: React.FC = () => {
  return (
    <div className="text-center mb-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        Youssef Mohamed Attia Badran
      </h1>
      <p className="mt-4 text-xl sm:text-2xl font-medium text-teal-400">
      Data Scientist & Business Intelligence Analyst
      </p>
      <div className="mt-8 flex justify-center items-center flex-wrap gap-x-6 gap-y-3 text-gray-400">
        <span className="flex items-center gap-2">
          <MailIcon className="h-5 w-5" />
          <span>youssef_m10239@cic-cairo.com</span>
        </span>
        <span className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5" />
          <span>+20 1090769306</span>
        </span>
        <span className="flex items-center gap-2">
          <LocationIcon className="h-5 w-5" />
          <span>Giza, Al Jizah, Egypt</span>
        </span>
      </div>
    </div>
  );
};
