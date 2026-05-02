import type { Book } from '../types';

// Add books here — they appear on the website automatically.
// status: 'reading' | 'read'
export const books: Book[] = [
  {
    id: 'thinking-fast-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    year: 2011,
    note: 'Essential for understanding cognitive bias in data-driven decision making.',
    status: 'read',
  },
  {
    id: 'data-mesh',
    title: 'Data Mesh',
    author: 'Zhamak Dehghani',
    year: 2022,
    note: 'Foundational for designing decentralized data ownership models.',
    status: 'read',
  },
  {
    id: 'good-strategy',
    title: 'Good Strategy / Bad Strategy',
    author: 'Richard Rumelt',
    year: 2011,
    note: 'Sharpens how to distinguish real strategy from vague goal-setting.',
    status: 'read',
  },
  {
    id: 'ml-design-patterns',
    title: 'Machine Learning Design Patterns',
    author: 'Valliappa Lakshmanan et al.',
    year: 2020,
    note: 'Practical patterns for reproducible, scalable ML systems.',
    status: 'read',
  },
  {
    id: 'fundamentals-de',
    title: 'Fundamentals of Data Engineering',
    author: 'Joe Reis & Matt Housley',
    year: 2022,
    note: 'Best modern reference for end-to-end data lifecycle design.',
    status: 'reading',
  },
];
