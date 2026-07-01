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
import { CppIcon } from './components/icons/CppIcon';

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
  tags?: string[];
  link?: string;
  github?: string;
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

export interface StackGroup {
  group: string;
  items: string[];
}

export interface GalleryShot {
  src: string;
  label: string;
}

export interface FeaturedProject {
  title: string;
  subtitle: string;
  timeframe: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: StackGroup[];
  gallery: GalleryShot[];
  live: string;
  github: string;
}

// ---------------------------------------------------------------------------
// Personal / hero
// ---------------------------------------------------------------------------
export const personal = {
  name: 'Youssef Mohamed Attia Badran',
  role: 'Data Scientist',
  tagline: 'Machine Learning · Predictive Analytics · End-to-End Data Products',
  blurb:
    'I build data products end-to-end — from data pipelines and predictive models to production dashboards people actually use.',
  status: 'Data Science major · Class of 2026',
  email: 'youssef_m10239@cic-cairo.com',
  phone: '+20 109 076 9306',
  location: 'Giza, Egypt',
  github: 'https://github.com/YoussefBadran23',
  linkedin: 'https://www.linkedin.com/in/youssef-badran-658222252/',
};

export const heroStats: { value: string; label: string }[] = [
  { value: '39', label: 'Analytics & ML modules shipped' },
  { value: 'Full-stack', label: 'ML platform, built solo' },
  { value: 'Live', label: 'Running in production' },
];

