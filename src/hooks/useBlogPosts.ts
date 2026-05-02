import { useMemo } from 'react';
import { parsePost } from '../utils/markdown';
import type { BlogPost } from '../types';

const rawPosts = import.meta.glob<string>('../data/blog/*.md', { eager: true, query: '?raw', import: 'default' });

export function useBlogPosts(): BlogPost[] {
  return useMemo(() => {
    return Object.entries(rawPosts)
      .map(([path, content]) => {
        const filename = path.split('/').pop() ?? '';
        const slug = filename.replace(/\.md$/, '');
        return parsePost(slug, content);
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, []);
}
