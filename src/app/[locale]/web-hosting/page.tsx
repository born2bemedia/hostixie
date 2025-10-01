import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import type { WebHostingCardDef } from '@/features/web-hosting/model/types';
import { WebHostingList } from '@/features/web-hosting/ui/web-hosting-list';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

import { Hero } from './components';

const getSharedHosting = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): WebHostingCardDef[] => [
  {
    name: t('shared.items.0.name', { fallback: 'Basic Plan' }),
    discount: 75,
    price: '2.95',
    oldPrice: '11.99',
    description: t('shared.items.0.description', {
      fallback:
        'Perfect for small business websites and blogs that require reliable hosting with essential features.',
    }),
    includes: [
      t('shared.items.0.includes.0', { fallback: '1 Website' }),
      t('shared.items.0.includes.1', { fallback: '10 GB SSD Storage' }),
      t('shared.items.0.includes.2', { fallback: 'Free SSL' }),
      t('shared.items.0.includes.3', { fallback: 'Free CDN' }),
      t('shared.items.0.includes.4', {
        fallback: 'Professional Email - Free Trial',
      }),
      t('shared.items.0.includes.5', {
        fallback: 'Daily Website Backup - Free 1st Year',
      }),
    ],
  },
  {
    name: t('shared.items.1.name', { fallback: 'Advanced Plan' }),
    discount: 75,
    price: '5.45',
    oldPrice: '21.99',
    description: t('shared.items.1.description', {
      fallback:
        'Ideal for small projects or growing websites that need more flexibility and resources.',
    }),
    includes: [
      t('shared.items.1.includes.0', { fallback: '3 Websites' }),
      t('shared.items.1.includes.1', { fallback: '40 GB SSD Storage' }),
      t('shared.items.1.includes.2', { fallback: 'Free SSL' }),
      t('shared.items.1.includes.3', { fallback: 'Free CDN' }),
      t('shared.items.1.includes.4', { fallback: 'Free Domain 1st Year' }),
      t('shared.items.1.includes.5', {
        fallback: 'Professional Email - Free Trial',
      }),
      t('shared.items.1.includes.6', {
        fallback: 'Daily Website Backup - Free 1st Year',
      }),
    ],
  },
  {
    name: t('shared.items.2.name', { fallback: 'E-Commerce Plan' }),
    discount: 63,
    price: '9.95',
    oldPrice: '26.99',
    description: t('shared.items.2.description', {
      fallback:
        'Best suited for online stores, featuring enhanced security features and in-depth store analytics.',
    }),
    includes: [
      t('shared.items.2.includes.0', { fallback: '3 Websites' }),
      t('shared.items.2.includes.1', { fallback: '40 GB SSD Storage' }),
      t('shared.items.2.includes.2', { fallback: 'Free SSL' }),
      t('shared.items.2.includes.3', { fallback: 'Free CDN' }),
      t('shared.items.2.includes.4', { fallback: 'Free Domain 1st Year' }),
      t('shared.items.2.includes.5', {
        fallback: 'Professional Email - Free Trial',
      }),
      t('shared.items.2.includes.6', {
        fallback: 'Daily Website Backup - Free 1st Year',
      }),
      t('shared.items.2.includes.7', { fallback: 'Store Analytics' }),
    ],
  },
];

