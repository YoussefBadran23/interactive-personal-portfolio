
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { experiences, projects, skills, certifications, education } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <ul className="background-shapes" aria-hidden="true">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="min-h-screen text-gray-300 relative">
        <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <Hero />

          <Section title="Professional Summary">
            <p className="text-lg text-gray-400 leading-relaxed">
            Analytical and driven Computer Science graduate specializing in Data Science and Business Intelligence. Proven ability to manage the full data lifecycle, from extraction and modeling to creating insightful visualizations. Hands-on experience building machine learning models using Python and developing interactive dashboards with Power BI and Tableau. Proficient in web development, ERP implementation (Shopify, Odoo), and database management. Eager to leverage a versatile skill set to translate complex data into actionable business strategies in a challenging technology role.
            </p>
          </Section>

          <Section title="Professional Experience">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </Section>

          <Section title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj, index) => (
                <ProjectCard key={index} {...proj} />
              ))}
            </div>
          </Section>
          
          <Section title="Technical Skills">
            {skills.map((category) => (
              <div key={category.title} className="mb-8">
                <h3 className="text-xl font-semibold text-teal-400 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                     <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section title="Education">
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-gray-400">{education.institution}</p>
                <p className="text-teal-400 mt-1">Expected Graduation: {education.graduation}</p>
            </div>
          </Section>

          <Section title="Certifications">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="bg-gray-800/50 p-4 rounded-md shadow-md">
                     <p className="font-semibold text-white">{cert.name}</p>
                     <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
          </Section>

          <footer className="text-center mt-20 py-6 border-t border-gray-700">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Youssef Mohamed Attia Badran. All Rights Reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;