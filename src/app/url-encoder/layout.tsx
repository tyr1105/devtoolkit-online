import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL Encoder/Decoder - Online URL Tool | DevToolKit',
  description: 'Free online URL encoder and decoder. Encode or decode URLs and query strings instantly in your browser. No signup required.',
  keywords: ['url encoder', 'url decoder', 'encode url', 'decode url', 'percent encoding', 'url encode online', 'uri encoder'],
  openGraph: {
    title: 'URL Encoder/Decoder - Free Online Tool',
    description: 'Encode or decode URLs and query strings instantly in your browser.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/url-encoder',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
