'use client';

import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { Link, usePathname, useRouter } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { CodeCircleIcon } from '../icons/code-circle';
import { DeIcon } from '../icons/countries/de';
import { GbIcon } from '../icons/countries/gb';
import { ItIcon } from '../icons/countries/it';
import { DataIcon } from '../icons/data';
import { HostingIcon } from '../icons/hosting';
import { PeopleIcon } from '../icons/people';
import { Dropdown, DropdownItem } from '../kit/dropdown';
import { IconLayout } from './icon-layout';

const BurgerMenu = dynamic(
  () => import('./burger-menu').then(mod => mod.BurgerMenu),
  {
    ssr: false,
  },
);

export const Header = () => {
  const t = useTranslations('header');

  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback(
    (newLocale: string) => {
      router.replace(pathname, { locale: newLocale });
    },
    [router, pathname],
  );

  return (
    <section className="flex flex-col">
      <section className="bg-[#FFF4E1] backdrop-blur-[15px]">
        <div className="container">
          <section className="flex justify-end">
            <Dropdown
              label={
                <Text color="black" uppercase>
                  {locale}
                </Text>
              }
              iconColor="black"
              contentClassName="-translate-x-[24%]"
            >
              {({ setOpen }) => (
                <>
                  <DropdownItem
                    onClick={() => {
                      switchLanguage('en');
                      setOpen(false);
                    }}
                  >
                    <IconLayout>
                      <GbIcon />
                    </IconLayout>
                    <Text weight={700}>English</Text>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      switchLanguage('it');
                      setOpen(false);
                    }}
                  >
                    <IconLayout>
                      <ItIcon />
                    </IconLayout>
                    <Text weight={700}>Italian</Text>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      switchLanguage('de');
                      setOpen(false);
                    }}
                  >
                    <IconLayout>
                      <DeIcon />
                    </IconLayout>
                    <Text weight={700}>German</Text>
                  </DropdownItem>
                </>
              )}
            </Dropdown>
          </section>
        </div>
      </section>
      <header className="container flex items-center justify-between py-4">
        <Link href="/">
          <Image src="/logo.webp" alt="logo" width={40} height={40} />
        </Link>
        <section className="flex items-center gap-6 max-md:hidden">
          <Dropdown label={t('whatWeDo', { fallback: 'What We Do' })}>
            <DropdownItem>
              <Link href="/web-hosting" className="flex items-center gap-2">
                <IconLayout>
                  <HostingIcon />
                </IconLayout>
                <Text weight={700}>
                  {t('webHosting', { fallback: 'Web Hosting' })}
                </Text>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/web-development" className="flex items-center gap-2">
                <IconLayout>
                  <CodeCircleIcon />
                </IconLayout>
                <Text weight={700}>
                  {t('webDevelopment', { fallback: 'Web Development' })}
                </Text>
              </Link>
            </DropdownItem>
          </Dropdown>
          <Link href="/our-approach">
            <Button variant="glass">
              {t('ourApproach', { fallback: 'Our Approach' })}
            </Button>
          </Link>
          <Dropdown label={t('about', { fallback: 'About' })}>
            <>
              <DropdownItem>
                <Link
                  href="/company-overview"
                  className="flex items-center gap-2"
                >
                  <IconLayout>
                    <DataIcon />
                  </IconLayout>
                  <Text weight={700}>
                    {t('companyOverview', { fallback: 'Company Overview' })}
                  </Text>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/careers" className="flex items-center gap-2">
                  <IconLayout>
                    <PeopleIcon />
                  </IconLayout>
                  <Text weight={700}>
                    {t('careers', { fallback: 'Careers' })}
                  </Text>
                </Link>
              </DropdownItem>
            </>
          </Dropdown>
          <Link href="/clients">
            <Button variant="glass">
              {t('clients', { fallback: 'Clients' })}
            </Button>
          </Link>
          <Link href="/news">
            <Button variant="glass">{t('news', { fallback: 'News' })}</Button>
          </Link>
          <Link href="/contact">
            <Button variant="primary">
              {t('contact', { fallback: 'Contact' })}
            </Button>
          </Link>
        </section>
        <section className="hidden max-md:flex">
          <BurgerMenu />
        </section>
      </header>
    </section>
  );
};
