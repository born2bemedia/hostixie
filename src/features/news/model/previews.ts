import type { getTranslations } from 'next-intl/server';

export const getLatest = (t: Awaited<ReturnType<typeof getTranslations>>) => [
  {
    imgUrl: '/images/news/latest-1.jpg',
    date: t('latestNews.cards.0.date', { fallback: 'June 20, 2025' }),
    title: t('latestNews.cards.0.title', {
      fallback: 'Just Launched: Clean Portfolio Site for a Visual Artist',
    }),
    description: t('latestNews.cards.0.description', {
      fallback:
        'Sleek, fast, and mobile-friendly — this artist now has the perfect space to showcase her work online. We built a custom layout focused on image performance and simplicity.',
    }),
    summary: t('latestNews.cards.0.summary', {
      fallback: 'Booked 3 new clients in the first week.',
    }),
    btnLabel: t('latestNews.cards.0.btnLabel', { fallback: 'See Project' }),
    href: '/news/clean-portfolio-site-for-a-visual-artist',
    slug: 'clean-portfolio-site-for-a-visual-artist',
  },
  {
    imgUrl: '/images/news/latest-2.jpg',
    date: t('latestNews.cards.1.date', { fallback: 'May 10, 2025' }),
    title: t('latestNews.cards.1.title', {
      fallback: 'Hosting Just Got Faster (Again)',
    }),
    description: t('latestNews.cards.1.description', {
      fallback:
        'We upgraded our hosting infrastructure with better SSDs, smarter caching, and more scalable architecture.',
    }),
    summary: t('latestNews.cards.1.summary', {
      fallback: 'Load times improved by 36% site-wide.',
    }),
    btnLabel: t('latestNews.cards.1.btnLabel', {
      fallback: 'See Hosting Plans',
    }),
    href: '/news/hosting-just-got-faster-again',
    slug: 'hosting-just-got-faster-again',
  },
  {
    imgUrl: '/images/news/latest-3.jpg',
    date: t('latestNews.cards.2.date', { fallback: 'May 30, 2025' }),
    title: t('latestNews.cards.2.title', {
      fallback: 'E-commerce Makeover = 2x Sales in 90 Days',
    }),
    description: t('latestNews.cards.2.description', {
      fallback:
        'We redesigned the shopping experience for a handmade goods store. Cleaner layout. Faster checkout. Stronger mobile UX.',
    }),
    summary: t('latestNews.cards.2.summary', {
      fallback: 'Conversion rate jumped by 45%.',
    }),
    btnLabel: t('latestNews.cards.2.btnLabel', {
      fallback: 'View Case Study',
    }),
    href: '/news/e-commerce-makeover-2x-sales-in-90-days',
    slug: 'e-commerce-makeover-2x-sales-in-90-days',
  },
];

export const getTechNews = (t: Awaited<ReturnType<typeof getTranslations>>) => [
  {
    imgUrl: '/images/news/tech-1.jpg',
    date: t('techNews.cards.0.date', { fallback: 'April 5, 2025' }),
    title: t('techNews.cards.0.title', {
      fallback: 'We Launched Managed WordPress Hosting',
    }),
    description: t('techNews.cards.0.description', {
      fallback:
        'Easy, secure, and fast — our new WP plans are ideal for creators and small businesses who want results without the headaches.',
    }),
    summary: t('techNews.cards.0.summary', {
      fallback: 'Daily backups, malware scans, and speed tuning included.',
    }),
    btnLabel: t('techNews.cards.0.btnLabel', { fallback: 'See Project' }),
    href: '/news/we-launched-managed-wordpress-hosting',
    slug: 'we-launched-managed-wordpress-hosting',
  },
  {
    imgUrl: '/images/news/tech-2.jpg',
    date: t('techNews.cards.1.date', { fallback: 'March 12, 2025' }),
    title: t('techNews.cards.1.title', {
      fallback: 'Invoices, Upgraded',
    }),
    description: t('techNews.cards.1.description', {
      fallback:
        'Billing is now simple, smart, and secure. Clients can download invoices, check plan details, and manage renewals — all in one dashboard.',
    }),
    summary: t('techNews.cards.1.summary', {
      fallback: 'No more back-and-forth emails.',
    }),
    btnLabel: t('techNews.cards.1.btnLabel', { fallback: 'See Project' }),
    href: '/news/invoices-upgraded',
    slug: 'invoices-upgraded',
  },
  {
    imgUrl: '/images/news/tech-3.jpg',
    date: t('techNews.cards.2.date', { fallback: 'May 30, 2025' }),
    title: t('techNews.cards.2.title', {
      fallback: 'Partnerships & People',
    }),
    description: t('techNews.cards.2.description', {
      fallback:
        'We’ve teamed up with a local dev bootcamp to mentor junior developers on real client projects. They learn. We grow. Clients win.',
    }),
    summary: t('techNews.cards.2.summary', {
      fallback: 'Talent meets production, not just theory.',
    }),
    btnLabel: t('techNews.cards.2.btnLabel', { fallback: 'View Case Study' }),
    href: '/news/partnerships-people',
    slug: 'partnerships-people',
  },
];

export const getPartnershipNews = (
  t: Awaited<ReturnType<typeof getTranslations>>,
) => [
  {
    imgUrl: '/images/news/partner-1.jpg',
    date: t('partnershipNews.cards.0.date', { fallback: 'April 5, 2025' }),
    title: t('partnershipNews.cards.0.title', {
      fallback: 'Regional Dev Workshop Hosted',
    }),
    description: t('partnershipNews.cards.0.description', {
      fallback:
        'Hosted a hands-on web development bootcamp for emerging developers, guiding them through real-world project challenges.',
    }),
    btnLabel: t('partnershipNews.cards.0.btnLabel', { fallback: 'Read More' }),
    href: '/news/regional-dev-workshop-hosted',
    slug: 'regional-dev-workshop-hosted',
  },
  {
    imgUrl: '/images/news/partner-2.jpg',
    date: t('partnershipNews.cards.1.date', { fallback: 'March 12, 2025' }),
    title: t('partnershipNews.cards.1.title', {
      fallback: 'Open-Source Sprint Participation',
    }),
    description: t('partnershipNews.cards.1.description', {
      fallback:
        'Contributed performance and reliability enhancements to a widely-used open-source CMS, supporting the broader developer community.',
    }),
    btnLabel: t('partnershipNews.cards.1.btnLabel', { fallback: 'Learn More' }),
    href: '/news/open-source-sprint-participation',
    slug: 'open-source-sprint-participation',
  },
  {
    imgUrl: '/images/news/partner-3.jpg',
    date: t('partnershipNews.cards.2.date', { fallback: 'July 1, 2025' }),
    title: t('partnershipNews.cards.2.title', {
      fallback: 'Senior UX Expertise Added',
    }),
    description: t('partnershipNews.cards.2.description', {
      fallback:
        'Onboarded a seasoned UX professional to lead our design initiatives, elevating usability and aesthetics across all client projects.',
    }),
    btnLabel: t('partnershipNews.cards.2.btnLabel', {
      fallback: 'Meet the Team',
    }),
    href: '/news/senior-ux-expertise-added',
    slug: 'senior-ux-expertise-added',
  },
];
