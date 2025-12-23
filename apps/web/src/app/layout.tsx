import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ViralVibe - Viral Video Repurposing SaaS',
  description: 'Transform long-form content into viral short-form clips automatically',
  keywords: ['video editing', 'AI', 'viral content', 'short-form video', 'content repurposing'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
