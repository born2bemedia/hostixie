'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

export const PolicyRender = ({
  navigation,
  children,
  responsiveNavigation = false,
}: {
  navigation: {
    label: string;
    href: string;
  }[];
  children: React.ReactNode;
  responsiveNavigation?: boolean;
}) => {
  const [activeSection, setActiveSection] = useState<string>(
    navigation[0].href,
  );
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    Object.values(sectionRefs.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(sectionRefs.current).forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const childrenWithRefs = React.Children.map(children, child => {
    if (React.isValidElement<{ id: string }>(child)) {
      const id = child.props.id;

      return React.cloneElement(
        child as React.ReactElement<{
          id: string;
          ref?: React.Ref<HTMLDivElement>;
        }>,
        {
          ref: (el: HTMLDivElement | null) => {
            if (el) sectionRefs.current[id] = el;
          },
        },
      );
    }
    return child;
  });

  return (
    <main className="bg-[#fff4e1] py-[60px] max-md:px-4">
      <div className="container flex gap-10 rounded-xl border border-[#A4A189] p-6">
        <div className="flex-shrink-0 max-lg:hidden">
          <div
            className={cn(
              'sticky flex flex-col',
              responsiveNavigation ? '-top-10' : 'top-5',
            )}
          >
            {navigation.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded px-5 py-2',
                  activeSection === item.href && 'bg-black/10 py-5',
                )}
              >
                <Text
                  size="xl"
                  weight={activeSection === item.href ? 700 : 500}
                  color="black"
                  className="leading-[120%] tracking-[-0.48px]"
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </div>
        </div>
        <section className="flex flex-1 flex-col gap-5">
          {childrenWithRefs}
        </section>
      </div>
    </main>
  );
};