const getVpsHosting = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): WebHostingCardDef[] => [
  {
    name: t('vps.items.0.name', { fallback: 'Foundation Plan' }),
    discount: 62,
    price: '29.99',
    oldPrice: '79.99',
    description: t('vps.items.0.description', {
      fallback:
        'A reliable solution for small websites or growing ventures that need more control, power, and scalability.',
    }),
    includes: [
      t('vps.items.0.includes.0', { fallback: '2GB RAM' }),
      t('vps.items.0.includes.1', { fallback: '2 Core CPU' }),
      t('vps.items.0.includes.2', { fallback: '120 GB SSD' }),
      t('vps.items.0.includes.3', { fallback: 'Unmetered bandwidth' }),
      t('vps.items.0.includes.4', { fallback: 'cPanel License Fee Included' }),
    ],
  },
  {
    name: t('vps.items.1.name', { fallback: 'Elevate Plan' }),
    discount: 65,
    price: '39.99',
    oldPrice: '114.99',
    description: t('vps.items.1.description', {
      fallback:
        'Designed for high-traffic websites that require additional resources and improved performance.',
    }),
    includes: [
      t('vps.items.1.includes.0', { fallback: '4GB RAM' }),
      t('vps.items.1.includes.1', { fallback: '2 Core CPU' }),
      t('vps.items.1.includes.2', { fallback: '165 GB SSD' }),
      t('vps.items.1.includes.3', { fallback: 'Unmetered bandwidth' }),
      t('vps.items.1.includes.4', { fallback: 'cPanel License Fee Included' }),
    ],
  },
  {
    name: t('vps.items.2.name', { fallback: 'Supreme Plan' }),
    discount: 51,
    price: '69.99',
    oldPrice: '142.99',
    description: t('vps.items.2.description', {
      fallback:
        'Tailored for large websites or resource-intensive applications that demand top-tier speed.',
    }),
    includes: [
      t('vps.items.2.includes.0', { fallback: '8GB RAM' }),
      t('vps.items.2.includes.1', { fallback: '4 Core CPU' }),
      t('vps.items.2.includes.2', { fallback: '240 GB SSD' }),
      t('vps.items.2.includes.3', { fallback: 'Unmetered bandwidth' }),
      t('vps.items.2.includes.4', { fallback: 'cPanel License Fee Included' }),
    ],
  },
];

const getDedicatedHosting = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): WebHostingCardDef[] => [
  {
    name: t('dedicatedHosting.items.0.name', { fallback: 'Starter Plan' }),
    discount: 50,
    price: '89.98',
    oldPrice: '179.99',
    description: t('dedicatedHosting.items.0.description', {
      fallback:
        'A cost-effective hosting solution for small to medium businesses needing exclusive server resources.',
    }),
    includes: [
      t('dedicatedHosting.items.0.includes.0', {
        fallback: '4 Core / 8 Thread',
      }),
      t('dedicatedHosting.items.0.includes.1', { fallback: '8 GB RAM' }),
      t('dedicatedHosting.items.0.includes.2', {
        fallback: '1 TB HDD Storage',
      }),
      t('dedicatedHosting.items.0.includes.3', {
        fallback: 'Unmetered bandwidth',
      }),
      t('dedicatedHosting.items.0.includes.4', { fallback: 'Linux OS' }),
      t('dedicatedHosting.items.0.includes.5', {
        fallback: 'cPanel with Root Access',
      }),
    ],
  },
  {
    name: t('dedicatedHosting.items.1.name', { fallback: 'Progressive Plan' }),
    discount: 53,
    price: '119.77',
    oldPrice: '225.99',
    description: t('dedicatedHosting.items.1.description', {
      fallback:
        'For companies that require more performance and resources with elevated hosting experience.',
    }),
    includes: [
      t('dedicatedHosting.items.1.includes.0', { fallback: '3 Websites' }),
      t('dedicatedHosting.items.1.includes.1', {
        fallback: '8 Core / 16 Thread',
      }),
      t('dedicatedHosting.items.1.includes.2', { fallback: '16 GB RAM' }),
      t('dedicatedHosting.items.1.includes.3', {
        fallback: '2 TB HDD Storage',
      }),
      t('dedicatedHosting.items.1.includes.4', {
        fallback: 'Unmetered bandwidth',
      }),
      t('dedicatedHosting.items.1.includes.5', { fallback: 'Linux OS' }),
      t('dedicatedHosting.items.1.includes.6', {
        fallback: 'cPanel with Root Access',
      }),
    ],
  },
  {
    name: t('dedicatedHosting.items.2.name', { fallback: 'Elite Plan' }),
    discount: 51,
    price: '139.99',
    oldPrice: '259.99',
    description: t('dedicatedHosting.items.2.description', {
      fallback:
        'The ultimate plan for businesses demanding the best in performance, security, and uptime.',
    }),
    includes: [
      t('dedicatedHosting.items.2.includes.0', {
        fallback: '8 Core / 16 Thread',
      }),
      t('dedicatedHosting.items.2.includes.1', { fallback: '30 GB RAM' }),
      t('dedicatedHosting.items.2.includes.2', {
        fallback: '2 TB HDD Storage',
      }),
      t('dedicatedHosting.items.2.includes.3', {
        fallback: 'Unmetered bandwidth',
      }),
      t('dedicatedHosting.items.2.includes.4', { fallback: 'Linux OS' }),
      t('dedicatedHosting.items.2.includes.5', {
        fallback: 'cPanel with Root Access',
      }),
    ],
  },
];

