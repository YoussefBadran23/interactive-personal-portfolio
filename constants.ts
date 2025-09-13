import React from 'react';
import { PythonIcon } from './components/icons/tech/PythonIcon';
import { ScikitLearnIcon } from './components/icons/tech/ScikitLearnIcon';
import { KerasIcon } from './components/icons/tech/KerasIcon';
import { PandasIcon } from './components/icons/tech/PandasIcon';
import { NumpyIcon } from './components/icons/tech/NumpyIcon';
import { MatplotlibIcon } from './components/icons/tech/MatplotlibIcon';
import { SeabornIcon } from './components/icons/tech/SeabornIcon';
import { ShopifyIcon } from './components/icons/tech/ShopifyIcon';
import { OdooIcon } from './components/icons/tech/OdooIcon';
import { HtmlIcon } from './components/icons/tech/HtmlIcon';
import { CssIcon } from './components/icons/tech/CssIcon';
import { JavascriptIcon } from './components/icons/tech/JavascriptIcon';
import { GithubIcon } from './components/icons/tech/GithubIcon';
import { SqlIcon } from './components/icons/tech/SqlIcon';
import { JupyterIcon } from './components/icons/tech/JupyterIcon';
import { GitIcon } from './components/icons/tech/GitIcon';

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Education {
    degree: string;
    institution: string;
    graduation: string;
}

export const experiences: Experience[] = [
  {
    role: "Data Analytics & Business Intelligence Intern",
    company: "Etqan-Tech- Cairo, Egypt",
    date: "June 2025 - August 2025",
    description: [
      "Performed end-to-end data analysis, from data scoping and cleaning to final presentation, to address real-world business problems.",
      "Utilized Power Query and Tableau Prep for complex data extraction, transformation, and cleaning from sources including APIs and SQL databases.",
      "Developed and optimized relational data models in Power BI and wrote advanced DAX measures for time intelligence and cohort analysis.",
      "Designed, built, and refined interactive dashboards in both Power BI and Tableau, and presented data-driven insights to stakeholders.",
    ],
  },
  {
    role: "Data Science & AI Intern",
    company: "BASS Company - Cairo, Egypt",
    date: "July 2024 - August 2024",
    description: [
      "Applied supervised (SVR, SVC, Decision Trees) and unsupervised learning techniques for data analysis and interpretation.",
      "Built, trained, and evaluated machine learning models using Scikit-learn and Keras to solve classification and regression tasks.",
      "Developed a neural network using Keras, gaining hands-on experience in deep learning and model optimization.",
      "Utilized SQL for data extraction, cleaning, and preparation for modeling.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Data Science Pipeline in C++",
    description: [
      "Built a complete data science workflow from scratch using C++.",
      "Developed a high-performance CSV processor for data loading and preprocessing.",
      "Implemented the K-Means clustering algorithm to analyze the Iris dataset, showcasing low-level programming and algorithm skills."
    ],
    image: "DataSciencePipeline.jpg",
    link: "https://github.com/YoussefBadran23/DataSciencePipeline"
  },
  {
    title: "Retail Shoe Store Full-Stack ERP Solution",
    description: [
      "Deployed a complete Odoo ERP system, implementing POS, Inventory, and Sales modules to streamline operations.",
      "Created a static 'Find Us' webpage using HTML/CSS to enhance online visibility and customer access.",
      "Deployed the site via GitHub Pages, configured a custom domain, and integrated a QR code for in-store engagement.",
    ],
    image: "odoo.jpg",
  },
  {
    title: "Shopify Theme Development & Customization",
    description: [
        "Customized Shopify themes to improve UX and reflect client branding.",
        "Used Liquid, HTML, CSS, and JavaScript to modify layouts, implement features, and optimize navigation.",
        "Improved aesthetics and functionality, enhancing customer engagement and mobile responsiveness."
    ],
    image: "shopify-landing-pages.jpg",
  },
  {
    title: "Predictive Customer Churn Model",
    description: [
        "Built a classification model predicting customer churn using engineered features with Pandas.",
        "Achieved 88% accuracy using an SVC model, outperforming other algorithms like Logistic Regression.",
        "Visualized results and insights using Matplotlib and Seaborn."
    ],
    image: "Predictive Customer Churn Model.jpg",
  },
];

export const skills: SkillCategory[] = [
  {
      title: "Languages & Libraries",
      skills: [
          { name: "Python", icon: PythonIcon },
          { name: "Scikit-learn", icon: ScikitLearnIcon },
          { name: "Keras", icon: KerasIcon },
          { name: "Pandas", icon: PandasIcon },
          { name: "NumPy", icon: NumpyIcon },
          { name: "Matplotlib", icon: MatplotlibIcon },
          { name: "Seaborn", icon: SeabornIcon },
      ],
  },
  {
      title: "ML & AI Concepts",
      skills: [
          { name: "Supervised & Unsupervised Learning" },
          { name: "Classification" },
          { name: "Regression" },
          { name: "Deep Learning" },
      ],
  },
  {
      title: "Business Intelligence & Visualization",
      skills: [
          { name: "Power BI" },
          { name: "Tableau" },
          { name: "DAX" },
          { name: "Power Query" },
          { name: "Tableau Prep" },
      ],
  },
  {
      title: "Web Development & ERP",
      skills: [
          { name: "Shopify (Liquid)", icon: ShopifyIcon },
          { name: "Odoo (Implementation)", icon: OdooIcon },
          { name: "HTML", icon: HtmlIcon },
          { name: "CSS", icon: CssIcon },
          { name: "JavaScript", icon: JavascriptIcon },
          { name: "GitHub Pages", icon: GithubIcon },
      ],
  },
  {
      title: "Databases & Tools",
      skills: [
          { name: "SQL", icon: SqlIcon },
          { name: "Jupyter Notebooks", icon: JupyterIcon },
          { name: "Git", icon: GitIcon },
          { name: "GitHub", icon: GithubIcon },
      ],
  },
];


export const certifications: Certification[] = [
    { name: "Data Science Math Skills", issuer: "Coursera (Feb 2023)" },
    { name: "Data Science Methodology", issuer: "Coursera (Jan 2023)" },
    { name: "Tools for Data Science", issuer: "Coursera (Jan 2023)" },
    { name: "What is Data Science?", issuer: "Coursera (Jan 2023)" },
    { name: "AI Training (50 Hours)", issuer: "Impact (Certification of Attendance)" },
    { name: "Problem Solving Training", issuer: "Coach Academy" },
];

export const education: Education = {
    degree: "Bachelor of Computer Science - Data Science Major",
    institution: "Canadian International College (CIC), Cairo, Egypt",
    graduation: "2026",
};
