import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Reveal } from './components/Reveal';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { FeaturedProject } from './components/FeaturedProject';
import { SkillBadge } from './components/SkillBadge';
import { MailIcon } from './components/icons/MailIcon';
import { PhoneIcon } from './components/icons/PhoneIcon';
import { LocationIcon } from './components/icons/LocationIcon';
import { GithubIcon } from './components/icons/tech/GithubIcon';
import { LinkedinIcon } from './components/icons/LinkedinIcon';
import {
  personal,
  experiences,
  projects,
  skills,
  certifications,
  education,
} from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <ul className="background-shapes" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>

      <Navbar />

      <div id="top" className="min-h-screen text-gray-300 relative">
        <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
          <Hero />

          <div className="mt-20">
            <Section id="about" eyebrow="Who I am" title="About">
              <p className="text-lg text-gray-400 leading-relaxed">
                Data Scientist and final-year Computer Science student specializing in machine
                learning and analytics. I own the full data lifecycle — extraction, cleaning,
                modeling, and the interactive dashboards that put insight in front of decision
                makers. My flagship project, <span className="text-teal-300 font-medium">InsightX</span>,
                is a self-service analytics platform I designed, built, and deployed on my own:
                an async pipeline running 39 analytics and ML modules (forecasting, churn,
                customer lifetime value, RFM, market-basket) behind a bilingual production dashboard.
                I pair that engineering depth with hands-on Business Intelligence experience in
                Power BI and Tableau to turn complex data into decisions.
              </p>
            </Section>
          </div>

          <Reveal>
            <Section id="experience" eyebrow="Where I've worked" title="Experience">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            </Section>
          </Reveal>

          <Section
            id="projects"
            eyebrow="Built solo, live in production"
            title="Featured Project"
          >
            <Reveal>
              <FeaturedProject />
            </Reveal>

            <h3 className="mt-14 mb-6 text-xl font-semibold text-white">
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj, index) => (
                <Reveal key={proj.title} delay={index * 80}>
                  <ProjectCard {...proj} />
                </Reveal>
              ))}
            </div>
          </Section>

          <Reveal>
            <Section id="skills" eyebrow="What I work with" title="Technical Skills">
              {skills.map((category) => (
                <div key={category.title} className="mb-8">
                  <h3 className="text-lg font-semibold text-teal-400 mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </Section>
          </Reveal>

          <Reveal>
            <Section id="education" eyebrow="Background" title="Education">
              <div className="rounded-lg border border-white/10 bg-gray-800/50 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-gray-400">{education.institution}</p>
                <p className="mt-1 text-teal-400">
                  Expected Graduation: {education.graduation}
                </p>
              </div>
            </Section>
          </Reveal>

          <Reveal>
            <Section title="Certifications">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-md border border-white/10 bg-gray-800/50 p-4 shadow-md"
                  >
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </Section>
          </Reveal>

          <Reveal>
            <Section id="contact" eyebrow="Let's talk" title="Get in Touch">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 text-center shadow-xl">
                <p className="mx-auto max-w-xl text-gray-400">
                  I'm open to Data Science and Machine Learning opportunities. Whether you want
                  to talk about a role, InsightX, or a data problem you're stuck on — reach out.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-gray-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/25"
                  >
                    <MailIcon className="h-4 w-4" />
                    Email me
                  </a>
                  <a
                    href={`tel:${personal.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {personal.phone}
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
                </div>
                <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <LocationIcon className="h-4 w-4" />
                  {personal.location}
                </p>
              </div>
            </Section>
          </Reveal>

          <footer className="mt-20 border-t border-gray-700 py-6 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} {personal.name}. All Rights Reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;
