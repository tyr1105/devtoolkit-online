import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Timestamp Converter - Unix Timestamp to Date | DevToolKit',
  description: 'Free online timestamp converter. Convert Unix timestamps to human-readable dates and vice versa instantly. No signup required.',
  keywords: ['timestamp converter', 'unix timestamp', 'epoch converter', 'timestamp to date', 'date to timestamp', 'unix time', 'epoch time'],
  openGraph: {
    title: 'Timestamp Converter - Free Online Tool',
    description: 'Convert Unix timestamps to human-readable dates and vice versa instantly.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/timestamp',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
