import type {
  ExperienceItem,
  SkillGroup,
  EducationItem,
  CertItem,
  HighlightStat,
  ExpertiseDomain,
} from '../types';

export const expertise: ExpertiseDomain[] = [
  {
    id: 'analytics',
    icon: '◈',
    title: 'Enterprise Data, BI & Analytics',
    description:
      'Power BI, Microsoft Fabric, executive dashboards, data engineering, Azure Synapse modernization, and self-serve analytics platforms serving 3K+ users.',
  },
  {
    id: 'governance',
    icon: '◉',
    title: 'Data Governance & Information Management',
    description:
      'Microsoft Purview rollout, data stewardship frameworks, ownership cataloging, lineage documentation, and business stakeholder training programs.',
  },
  {
    id: 'api',
    icon: '⬡',
    title: 'API, Integration & App Modernization',
    description:
      'REST API architecture, OAuth2, CI/CD, SAST, OpenAPI documentation, SDLC governance, and vendor integration with VeriLoan, VeriPark, and Concentra/EQ.',
  },
  {
    id: 'merger',
    icon: '◎',
    title: 'Merger, Regulatory & Continuity Leadership',
    description:
      'Led ABCU–IFCU merger data workstream. OSFI/CEBA/AgriInvest/BCAR regulatory reporting, RESL/CRE portfolio validation, and post-merger continuity planning.',
  },
  {
    id: 'people',
    icon: '◍',
    title: 'People, Operating Model & Delivery',
    description:
      'Designed SIDO operating model, agile BI delivery structure, junior-to-senior talent pipelines, sprint planning, and Azure DevOps delivery governance.',
  },
  {
    id: 'vendor',
    icon: '◆',
    title: 'Vendor & Partner Management',
    description:
      'ThoughtSpot, AWS, GCP, Microsoft, Databricks, Fiserv, CGI, Celero, Central 1, Salesforce, Avanade, VeriPark, Concentra/EQ, and many other strategic partners — driving vendors toward practical, secure, and cost-effective integration outcomes.',
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'ifcu-vp',
    period: 'Jan 2026 – Present',
    company: 'Innovation Federal Credit Union',
    title: 'Vice President, Strategic Insights & Data Office',
    location: 'Remote',
    current: true,
    bullets: [
      'Lead enterprise-wide Strategic Insights & Data Office spanning BI, data engineering, governance, API delivery, application development, integration architecture, and regulatory reporting.',
      'Advanced Microsoft Fabric modernization roadmap, including architecture review, governance design, data integration/orchestration, and AI-ready analytics enablement.',
      'Directed ABCU–IFCU merger data workstream; streamlined data cuts and validation routines to reduce operational burden on Banking and Payments teams.',
      'Sponsored Microsoft Purview data governance, focusing on data ownership, stewardship cataloging, business training, and alignment with analytics modernization.',
    ],
  },
  {
    id: 'ifcu-sd',
    period: 'Sep 2024 – Dec 2025',
    company: 'Innovation Federal Credit Union',
    title: 'Senior Director, Analytics',
    location: 'Remote',
    bullets: [
      'Built and structured the Strategic Insights & Data Office from the ground up, establishing operating models, role architecture, and delivery governance.',
      'Led regulatory reporting transition across CEBA, AgriInvest, CSBFP/CALA, and RESL/BCAR post-merger reporting requirements.',
      'Designed scalable SIDO operating model including junior-to-senior talent pipeline, senior domain leads, and Data Engineering Delivery Lead role.',
    ],
  },
  {
    id: 'scotiabank-ad',
    period: 'Jan 2021 – Sep 2024',
    company: 'Scotiabank',
    title: 'Associate Director, Analytics & Transformation',
    location: 'Toronto, Ontario',
    bullets: [
      'Led product ownership of the #1 SaaS analytics platform at Scotiabank — 32B in deposits, 8B in loans, 3K users, 150K+ monthly views, 250% YoY growth.',
      'SME for end-to-end Small Business data; generated 80+ MIS reports monthly and fulfilled 500+ ad-hoc requests per year.',
      'Primary contact for BCG, Deloitte, and PwC engagements evaluating Salesforce effectiveness and small business market share strategy.',
      'Delivered analytics solutions for CEBA, CDIC, Data Lake migration, GCP, MS Azure, and self-serve Power Platforms.',
    ],
  },
  {
    id: 'scotiabank-mgr',
    period: 'Jan 2019 – Dec 2020',
    company: 'Scotiabank',
    title: 'Manager, Data Infrastructure & Analytics',
    location: 'Toronto, Ontario',
    bullets: [
      'Managed Source of Truth data infrastructure for Small Business portfolio; designed E2E data processes for pre-approvals, cash-flow predictors, and customer prioritization.',
      'Supported cloud data migration by establishing business logic, documentation, data lineage, ETL, and user access provisioning.',
      'Led Thoughtspot analytics platform deployment for 60-person non-technical user base, including training modules and insight strategies.',
    ],
  },
  {
    id: 'cibc',
    period: 'Mar 2017 – Jan 2019',
    company: 'CIBC',
    title: 'Manager, Advanced Analytics',
    location: 'Toronto, Ontario',
    bullets: [
      'Delivered end-to-end analytics projects across all portfolios with focus on operational risk mitigation — regression, decision trees, K-Means, Random Forest, Gradient Boosting, Neural Networks.',
      'Designed operational and performance monitoring KPI dashboards using Tableau for teams across the bank.',
      'Received 3 quarterly individual achievers awards and 5 e-achievers awards for analytical excellence.',
    ],
  },
  {
    id: 'guarantee',
    period: 'Sep 2013 – Mar 2017',
    company: 'The Guarantee Company of North America',
    title: 'Senior Analyst',
    location: 'Toronto, Ontario',
    bullets: [
      'Analyzed corporate financial statements and KPIs for credit/bond applications; managed two junior underwriters.',
      'Developed strategies for new financial products and formalized end-to-end processing workflows.',
    ],
  },
  {
    id: 'aviva',
    period: 'Feb 2011 – May 2013',
    company: 'Aviva Canada',
    title: 'Commercial Underwriter',
    location: 'Toronto, Ontario',
    bullets: [
      'Underwrote multi-line accounts (Auto, Property, Casualty, Umbrella) with $100K+ premiums per month.',
      'Maintained relationships with major brokerages: Masters, HKMB HUB, AON, and Marsh.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'Programming & Scripting',
    icon: '{ }',
    skills: ['Python', 'R', 'SAS', 'SQL', 'HIVEQL', 'BigQuery', 'LaTeX', 'CSS', 'C#'],
  },
  {
    category: 'Dashboards & BI',
    icon: '▦',
    skills: ['Power BI', 'Tableau', 'ThoughtSpot', 'Looker', 'MS Power Platform'],
  },
  {
    category: 'Databases & Cloud',
    icon: '⬡',
    skills: ['SQL Server', 'Azure', 'Microsoft Fabric', 'GCP', 'AWS', 'DB2', 'Hive', 'Oracle', 'AEM'],
  },
  {
    category: 'Tools & Platforms',
    icon: '◈',
    skills: ['Microsoft Purview', 'Azure DevOps', 'Azure Data Factory', 'JIRA', 'Bitbucket', 'Dynamics 365', 'Salesforce', 'VS Code', 'Cursor', 'SSMS', 'R Studio', 'Spyder', 'Toad', 'ACL', 'CRON'],
  },
];

export const education: EducationItem[] = [
  {
    id: 'queens',
    degree: "Master's of Management Analytics (MMA)",
    institution: "Queen's University",
    year: '2017',
    focus: 'Big Data, Pricing Analytics, Text Analytics, AI, Econometrics',
    location: 'Toronto, Ontario',
  },
  {
    id: 'york',
    degree: 'Bachelor of Commerce, Finance',
    institution: 'York University',
    year: '2010',
    location: 'North York, Ontario',
  },
  {
    id: 'udemy',
    degree: 'DevOps Masterclass (150 hrs)',
    institution: 'Udemy',
    year: '2022',
    focus: 'Database Systems, Security Controls, Cloud Solutions, Product Management',
    location: 'Online',
  },
];

export const certifications: CertItem[] = [
  { id: 'cip', name: 'Chartered Insurance Professional (C.I.P)', issuer: 'Insurance Institute of Canada' },
  { id: 'sas', name: 'SAS Certified Predictive Modeler', issuer: 'SAS Institute' },
  { id: 'azure-fundamentals', name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
  { id: 'fabric', name: 'Modern Data Architecture Fundamentals with Microsoft Fabric', issuer: 'Microsoft' },
  { id: 'bigdata', name: 'Big Data Foundations: Techniques & Concepts', issuer: 'IBM' },
  { id: 'vibe-coding', name: 'Vibe Coding for Data Analysts', issuer: 'Coursera' },
  { id: 'systems-analysis', name: 'Introduction to Systems Analysis', issuer: 'Coursera' },
  { id: 'r', name: 'R Statistics Essential Training', issuer: 'LinkedIn Learning' },
  { id: 'csharp', name: 'C# & .NET: Programming', issuer: 'LinkedIn Learning' },
  { id: 'devops', name: 'DevOps Masterclass', issuer: 'Udemy' },
];

export const highlights: HighlightStat[] = [
  { id: 'years', target: 20, prefix: '', suffix: '+', label: 'Years in Financial Services & Data' },
  { id: 'portfolio', target: 40, prefix: '$', suffix: 'B+', label: 'Portfolio Value Overseen' },
  { id: 'reports', target: 80, prefix: '', suffix: '+', label: 'Analytics Reports Monthly' },
  { id: 'users', target: 3, prefix: '', suffix: 'K+', label: 'Analytics Platform Users' },
  { id: 'growth', target: 250, prefix: '', suffix: '%', label: 'Year-Over-Year Platform Growth' },
];
