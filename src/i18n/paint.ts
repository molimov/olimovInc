import type { Lang } from './content';

/* Colour words by country: Japan-related terms in shu (朱), Uzbekistan-
   and Central-Asia-related terms in turquoise. Used on headings and
   labels only — body text stays in ink so it reads calmly. */

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const RULES: Record<Lang, RegExp> = {
  // group 1 = Japan, group 2 = Uzbekistan / Central Asia
  ja: /(日本|東京|TOKYO)|(ウズベキスタン|タシケント|中央アジア|TASHKENT)/g,
  en: /\b(Japan(?:ese)?|Tokyo|TOKYO)\b|\b(Uzbekistan|Uzbek|Tashkent|TASHKENT|Central Asia(?:n)?)\b/g,
  ru: /(Япони\p{L}*|[Яя]понск\p{L}*|Токио|TOKYO)|(Узбекистан\p{L}*|[Уу]збекск\p{L}*|Ташкент\p{L}*|Центральн\p{L}*\s+Ази\p{L}*|TASHKENT)/gu,
};

export const paint = (text: string, lang: Lang): string =>
  esc(text).replace(RULES[lang], (m, jp) => `<span class="${jp ? 'c-jp' : 'c-uz'}">${m}</span>`);
