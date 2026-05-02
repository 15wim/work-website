import { marked } from 'marked';
import type { BlogPost } from '../types';

marked.setOptions({ gfm: true, breaks: true });

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    if (key) data[key] = val;
  });

  return { data, content: match[2] };
}

function parseTagsField(raw: string): string[] {
  return raw
    .replace(/[\[\]]/g, '')
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);
}

export function parsePost(slug: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  const html = marked.parse(content) as string;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    tags: data.tags ? parseTagsField(data.tags) : [],
    excerpt: data.excerpt ?? content.slice(0, 160).replace(/[#*_]/g, '') + '…',
    content: html,
  };
}

export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}
