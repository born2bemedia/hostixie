import { Inter } from 'next/font/google';

import { cn } from '@/shared/lib/utils/cn';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'antialiased')}>{children}</body>
    </html>
  );
}
