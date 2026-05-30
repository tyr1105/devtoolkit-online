// All online tools configuration data
export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
  keywords: string[];
  category: 'developer' | 'text' | 'design' | 'crypto';
}

export const tools: Tool[] = [
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, minify and validate JSON data with syntax highlighting and error detection',
    icon: '{ }',
    path: '/json-formatter',
    keywords: ['json', 'format', 'beautify', 'minify', 'validate'],
    category: 'developer',
  },
  {
    id: 'base64',
    name: 'Base64 Codec',
    description: 'Encode and decode Base64 strings',
    icon: 'B64',
    path: '/base64',
    keywords: ['base64', 'encode', 'decode'],
    category: 'developer',
  },
  {
    id: 'qr-code',
    name: 'QR Code Generator',
    description: 'Generate QR codes online with custom colors and sizes',
    icon: '▣',
    path: '/qr-code',
    keywords: ['qr', 'qrcode', 'generate', 'barcode'],
    category: 'design',
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA-1, SHA-256, SHA-512 hash values',
    icon: '#',
    path: '/hash-generator',
    keywords: ['hash', 'md5', 'sha', 'sha256', 'encrypt'],
    category: 'crypto',
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Batch generate UUID v4 with one-click copy',
    icon: '*',
    path: '/uuid-generator',
    keywords: ['uuid', 'guid', 'id', 'unique'],
    category: 'developer',
  },
  {
    id: 'timestamp',
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamp and date/time',
    icon: 'T',
    path: '/timestamp',
    keywords: ['timestamp', 'unix', 'date', 'convert', 'epoch'],
    category: 'developer',
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    description: 'Encode and decode URLs with encodeURIComponent support',
    icon: '%',
    path: '/url-encoder',
    keywords: ['url', 'encode', 'decode', 'percent'],
    category: 'developer',
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick and convert colors between HEX, RGB, HSL formats',
    icon: 'C',
    path: '/color-picker',
    keywords: ['color', 'picker', 'hex', 'rgb', 'hsl'],
    category: 'design',
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode and inspect JWT tokens',
    icon: 'J',
    path: '/jwt-decoder',
    keywords: ['jwt', 'token', 'decode', 'json web token'],
    category: 'crypto',
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum',
    description: 'Generate Lorem Ipsum placeholder text',
    icon: 'L',
    path: '/lorem-ipsum',
    keywords: ['lorem', 'ipsum', 'placeholder', 'text'],
    category: 'text',
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test regular expressions with real-time match highlighting',
    icon: 'R',
    path: '/regex-tester',
    keywords: ['regex', 'regexp', 'regular expression', 'match'],
    category: 'developer',
  },
  {
    id: 'diff-checker',
    name: 'Diff Checker',
    description: 'Compare two texts side by side with highlighted differences',
    icon: 'D',
    path: '/diff-checker',
    keywords: ['diff', 'compare', 'text', 'difference'],
    category: 'text',
  },
];

export const categories = {
  developer: { label: 'Developer', color: 'blue' },
  text: { label: 'Text', color: 'green' },
  design: { label: 'Design', color: 'purple' },
  crypto: { label: 'Crypto', color: 'orange' },
};
