import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hash Generator - MD5, SHA-256, SHA-512 Online | DevToolKit',
  description: 'Free online hash generator. Generate MD5, SHA-1, SHA-256, SHA-512 hashes instantly in your browser. No signup required.',
  keywords: ['hash generator', 'md5 hash', 'sha256 hash', 'sha512 hash', 'generate hash online', 'hash calculator', 'checksum generator'],
  openGraph: {
    title: 'Hash Generator - Free Online Tool',
    description: 'Generate MD5, SHA-256, SHA-512 hashes instantly in your browser.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/hash-generator',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
