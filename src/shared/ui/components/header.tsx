'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { Dropdown, DropdownItem } from '../kit/dropdown';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="container flex items-center justify-between py-4">
      <Link href="/">
        <Image src="/logo.webp" alt="logo" width={40} height={40} />
      </Link>
      <section className="flex items-center gap-6 max-md:hidden">
        <Dropdown label={t('whatWeDo', { fallback: 'What We Do' })}>
          {({ setOpen }) => (
            <>
              <DropdownItem onClick={() => setOpen(false)}>
                <Link href="/web-hosting">
                  <Text weight={700}>Web Hosting</Text>
                </Link>
              </DropdownItem>
              <DropdownItem onClick={() => setOpen(false)}>
                <Link href="/web-development">
                  <Text weight={700}>Web Development</Text>
                </Link>
              </DropdownItem>
            </>
          )}
        </Dropdown>
        <Link href="/our-approach">
          <Button variant="glass">
            {t('ourApproach', { fallback: 'Our Approach' })}
          </Button>
        </Link>
        <Dropdown label={t('about', { fallback: 'About' })}>
          {({ setOpen }) => (
            <>
              <DropdownItem onClick={() => setOpen(false)}>
                <Link href="/company-overview">
                  <Text weight={700}>Company Overview</Text>
                </Link>
              </DropdownItem>
              <DropdownItem onClick={() => setOpen(false)}>
                <Link href="/careers">
                  <Text weight={700}>Careers</Text>
                </Link>
              </DropdownItem>
            </>
          )}
        </Dropdown>
        <Link href="/clients">
          <Button variant="glass">
            {t('clients', { fallback: 'Clients' })}
          </Button>
        </Link>
        <Link href="/news">
          <Button variant="glass">{t('news', { fallback: 'News' })}</Button>
        </Link>
        <Link href="/store">
          <Button variant="glass">{t('store', { fallback: 'Store' })}</Button>
        </Link>
      </section>
      <section className="hidden max-md:flex">
        <Text weight={700}>{t('menu', { fallback: 'menu' })}</Text>
      </section>
    </header>
  );
};
