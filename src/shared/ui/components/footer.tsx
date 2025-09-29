'use client';

import Image from 'next/image';

import { Link as NavLink } from '@/i18n/navigation';

import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#FFF4E1]">
      <section className="container flex flex-col gap-[80px] py-[40px] pb-[60px]">
        <Divider />
        <section className="flex justify-between max-md:flex-col max-md:gap-[67px]">
          <nav className="flex gap-20 max-md:grid max-md:grid-cols-2 max-md:gap-[60px]">
            <NavColumn
              title="What We Do"
              items={[
                { label: 'Web Hosting', href: '/web-hosting' },
                {
                  label: 'Web Development',
                  href: '/web-development',
                },
              ]}
            />
            <NavColumn
              title="About"
              items={[
                { label: 'Company Overview', href: '/company-overview' },
                {
                  label: 'Careers',
                  href: '/careers',
                },
                { label: 'Contact', href: '/contact' },
              ]}
            />
            <NavColumn
              title="Vision"
              items={[
                { label: 'Our Approach', href: '/our-approach' },
                { label: 'Clients', href: '/clients' },
                { label: 'News', href: '/news' },
              ]}
            />
          </nav>
          <div className="flex flex-col items-end max-md:flex-col-reverse max-md:items-center">
            <SocialNetworks />
            <Image
              className="rotate-90"
              src="/logo.webp"
              alt="logo"
              width={290}
              height={290}
              unoptimized
            />
          </div>
        </section>
        <section className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-10">
          <nav className="flex w-full items-center gap-8 max-md:justify-between max-md:gap-4">
            <div className="flex gap-8 max-md:flex-col">
              <NavLink href="/terms-and-conditions">
                <Text size="xs" color="sand">
                  Terms and Conditions
                </Text>
              </NavLink>
              <NavLink href="/terms-and-conditions">
                <Text size="xs" color="sand">
                  Privacy Policy
                </Text>
              </NavLink>
            </div>
            <div className="flex gap-8 max-md:flex-col">
              <NavLink href="/terms-and-conditions">
                <Text size="xs" color="sand">
                  Cookie Policy
                </Text>
              </NavLink>
              <NavLink href="/terms-and-conditions">
                <Text size="xs" color="sand">
                  Refund Policy
                </Text>
              </NavLink>
            </div>
          </nav>
          <Text size="xs" color="sand">
            © 2025 Company Name. All Legal Rights Reserved.
          </Text>
        </section>
      </section>
      <section className="relative">
        <Image
          className="absolute top-0 left-0 h-[100px] w-full object-cover"
          src="/footer-b.svg"
          alt="footer-bottom-line"
          width={1440}
          height={100}
          unoptimized
        />
        <Image
          className="h-[400px] w-full object-cover"
          src="/footer.jpg"
          alt="footer"
          width={1920}
          height={1080}
          unoptimized
        />
      </section>
    </footer>
  );
};

const NavColumn = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) => (
  <nav className="flex flex-col gap-2">
    <Text color="black" size="lg" weight={700}>
      {title}
    </Text>
    {items.map(item => (
      <NavLink key={item.href} href={item.href}>
        <Text color="sand" weight={700} className="hover:opacity-80">
          {item.label}
        </Text>
      </NavLink>
    ))}
  </nav>
);
