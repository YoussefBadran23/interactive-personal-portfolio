import React, { useEffect, useState } from 'react';
import { personal, featuredProject } from '../constants';
import { GithubIcon } from './icons/tech/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-950/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <nav className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400 font-bold ring-1 ring-teal-500/30 group-hover:bg-teal-500/25 transition-colors">
            YB
          </span>
          <span className="hidden sm:block text-sm font-semibold text-gray-200">
            Youssef Badran
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 hover:text-teal-300 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg text-gray-400 hover:text-[#0a66c2] hover:bg-white/10 transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <GithubIcon className="h-5 w-5 fill-current" />
          </a>
          <a
            href={featuredProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500 px-3 py-2 text-sm font-semibold text-gray-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-950/60 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-950"></span>
            </span>
            <span className="hidden sm:inline">InsightX Live</span>
            <span className="sm:hidden">Live</span>
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
};
