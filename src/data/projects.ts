import type { Project } from '../types';

export const projects: Project[] = [
  /* ── Tier 1: Innovation FCU ── */
  {
    id: 'fabric',
    tier: 1,
    company: 'Innovation FCU',
    title: 'Microsoft Fabric Modern Analytics Architecture',
    description:
      'Drove Microsoft EDE scoping and selected architecture review areas for Fabric platform security, governance, data integration, orchestration, data science, generative AI/Copilot, and Purview Data Map.',
    tags: ['Analytics', 'Architecture'],
    highlight: 'AI-ready data platform',
  },
  {
    id: 'merger',
    tier: 1,
    company: 'Innovation FCU',
    title: 'ABCU–IFCU Merger Data Integration & Validation',
    description:
      'Led data workstream for major financial institution merger. Removed time-intensive validation work from Banking and Payments teams, streamlined data cuts, and directed RESL/mortgage portfolio logic gap analysis.',
    tags: ['Merger & Regulatory', 'Analytics'],
    highlight: 'Cross-functional data workstream lead',
  },
  {
    id: 'purview',
    tier: 1,
    company: 'Innovation FCU',
    title: 'Microsoft Purview Data Governance Implementation',
    description:
      'Established business-facing governance model with data ownership, stewardship cataloging, business training, and alignment between governance processes and analytics platform modernization.',
    tags: ['Governance'],
    highlight: '8-week rapid engagement',
  },
  {
    id: 'regulatory',
    tier: 1,
    company: 'Innovation FCU',
    title: 'Regulatory Reporting Continuity (CEBA, AgriInvest, CSBFP/CALA)',
    description:
      'Owned regulatory reporting transition across government programs post-merger. Coordinated data and reporting continuity to ensure OSFI compliance obligations were met without interruption.',
    tags: ['Merger & Regulatory', 'BI'],
    highlight: 'Zero reporting gaps post-merger',
  },
  {
    id: 'loan-api',
    tier: 1,
    company: 'Innovation FCU',
    title: 'Loan Calculations API / VeriLoan Integration',
    description:
      'Sponsored delivery of a stateless REST API for loan calculations with PowerApps integration, OpenAPI documentation, OAuth2 security, CI/CD pipeline, and SAST scanning aligned to SDLC governance.',
    tags: ['API & Integration'],
    tech: ['REST', 'OAuth2', 'OpenAPI', 'CI/CD', 'SAST'],
  },
  {
    id: 'cob',
    tier: 1,
    company: 'Innovation FCU',
    title: 'Cost of Borrowing (CoB) Calculator & Reporting Remediation',
    description:
      'Led delivery governance for regulatory/compliance-adjacent CoB calculator. Resolved reporting defects and missing field additions that were blocking deployment readiness.',
    tags: ['Merger & Regulatory', 'API & Integration'],
  },
  {
    id: 'veripark-nba',
    tier: 1,
    company: 'Innovation FCU',
    title: 'VeriPark Next Best Action Analytics & Measurement',
    description:
      'Challenged simplistic page-view measurement; proposed effectiveness model using clickstream analysis, Dynamics 365 activity logs, privacy-aware access controls, and recommendation categorization.',
    tags: ['Analytics', 'BI'],
    highlight: 'Stronger product analytics model',
  },
  {
    id: 'concentra',
    tier: 1,
    company: 'Innovation FCU',
    title: 'Concentra / EQ FX Partner Portal Automation',
    description:
      'Reframed vendor discussion from portal policy to core need: automated secure file delivery. Committed internal technical resources to eliminate manual-download risk and regulatory timing exposure.',
    tags: ['API & Integration'],
  },
  {
    id: 'sido-model',
    tier: 1,
    company: 'Innovation FCU',
    title: 'SIDO Operating Model & Workforce Transformation',
    description:
      'Designed scalable data organization: junior-to-senior talent pipeline, Senior Data Engineer domain leads, Data Engineering Delivery Lead role, and protected senior capacity for architecture and complex solutioning.',
    tags: ['Leadership'],
    highlight: 'Team structure built for scale',
  },
  {
    id: 'bi-agile',
    tier: 1,
    company: 'Innovation FCU',
    title: 'BI Agile Delivery & Data Engineering Lead Role',
    description:
      'Matured BI delivery from ticket handling to agile, technically literate product delivery across reports, databases, dashboards, and business-line solutions via Azure DevOps sprint planning.',
    tags: ['Leadership', 'BI'],
  },
  {
    id: 'identifi',
    tier: 1,
    company: 'Innovation FCU',
    title: 'Identifi Third-Party Relationship Ownership',
    description:
      'Acted as Relationship Owner through merger completion. Recommended continuing arrangement with reduced storage rates — balancing vendor risk, cost, and archival access continuity.',
    tags: ['Merger & Regulatory'],
  },
  {
    id: 'acs-sms',
    tier: 1,
    company: 'Innovation FCU',
    title: 'ACS SMS Rewrite & Coding Standards Uplift',
    description:
      'Led modernization of inherited legacy code into controlled SDLC practices, VeriPark testing compliance, and risk-item closure by end of 2026.',
    tags: ['API & Integration'],
  },

  /* ── Tier 2: Scotiabank ── */
  {
    id: 'saas-platform',
    tier: 2,
    company: 'Scotiabank',
    title: '#1 Small Business SaaS Analytics Platform',
    description:
      'Product owner of the most widely used customer data platform at Scotiabank — covering 32B in deposits and 8B in loans, with 3K users, 150K monthly views, and 250% YoY growth over 3 years.',
    tags: ['Analytics', 'BI'],
    highlight: '250% YoY growth',
  },
  {
    id: 'prospecting-db',
    tier: 2,
    company: 'Scotiabank',
    title: "Bank's First External Prospecting Database",
    description:
      'Designed and executed the bank\'s first analytics solution for identifying top external prospects — a full-scale pipeline from identification to fulfilment with a 360° view of prospect data.',
    tags: ['Analytics'],
    highlight: 'First of its kind at Scotiabank',
  },
  {
    id: 'ceba-cdic',
    tier: 2,
    company: 'Scotiabank',
    title: 'CEBA / CDIC Regulatory Analytics',
    description:
      'Delivered end-to-end analytics solutions for the Canadian Emergency Business Account and Canadian Deposit Insurance Corp initiatives, including data lake migration to GCP and MS Azure.',
    tags: ['Merger & Regulatory', 'Analytics'],
    tech: ['GCP', 'MS Azure', 'Data Lake'],
  },
  {
    id: 'campaign',
    tier: 2,
    company: 'Scotiabank',
    title: 'Marketing Campaign Targeting Optimization',
    description:
      'Developed ML-based targeting strategies that doubled campaign success rates from 2% to 4% YoY, using customer segmentation, predictive scoring, and cross-channel attribution.',
    tags: ['Analytics'],
    highlight: 'Campaign success rate doubled',
  },
  {
    id: 'revenue-model',
    tier: 2,
    company: 'Scotiabank',
    title: 'Small Business Streamlined Revenue Model',
    description:
      'Led cross-functional analytics to create a revenue model aligned to Finance with only 3% variance — driving deposit growth of 10% and lending growth of 8% YoY consecutively for 4 years.',
    tags: ['Analytics', 'BI'],
    highlight: '3% variance to Finance target',
  },

  /* ── Tier 3: Personal Projects ── */
  {
    id: 'snapshare',
    tier: 3,
    company: 'Personal Project',
    title: 'SnapShare — Event Photo Sharing Platform',
    description:
      'Full-stack SaaS application where event hosts generate a QR code that guests scan to instantly upload photos — no app download, no account required. Claude AI auto-curates albums, detects duplicates via perceptual hashing, generates highlight reels, and moderates content. Freemium model with Stripe payments.',
    tags: ['Full-Stack'],
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Stripe', 'Claude API', 'Tailwind CSS'],
    highlight: 'Built with Cursor AI',
    link: 'https://github.com/15wim',
  },
];

export const projectTags = [
  'All',
  'Analytics',
  'BI',
  'Governance',
  'API & Integration',
  'Merger & Regulatory',
  'Architecture',
  'Leadership',
  'Full-Stack',
] as const;
