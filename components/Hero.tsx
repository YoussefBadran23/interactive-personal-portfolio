import React from 'react';
import { personal, heroStats, featuredProject } from '../constants';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LocationIcon } from './icons/LocationIcon';
import { GithubIcon } from './icons/tech/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

export const Hero: React.FC = () => {
  return (
    <div className="pt-10 sm:pt-16 pb-4 text-center">
      {/* status badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
          </span>
          {personal.status}
        </span>
      </div>

      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        {personal.name}
      </h1>

      <p className="mt-4 text-2xl sm:text-3xl font-bold">
        <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          {personal.role}
        </span>
      </p>
      <p className="mt-2 text-base sm:text-lg font-medium text-gray-400">
        {personal.tagline}
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
        {personal.blurb}
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={featuredProject.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-gray-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/25"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          View InsightX Live
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors"
        >
          <GithubIcon className="h-4 w-4 fill-current" />
          GitHub
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors"
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors"
        >
          <MailIcon className="h-4 w-4" />
          Get in touch
        </a>
      </div>

      {/* contact line */}
      <div className="mt-8 flex justify-center items-center flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
        <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-teal-300 transition-colors">
          <MailIcon className="h-4 w-4" />
          <span>{personal.email}</span>
        </a>
        <span className="flex items-center gap-2">
          <PhoneIcon className="h-4 w-4" />
          <span>{personal.phone}</span>
        </span>
        <span className="flex items-center gap-2">
          <LocationIcon className="h-4 w-4" />
          <span>{personal.location}</span>
        </span>
      </div>

      {/* stats */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {heroStats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm"
          >
            <div className="text-2xl font-extrabold text-teal-400">{s.value}</div>
            <div className="mt-1 text-xs text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
