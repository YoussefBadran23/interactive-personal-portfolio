import React from 'react';
import type { Project } from '../constants';
import { GithubIcon } from './icons/tech/GithubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  tags,
  link,
  github,
}) => {
  const href = link || github;

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-gray-800/50 shadow-lg transition-all duration-300 hover:border-teal-500/30 hover:shadow-teal-500/20 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="mt-1 flex-shrink-0 text-gray-400 hover:text-teal-300 transition-colors"
            >
              {github ? (
                <GithubIcon className="h-5 w-5 fill-current" />
              ) : (
                <ExternalLinkIcon className="h-5 w-5" />
              )}
            </a>
          )}
        </div>

        <ul className="mt-4 flex-grow list-disc list-inside space-y-2 text-sm text-gray-400">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {tags && tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-teal-500/10 px-2 py-1 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
