import type { APIRoute } from 'astro';
import { asset } from '../i18n/content';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(asset('sitemap.xml'), site ?? new URL('https://olimov.example')).href;
  return new Response(`User-agent: *\nDisallow: /_preview\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
