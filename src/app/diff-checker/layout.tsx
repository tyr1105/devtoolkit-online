import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diff Checker - Compare Text Online | DevToolKit',
  description: 'Free online diff checker. Compare two texts side by side and highlight differences instantly. No signup required.',
  keywords: ['diff checker', 'text comparison', 'compare text online', 'text diff', 'find differences', 'diff tool', 'text compare'],
  openGraph: {
    title: 'Diff Checker - Free Online Tool',
    description: 'Compare two texts side by side and highlight differences instantly.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/diff-checker',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
