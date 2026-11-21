import type { APIRoute } from 'astro';
import { LANGS, href } from '../i18n/content';

/* One entry per language page, each listing its translations. */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://olimov.example');
  const url = (l: (typeof LANGS)[number]) => new URL(href(l), base).href;
  const alts = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l)}"/>`).join('\n')
    + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${url('ja')}"/>`;
  const body = LANGS.map((l) => `  <url>\n    <loc>${url(l)}</loc>\n${alts}\n  </url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
