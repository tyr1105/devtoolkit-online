import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator - Placeholder Text | DevToolKit',
  description: 'Free online Lorem Ipsum generator. Generate placeholder text for designs and layouts instantly. No signup required.',
  keywords: ['lorem ipsum generator', 'placeholder text', 'dummy text', 'lipsum', 'fake text generator', 'text placeholder', 'design text'],
  openGraph: {
    title: 'Lorem Ipsum Generator - Free Online Tool',
    description: 'Generate placeholder text for designs and layouts instantly.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/lorem-ipsum',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
