import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Header } from '@/shared/ui/components/header';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return (
    <html lang={(await params).locale ?? 'en'}>
      <body className={cn(inter.variable, 'antialiased')}>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
