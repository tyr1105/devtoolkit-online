import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "DevToolKit - Free Online Developer Tools",
  description: "Free online developer tools: JSON formatter, Base64 encoder, QR code generator, hash generator, UUID generator, timestamp converter, URL encoder, color picker, JWT decoder, regex tester, diff checker and more.",
  keywords: tools.flatMap(t => t.keywords).join(', '),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <header className="border-b border-[var(--border)] bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[var(--accent)]">DevToolKit</Link>
            <nav className="flex gap-4 text-sm text-[var(--text-secondary)]">
              <Link href="/" className="hover:text-white">All Tools</Link>
              <Link href="/json-formatter" className="hover:text-white">JSON</Link>
              <Link href="/base64" className="hover:text-white">Base64</Link>
              <Link href="/qr-code" className="hover:text-white">QR Code</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-4 text-center text-sm text-[var(--text-secondary)]">
          <p>DevToolKit - Free Online Developer Tools. No data is sent to any server.</p>
        </footer>
      </body>
    </html>
  );
}
