import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSON Formatter - Format, Minify & Validate JSON Online | DevToolKit',
  description: 'Free online JSON formatter. Format, beautify, minify and validate JSON data instantly in your browser. No signup required.',
  keywords: ['json formatter', 'json beautifier', 'json validator', 'json minifier', 'format json online', 'validate json'],
  openGraph: {
    title: 'JSON Formatter - Free Online JSON Tool',
    description: 'Format, beautify, minify and validate JSON data instantly in your browser.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/json-formatter',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