const getCloudHosting = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): WebHostingCardDef[] => [
  {
    name: t('cloud.items.0.name', { fallback: 'Cloud Essentials Plan' }),
    discount: 60,
    price: '15.99',
    oldPrice: '39.99',
    description: t('cloud.items.0.description', {
      fallback:
        'Ideal for medium-sized businesses seeking flexible cloud hosting that delivers reliable performance.',
    }),
    includes: [
      t('cloud.items.0.includes.0', { fallback: '50 GB SSD Storage' }),
      t('cloud.items.0.includes.1', { fallback: '2 GB RAM' }),
      t('cloud.items.0.includes.2', { fallback: 'Unmetered bandwidth' }),
      t('cloud.items.0.includes.3', { fallback: 'Free SSL' }),
      t('cloud.items.0.includes.4', { fallback: 'Free CDN' }),
    ],
  },
  {
    name: t('cloud.items.1.name', { fallback: 'Cloud Pro Plan' }),
    discount: 63,
    price: '29.99',
    oldPrice: '79.99',
    description: t('cloud.items.1.description', {
      fallback:
        'For growing projects or high-traffic sites, providing more resources and enhanced flexibility is crucial.',
    }),
    includes: [
      t('cloud.items.1.includes.0', { fallback: '100 GB SSD Storage' }),
      t('cloud.items.1.includes.1', { fallback: '4 GB RAM' }),
      t('cloud.items.1.includes.2', { fallback: 'Unmetered bandwidth' }),
      t('cloud.items.1.includes.3', { fallback: 'Free SSL' }),
      t('cloud.items.1.includes.4', { fallback: 'Free CDN' }),
      t('cloud.items.1.includes.5', { fallback: 'Daily Backups' }),
    ],
  },
  {
    name: t('cloud.items.2.name', { fallback: 'Cloud Ultimate Plan' }),
    discount: 62,
    price: '49.99',
    oldPrice: '129.99',
    description: t('cloud.items.2.description', {
      fallback:
        'The best choice for high-performance sites that require the highest levels of scalability and resources.',
    }),
    includes: [
      t('cloud.items.2.includes.0', { fallback: '150 GB SSD Storage' }),
      t('cloud.items.2.includes.1', { fallback: '8 GB RAM' }),
      t('cloud.items.2.includes.2', { fallback: 'Unmetered bandwidth' }),
      t('cloud.items.2.includes.3', { fallback: 'Free SSL' }),
      t('cloud.items.2.includes.4', { fallback: 'Free CDN' }),
      t('cloud.items.2.includes.5', { fallback: 'Daily Backups' }),
      t('cloud.items.2.includes.6', { fallback: 'Enhanced Security' }),
    ],
  },
];

