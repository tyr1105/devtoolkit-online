import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UUID Generator - Generate UUIDs Online | DevToolKit',
  description: 'Free online UUID generator. Generate version 4 UUIDs instantly in your browser. No signup required.',
  keywords: ['uuid generator', 'generate uuid', 'guid generator', 'unique identifier', 'uuid v4', 'random uuid', 'uuid online'],
  openGraph: {
    title: 'UUID Generator - Free Online Tool',
    description: 'Generate version 4 UUIDs instantly in your browser.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/uuid-generator',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
