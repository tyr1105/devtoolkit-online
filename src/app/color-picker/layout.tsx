import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Picker - HEX, RGB, HSL Converter | DevToolKit',
  description: 'Free online color picker and converter. Convert between HEX, RGB, and HSL color formats instantly. No signup required.',
  keywords: ['color picker', 'hex to rgb', 'rgb to hex', 'hsl converter', 'color converter', 'color palette', 'css colors'],
  openGraph: {
    title: 'Color Picker - Free Online Tool',
    description: 'Convert between HEX, RGB, and HSL color formats instantly.',
    type: 'website',
    url: 'https://tyr1105.github.io/devtoolkit-online/color-picker',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
