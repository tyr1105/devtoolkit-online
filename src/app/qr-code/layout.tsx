import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QR Code Generator - Create QR Codes Online | DevToolKit',
  description: 'Free online QR code generator. Create custom QR codes for URLs, text, WiFi, and more instantly in your browser. No signup required.',
  keywords: ['qr code generator', 'create qr code', 'qr code maker', 'generate qr code online', 'free qr code', 'qr code creator'],
  openGraph: {
    title: 'QR Code Generator - Free Online Tool',
    description: 'Create custom QR codes for URLs, text, WiFi, and more instantly.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/qr-code',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