// ---------------------------------------------------------------------------
// Featured project — InsightX
// ---------------------------------------------------------------------------
export const featuredProject: FeaturedProject = {
  title: 'InsightX',
  subtitle: 'Self-Service E-Commerce Analytics & ML Platform',
  timeframe: '2025 – 2026',
  role: 'Solo build — Data Science, Machine Learning & Full-Stack Engineering',
  summary:
    'Upload a sales CSV and InsightX cleans it, runs 39 analytics & machine-learning modules, and serves interactive dashboards with AI-written insights — revenue, RFM, cohort retention, market-basket, churn and forecasting. Designed, built, and deployed end-to-end, entirely on my own.',
  highlights: [
    '39 automated analytics modules — revenue, RFM segmentation, cohort retention, market-basket affinity, gross margin and more.',
    'ML in production: revenue forecasting (Prophet), churn prediction, and customer-lifetime-value modelling (BG/NBD via lifetimes).',
    'Async data pipeline: CSV → cleaning → 39 Celery tasks across 3 queues → cached results → live dashboards.',
    'AI-generated insight narratives on every module, powered by Google Gemini.',
    'Fully bilingual EN / AR interface with complete right-to-left (RTL) support.',
    'Containerized with Docker and deployed to a production VPS — six coordinated services.',
  ],
  stack: [
    { group: 'Data & ML', items: ['Python', 'pandas', 'scikit-learn', 'Prophet', 'lifetimes', 'Celery'] },
    { group: 'Backend', items: ['FastAPI', 'SQLAlchemy 2', 'PostgreSQL', 'Redis', 'Alembic', 'Pydantic v2'] },
    { group: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts'] },
    { group: 'Infra & AI', items: ['Docker', 'Linux VPS', 'Google Gemini'] },
  ],
  gallery: [
    { src: 'insightx-dashboard.png', label: 'Executive dashboard — KPIs, revenue & growth' },
    { src: 'insightx-analytics.png', label: 'Analytics — RFM, market basket & gross margin' },
    { src: 'insightx-forecasting.png', label: '180-day revenue forecast with scenario simulation' },
    { src: 'insightx-segmentation.png', label: 'Customer segmentation clusters' },
  ],
  live: 'http://167.172.173.239:3000',
  github: 'https://github.com/YoussefBadran23/InsightX',
};

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const experiences: Experience[] = [
  {
    role: 'Data Analytics & Business Intelligence Intern',
    company: 'Etqan-Tech — Cairo, Egypt',
    date: 'June 2025 – August 2025',
    description: [
      'Performed end-to-end data analysis, from data scoping and cleaning to final presentation, to address real-world business problems.',
      'Utilized Power Query and Tableau Prep for complex data extraction, transformation, and cleaning from sources including APIs and SQL databases.',
      'Developed and optimized relational data models in Power BI and wrote advanced DAX measures for time intelligence and cohort analysis.',
      'Designed, built, and refined interactive dashboards in both Power BI and Tableau, and presented data-driven insights to stakeholders.',
    ],
  },
  {
    role: 'Data Science & AI Intern',
    company: 'BASS Company — Cairo, Egypt',
    date: 'July 2024 – August 2024',
    description: [
      'Applied supervised (SVR, SVC, Decision Trees) and unsupervised learning techniques for data analysis and interpretation.',
      'Built, trained, and evaluated machine learning models using Scikit-learn and Keras to solve classification and regression tasks.',
      'Developed a neural network using Keras, gaining hands-on experience in deep learning and model optimization.',
      'Utilized SQL for data extraction, cleaning, and preparation for modeling.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Secondary projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    title: 'Predictive Customer Churn Model',
    description: [
      'Built a classification model predicting customer churn using features engineered with Pandas.',
      'Achieved 88% accuracy with an SVC model, outperforming Logistic Regression and other baselines.',
      'Communicated results and drivers of churn with Matplotlib and Seaborn visualizations.',
    ],
    image: 'Predictive Customer Churn Model.jpg',
    tags: ['scikit-learn', 'SVC', 'Pandas', '88% accuracy'],
  },
  {
    title: 'Data Science Pipeline in C++',
    description: [
      'Built a complete data science workflow from scratch in C++ — no ML libraries.',
      'Developed a high-performance CSV processor for data loading and preprocessing.',
      'Implemented K-Means clustering on the Iris dataset, showcasing algorithmic and low-level skills.',
    ],
    image: 'DataSciencePipeline.png',
    tags: ['C++', 'K-Means', 'CSV Engine', 'Algorithms'],
    github: 'https://github.com/YoussefBadran23/DataSciencePipeline',
  },
  {
    title: 'Retail Shoe Store — Full-Stack ERP',
    description: [
      'Deployed a complete Odoo ERP, implementing POS, Inventory, and Sales modules to streamline operations.',
      "Created a static 'Find Us' webpage with HTML/CSS to enhance online visibility and customer access.",
      'Deployed via GitHub Pages, configured a custom domain, and integrated a QR code for in-store engagement.',
    ],
    image: 'odoo.jpg',
    tags: ['Odoo', 'POS', 'Inventory', 'HTML/CSS'],
  },
  {
    title: 'Shopify Theme Development',
    description: [
      'Customized Shopify themes to improve UX and reflect client branding.',
      'Used Liquid, HTML, CSS, and JavaScript to modify layouts, add features, and optimize navigation.',
      'Improved aesthetics, mobile responsiveness, and customer engagement.',
    ],
    image: 'shopify-landing-pages.jpg',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'UX'],
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const skills: SkillCategory[] = [
  {
    title: 'Machine Learning & Data Science',
    skills: [
      { name: 'Python', icon: PythonIcon },
      { name: 'scikit-learn', icon: ScikitLearnIcon },
      { name: 'Keras', icon: KerasIcon },
      { name: 'Time-Series Forecasting (Prophet)' },
      { name: 'Churn Prediction' },
      { name: 'Customer Lifetime Value' },
      { name: 'RFM Segmentation' },
      { name: 'Market Basket Analysis' },
      { name: 'Cohort Retention' },
      { name: 'Feature Engineering' },
      { name: 'Supervised & Unsupervised Learning' },
      { name: 'Deep Learning' },
    ],
  },
  {
    title: 'Data Analysis & Engineering',
    skills: [
      { name: 'pandas', icon: PandasIcon },
      { name: 'NumPy', icon: NumpyIcon },
      { name: 'SQL', icon: SqlIcon },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Celery' },
      { name: 'ETL Pipelines' },
      { name: 'Data Cleaning & Preprocessing' },
    ],
  },
  {
    title: 'Visualization & Business Intelligence',
    skills: [
      { name: 'Power BI' },
      { name: 'Tableau' },
      { name: 'DAX' },
      { name: 'Power Query' },
      { name: 'Matplotlib', icon: MatplotlibIcon },
      { name: 'Seaborn', icon: SeabornIcon },
    ],
  },
  {
    title: 'Backend, MLOps & Tools',
    skills: [
      { name: 'FastAPI' },
      { name: 'Docker' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'REST APIs' },
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'Jupyter', icon: JupyterIcon },
      { name: 'Linux / VPS' },
    ],
  },
  {
    title: 'Also worked with',
    skills: [
      { name: 'C++', icon: CppIcon },
      { name: 'Shopify (Liquid)', icon: ShopifyIcon },
      { name: 'Odoo', icon: OdooIcon },
      { name: 'HTML', icon: HtmlIcon },
      { name: 'CSS', icon: CssIcon },
      { name: 'JavaScript', icon: JavascriptIcon },
    ],
  },
];

// ---------------------------------------------------------------------------
// Certifications & education
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  { name: 'Data Science Math Skills', issuer: 'Coursera (Feb 2023)' },
  { name: 'Data Science Methodology', issuer: 'Coursera (Jan 2023)' },
  { name: 'Tools for Data Science', issuer: 'Coursera (Jan 2023)' },
  { name: 'What is Data Science?', issuer: 'Coursera (Jan 2023)' },
  { name: 'AI Training (50 Hours)', issuer: 'Impact (Certificate of Attendance)' },
  { name: 'Problem Solving Training', issuer: 'Coach Academy' },
];

export const education: Education = {
  degree: 'Bachelor of Computer Science — Data Science Major',
  institution: 'Canadian International College (CIC), Cairo, Egypt',
  graduation: '2026',
};
