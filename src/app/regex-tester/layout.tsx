import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regex Tester - Test Regular Expressions Online | DevToolKit',
  description: 'Free online regex tester. Test and debug regular expressions with real-time matching and highlighting. No signup required.',
  keywords: ['regex tester', 'regular expression tester', 'regex checker', 'regex online', 'test regex', 'regex debugger', 'pattern matcher'],
  openGraph: {
    title: 'Regex Tester - Free Online Tool',
    description: 'Test and debug regular expressions with real-time matching and highlighting.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/regex-tester',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
