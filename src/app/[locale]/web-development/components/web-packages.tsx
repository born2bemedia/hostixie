'use client';

import { useTranslations } from 'next-intl';

import type { WebDevPackage } from '@/features/web-development/model/types';
import { WebDevelopmentCard } from '@/features/web-development/ui/web-development-card';

import { Heading } from '@/shared/ui/components/heading';

const getPackages = (
  t: ReturnType<typeof useTranslations>,
): WebDevPackage[] => [
  {
    title: t('items.0.title', {
      fallback: 'Spark Starter Plan',
    }),
    description: t('items.0.description', {
      fallback:
        'Ideal for small projects or websites that require a stable foundation. This package covers the essentials to get your website online with a professional look and feel.',
    }),
    price: '€3,500',
    includes: [
      t('items.0.includes.0', {
        fallback: 'Custom Website Design',
      }),
      t('items.0.includes.1', {
        fallback: 'Mobile Responsiveness',
      }),
      t('items.0.includes.2', {
        fallback: 'SEO Optimization',
      }),
      t('items.0.includes.3', {
        fallback: 'Basic Content Management System (CMS)',
      }),
      t('items.0.includes.4', {
        fallback: '1 Year of Hosting',
      }),
      t('items.0.includes.5', {
        fallback: 'Basic Analytics Setup',
      }),
      t('items.0.includes.6', {
        fallback: 'Basic Website Security',
      }),
      t('items.0.includes.7', {
        fallback: 'Content Upload (Up to 10 Pages)',
      }),
      t('items.0.includes.8', {
        fallback: 'Social Media Integration',
      }),
      t('items.0.includes.9', {
        fallback: 'Contact Form Integration',
      }),
    ],
    imgUrl: '/images/web-dev/pack-1.png',
  },
  {
    title: t('items.1.title', {
      fallback: 'Growth Accelerator Plan',
    }),
    description: t('items.1.description', {
      fallback:
        'This plan is perfect for companies looking to expand their digital presence. It includes advanced features and customizations to enhance user engagement and boost performance.',
    }),
    price: '€7,500',
    includes: [
      t('items.1.includes.0', {
        fallback: 'Advanced Custom Website Design',
      }),
      t('items.1.includes.1', {
        fallback: 'E-commerce Functionality',
      }),
      t('items.1.includes.2', {
        fallback: 'Enhanced SEO Optimization',
      }),
      t('items.1.includes.3', {
        fallback: 'CMS with Advanced Features',
      }),
      t('items.1.includes.4', {
        fallback: 'User Experience (UX) Design',
      }),
      t('items.1.includes.5', {
        fallback: '2 Years of Hosting',
      }),
      t('items.1.includes.6', {
        fallback: 'Analytics & Tracking Setup',
      }),
      t('items.1.includes.7', {
        fallback: 'SSL Certificate & Basic Security',
      }),
      t('items.1.includes.8', {
        fallback: 'Content Upload (Up to 25 Pages)',
      }),
      t('items.1.includes.9', {
        fallback: 'Social Media Sharing & Analytics Integration',
      }),
    ],
    imgUrl: '/images/web-dev/pack-2.png',
  },
  {
    title: t('items.2.title', {
      fallback: 'Powerhouse Pro Plan',
    }),
    description: t('items.2.description', {
      fallback:
        'For growing businesses with higher demands, this plan offers comprehensive features, integrations, and an optimized web application to deliver a world-class digital experience.',
    }),
    price: '€10,500',
    includes: [
      t('items.2.includes.0', {
        fallback: 'Custom Web Application Development',
      }),
      t('items.2.includes.1', {
        fallback: 'Full E-commerce Store with Payment Integration',
      }),
      t('items.2.includes.2', {
        fallback: 'Complete SEO & Mobile Optimization',
      }),
      t('items.2.includes.3', {
        fallback: 'Advanced UX/UI Design',
      }),
      t('items.2.includes.4', {
        fallback: 'API Integrations',
      }),
      t('items.2.includes.5', {
        fallback: '3 Years of Hosting',
      }),
      t('items.2.includes.6', {
        fallback: 'Full Security Suite & Malware Protection',
      }),
      t('items.2.includes.7', {
        fallback: 'Website Analytics & Reporting Dashboard',
      }),
      t('items.2.includes.8', {
        fallback: 'Content Upload (Up to 50 Pages)',
      }),
      t('items.2.includes.9', {
        fallback: 'Email Marketing Integration',
      }),
    ],
    imgUrl: '/images/web-dev/pack-3.png',
  },
  {
    title: t('items.3.title', {
      fallback: 'Digital Empire Plan',
    }),
    price: t('items.3.price', {
      fallback: 'Individual',
    }),
    showFrom: false,
    description: t('items.3.description', {
      fallback:
        'Our top-tier, custom-tailored solution is for large enterprises or complex websites. This package offers everything you need, from cutting-edge web applications to full-service digital marketing integrations. Ideal for enterprises seeking a fully customized solution and ongoing partnership.',
    }),
    includes: [
      t('items.3.includes.0', {
        fallback: 'Completely Custom Web Application Development',
      }),
      t('items.3.includes.1', {
        fallback: 'Full-Scale E-commerce with Custom Features',
      }),
      t('items.3.includes.2', {
        fallback: 'Advanced User Experience & Interface Design',
      }),
      t('items.3.includes.3', {
        fallback: 'Integration with Third-Party APIs and Tools',
      }),
      t('items.3.includes.4', {
        fallback: 'Dedicated Server Hosting & Load Balancing',
      }),
      t('items.3.includes.5', {
        fallback: '5+ Years of Hosting & Ongoing Maintenance',
      }),
      t('items.3.includes.6', {
        fallback: 'Full-Spectrum Digital Marketing Strategy & Execution',
      }),
      t('items.3.includes.7', {
        fallback: '24/7 Dedicated Support & Security Monitoring',
      }),
      t('items.3.includes.8', {
        fallback: 'Detailed Analytics and Business Insights Dashboard',
      }),
      t('items.3.includes.9', {
        fallback: 'Unlimited Content Uploads & Social Media Features',
      }),
    ],
    imgUrl: '/images/web-dev/pack-4.png',
  },
];

export const WebPackages = () => {
  const t = useTranslations('webDevelopment.webPackages');

  return (
    <section className="bg-[#FFF4E1] py-10">
      <div className="container flex flex-col gap-10">
        <Heading
          color="black"
          title={t('title', {
            fallback: 'Our Web Development Packages',
          })}
          text={t('text', {
            fallback:
              'Discover our comprehensive range of web development packages, each tailored to meet the distinct needs of your business. From simple, cost-effective plans to advanced, feature-rich packages, we have everything you need to create a stunning, high-performance website. ',
          })}
        />
        <section className="flex flex-col gap-5">
          <div className="flex items-start gap-5">
            {getPackages(t)
              .slice(0, 2)
              .map(p => (
                <WebDevelopmentCard key={p.title} {...p} />
              ))}
          </div>
          <div className="flex items-start gap-5">
            {getPackages(t)
              .slice(2, 4)
              .map(p => (
                <WebDevelopmentCard key={p.title} {...p} />
              ))}
          </div>
        </section>
      </div>
    </section>
  );
};
