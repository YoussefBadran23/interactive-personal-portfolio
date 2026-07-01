import React, { useState } from 'react';
import { featuredProject as p } from '../constants';
import { GithubIcon } from './icons/tech/GithubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export const FeaturedProject: React.FC = () => {
  const [active, setActive] = useState(0);
  const shot = p.gallery[active];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 shadow-2xl shadow-black/40">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative p-6 sm:p-8">
        {/* header */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live in production
          </span>
          <span className="text-xs font-medium text-gray-500">{p.timeframe}</span>
          <span className="text-xs font-medium text-gray-500">·</span>
          <span className="text-xs font-medium text-gray-500">{p.role}</span>
        </div>

        <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {p.title}
        </h3>
        <p className="mt-1 text-lg font-medium text-teal-400">{p.subtitle}</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* gallery */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-gray-950/40 shadow-lg">
              <img
                src={shot.src}
                alt={shot.label}
                className="w-full aspect-[16/10] object-cover object-top"
              />
            </div>
            <p className="mt-2 text-center text-xs text-gray-500">{shot.label}</p>

            <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
              {p.gallery.map((g, i) => (
                <button
                  key={g.src}
                  onClick={() => setActive(i)}
                  aria-label={g.label}
                  className={[
                    'overflow-hidden rounded-lg border transition-all',
                    i === active
                      ? 'border-teal-400 ring-2 ring-teal-400/40'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30',
                  ].join(' ')}
                >
                  <img
                    src={g.src}
                    alt={g.label}
                    className="w-full aspect-[16/10] object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* details */}
          <div className="lg:col-span-2 flex flex-col">
            <p className="text-gray-400 leading-relaxed">{p.summary}</p>

            <ul className="mt-5 space-y-2.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-gray-300">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-semibold text-gray-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                View Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors"
              >
                <GithubIcon className="h-4 w-4 fill-current" />
                Source on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* tech stack */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.stack.map((group) => (
              <div key={group.group}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2.5">
                  {group.group}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-teal-200/90 ring-1 ring-inset ring-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
