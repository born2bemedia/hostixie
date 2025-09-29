'use client';

import Image from 'next/image';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const Header = () => {
  return (
    <header className="container flex items-center justify-between py-4">
      <Link href="/">
        <Image src="/logo.webp" alt="logo" width={40} height={40} />
      </Link>
      <section className="flex items-center gap-6 max-md:hidden">
        <Text weight={700}>What We Do</Text>
        <Text weight={700}>Our Approach</Text>
        <Text weight={700}>About</Text>
        <Text weight={700}>Clients</Text>
        <Text weight={700}>News</Text>
        <Link href="/store">
          <Button>Store</Button>
        </Link>
      </section>
      <section className="hidden max-md:flex">
        <Text weight={700}>menu</Text>
      </section>
    </header>
  );
};
