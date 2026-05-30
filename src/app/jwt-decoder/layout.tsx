import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JWT Decoder - Decode JWT Tokens Online | DevToolKit',
  description: 'Free online JWT decoder. Decode and inspect JSON Web Tokens instantly in your browser. No signup required.',
  keywords: ['jwt decoder', 'decode jwt', 'jwt inspector', 'jwt token', 'json web token', 'jwt decode online', 'jwt debugger'],
  openGraph: {
    title: 'JWT Decoder - Free Online Tool',
    description: 'Decode and inspect JSON Web Tokens instantly in your browser.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/jwt-decoder',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
