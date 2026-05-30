import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Base64 Encoder/Decoder - Online Base64 Tool | DevToolKit',
  description: 'Free online Base64 encoder and decoder. Encode or decode text and files to Base64 instantly in your browser. No signup required.',
  keywords: ['base64 encoder', 'base64 decoder', 'encode base64', 'decode base64', 'base64 online', 'base64 converter'],
  openGraph: {
    title: 'Base64 Encoder/Decoder - Free Online Tool',
    description: 'Encode or decode text to Base64 instantly in your browser.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/base64',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