const getManagedWordpressHosting = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): WebHostingCardDef[] => [
  {
    name: t('wordpress.items.0.name', { fallback: 'Basic WP Plan' }),
    discount: 60,
    price: '5.95',
    oldPrice: '14.99',
    description: t('wordpress.items.0.description', {
      fallback:
        'For small WordPress websites that need easy management, fast performance, and reliable uptime.',
    }),
    includes: [
      t('wordpress.items.0.includes.0', { fallback: '1 Website' }),
      t('wordpress.items.0.includes.1', { fallback: '10 GB SSD Storage' }),
      t('wordpress.items.0.includes.2', { fallback: 'Free SSL' }),
      t('wordpress.items.0.includes.3', { fallback: 'Free CDN' }),
      t('wordpress.items.0.includes.4', { fallback: 'Free Domain 1st Year' }),
    ],
  },
  {
    name: t('wordpress.items.1.name', { fallback: 'Advanced WP Plan' }),
    discount: 63,
    price: '9.95',
    oldPrice: '24.99',
    description: t('wordpress.items.1.description', {
      fallback:
        'For growing WordPress sites with higher traffic, offering enhanced resources and improved performance.',
    }),
    includes: [
      t('wordpress.items.1.includes.0', { fallback: '3 Websites' }),
      t('wordpress.items.1.includes.1', { fallback: '40 GB SSD Storage' }),
      t('wordpress.items.1.includes.2', { fallback: 'Free SSL' }),
      t('wordpress.items.1.includes.3', { fallback: 'Free CDN' }),
      t('wordpress.items.1.includes.4', { fallback: 'Free Domain 1st Year' }),
    ],
  },
  {
    name: t('wordpress.items.2.name', { fallback: 'Pro WP Plan' }),
    discount: 63,
    price: '14.95',
    oldPrice: '39.99',
    description: t('wordpress.items.2.description', {
      fallback:
        'For established WordPress sites requiring advanced performance, security, and resources.',
    }),
    includes: [
      t('wordpress.items.2.includes.0', { fallback: '5 Websites' }),
      t('wordpress.items.2.includes.1', { fallback: '80 GB SSD Storage' }),
      t('wordpress.items.2.includes.2', { fallback: 'Free SSL' }),
      t('wordpress.items.2.includes.3', { fallback: 'Free CDN' }),
      t('wordpress.items.2.includes.4', { fallback: 'Free Domain 1st Year' }),
      t('wordpress.items.2.includes.5', { fallback: 'Daily Backups' }),
    ],
  },
];

export default async function WebHosting() {
  const t = await getTranslations('webHosting');

  return (
    <main>
      <Hero />
      <WebHostingList
        title={t('shared.title', { fallback: 'Shared Hosting' })}
        description={t('shared.description', {
          fallback:
            'Great for small websites and businesses, offering a cost-effective and reliable way to establish an online presence quickly and efficiently.',
        })}
        items={getSharedHosting(t)}
      />
      <WebHostingList
        title={t('vps.title', { fallback: 'VPS Hosting' })}
        description={t('vps.description', {
          fallback:
            'A more robust and scalable option for websites that require dedicated resources. Enjoy the benefits of a dedicated server at a fraction of the cost.',
        })}
        items={getVpsHosting(t)}
      />
      <WebHostingList
        title={t('dedicatedHosting.title', { fallback: 'Dedicated Hosting' })}
        description={t('dedicatedHosting.description', {
          fallback:
            'Complete control over your hosting environment. Perfect for high-traffic websites, e-commerce platforms, or businesses that require top-tier performance.',
        })}
        items={getDedicatedHosting(t)}
      />
      <WebHostingList
        title={t('cloud.title', { fallback: 'Cloud Hosting' })}
        description={t('cloud.description', {
          fallback:
            'Scalable and flexible cloud-based hosting solutions for dynamic websites that need to adapt quickly to increasing traffic or complex demands.',
        })}
        items={getCloudHosting(t)}
      />
      <WebHostingList
        title={t('wordpress.title', { fallback: 'Managed WordPress Hosting' })}
        description={t('wordpress.description', {
          fallback:
            'Optimized hosting designed specifically for WordPress websites, with automatic updates, daily backups, and enhanced security.',
        })}
        items={getManagedWordpressHosting(t)}
      />
      <section className="relative mt-[175px] h-[1200px] max-md:h-[800px]">
        <Image
          className="max-md:object-cover"
          src="/images/home/networks.jpg"
          alt="server"
          fill
          unoptimized
        />
        <Image
          className="absolute right-0 bottom-0 h-[100px] w-full object-cover"
          src="/images/home/bottom-line-w.svg"
          alt="footer-bottom-line"
          width={1440}
          height={100}
          unoptimized
        />
      </section>
      <GetInTouch
        title={t('getInTouch.title', { fallback: 'Ready to Choose a Plan?' })}
        subtitle={t('getInTouch.subtitle', { fallback: 'Get Expert Guidance' })}
        text={t('getInTouch.text', {
          fallback:
            'If you’re unsure which plan best suits your project’s needs or would like more information about our hosting options, please get in touch with our specialists today.',
        })}
        button={t('getInTouch.button', {
          fallback: 'Contact Us for More Details',
        })}
        titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
        layoutClassName="py-20"
      />
    </main>
  );
}
