'use client';

import { type JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { Link as NavLink } from '@/i18n/navigation';

import { CategoryIcon } from '@/shared/ui/icons/category';
import { Button } from '@/shared/ui/kit/button';

import { ArrowBottomIcon } from '../icons/arrow-bottom';
import { CodeCircleIcon } from '../icons/code-circle';
import { DataIcon } from '../icons/data';
import { HostingIcon } from '../icons/hosting';
import { PeopleIcon } from '../icons/people';
import { Text } from '../kit/text';
import { IconLayout } from './icon-layout';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <Button variant="faded">
          <CategoryIcon />
        </Button>
      </Trigger>
      <Portal>
        <Content className="fixed bottom-0 left-0 z-[995] h-screen w-screen animate-[menuOpen_0.3s_ease-out_forwards] overflow-y-auto bg-black p-4">
          <Title />
          <Description asChild>
            <section className="flex h-full flex-col gap-5">
              <BurgerHeader setOpen={setOpen} />
              <section className="flex flex-col gap-4">
                <BurgerContentNav />
              </section>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const BurgerHeader = ({ setOpen }: { setOpen: (value: boolean) => void }) => (
  <section className="flex items-center justify-between">
    <NavLink href="/">
      <Image src="/logo.webp" alt="logo" width={40} height={40} />
    </NavLink>
    <Button variant="faded" onClick={() => setOpen(false)}>
      <CategoryIcon />
    </Button>
  </section>
);

const BurgerContentNav = () => {
  const t = useTranslations('header');

  return (
    <section className="flex flex-col">
      <NavigationMenu
        title={t('whatWeDo', { fallback: 'What We Do' })}
        items={[
          {
            label: t('webHosting', { fallback: 'Web Hosting' }),
            href: '/web-hosting',
            Icon: HostingIcon,
          },
          {
            label: t('webDevelopment', { fallback: 'Web Development' }),
            href: '/web-development',
            Icon: CodeCircleIcon,
          },
        ]}
      />
      <MenuBtnLayout>
        <NavLink href="/our-approach">
          <Button variant="glass" className="cursor-pointer text-xl outline-0">
            {t('ourApproach', { fallback: 'Our Approach' })}
          </Button>
        </NavLink>
      </MenuBtnLayout>
      <NavigationMenu
        title={t('about', { fallback: 'About' })}
        items={[
          {
            label: t('companyOverview', { fallback: 'Company Overview' }),
            href: '/company-overview',
            Icon: DataIcon,
          },
          {
            label: t('careers', { fallback: 'Careers' }),
            href: '/careers',
            Icon: PeopleIcon,
          },
        ]}
      />
      <MenuBtnLayout>
        <NavLink href="/clients">
          <Button variant="glass" className="cursor-pointer text-xl outline-0">
            {t('clients', { fallback: 'Clients' })}
          </Button>
        </NavLink>
      </MenuBtnLayout>
      <MenuBtnLayout>
        <NavLink href="/news">
          <Button variant="glass" className="cursor-pointer text-xl outline-0">
            {t('news', { fallback: 'News' })}
          </Button>
        </NavLink>
      </MenuBtnLayout>
      <NavLink href="/store">
        <Button
          variant="primary"
          className="h-[51px] cursor-pointer justify-start text-xl outline-0"
          fullWidth
        >
          {t('store', { fallback: 'Store' })}
        </Button>
      </NavLink>
    </section>
  );
};

const NavigationMenu = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; Icon: () => JSX.Element }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuBtnLayout>
      <Button
        variant="glass"
        className="flex cursor-pointer items-center gap-1.5 text-xl outline-0"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {title}
        <ArrowBottomIcon />
      </Button>
      {isOpen && (
        <section className="flex flex-col gap-4 px-4">
          {items.map(({ href, label, Icon }) => (
            <NavLink key={href} href={href} className="flex items-center gap-2">
              <IconLayout>
                <Icon />
              </IconLayout>
              <Text weight={700}>{label}</Text>
            </NavLink>
          ))}
        </section>
      )}
    </MenuBtnLayout>
  );
};

const MenuBtnLayout = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col gap-4 px-2 py-3.5">{children}</section>
);
