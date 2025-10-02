'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/shared/lib/utils/cn';
import { Heading } from '@/shared/ui/components/heading';
import { ArrowLeft, ArrowRight } from '@/shared/ui/components/vertical-slider';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSlides = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('0.title', { fallback: 'Custom Website Development' }),
    text: t('0.text', {
      fallback:
        'We design and develop tailored websites to suit your specific business goals and digital vision.',
    }),
    imgUrl: '/images/web-dev/range-1.jpg',
    includes: [
      {
        title: t('0.includes.0.title', { fallback: 'Bespoke Web Design' }),
        value: t('0.includes.0.text', {
          fallback:
            'Create a unique design that aligns with your brand identity and user expectations.',
        }),
        number: '001',
      },
      {
        title: t('0.includes.1.title', { fallback: 'Responsive Layout' }),
        value: t('0.includes.1.text', {
          fallback:
            'Build flexible websites that adapt seamlessly to all screen sizes, ensuring an optimal experience across devices.',
        }),
        number: '002',
      },
      {
        title: t('0.includes.2.title', {
          fallback: 'User-Centric Development',
        }),
        value: t('0.includes.2.text', {
          fallback:
            'We design with the user in mind to ensure intuitive navigation and engagement.',
        }),
        number: '003',
      },
      {
        title: t('0.includes.3.title', { fallback: 'Scalable Solutions' }),
        value: t('0.includes.3.text', {
          fallback:
            'Websites built with scalability in mind to grow alongside your project.',
        }),
        number: '004',
      },
      {
        title: t('0.includes.4.title', {
          fallback: 'Performance Optimization',
        }),
        value: t('0.includes.4.text', {
          fallback:
            'Ensure fast load times and smooth functionality by optimizing site performance.',
        }),
        number: '005',
      },
      {
        title: t('0.includes.5.title', { fallback: 'SEO-Ready Development' }),
        value: t('0.includes.5.text', {
          fallback:
            'Develop websites with SEO best practices integrated, allowing for better visibility on search engines.',
        }),
        number: '006',
      },
      {
        title: t('0.includes.6.title', {
          fallback: 'Content Management Integration',
        }),
        value: t('0.includes.6.text', {
          fallback:
            'Implement a user-friendly CMS like WordPress, Joomla, and more for easy content updates.',
        }),
        number: '007',
      },
      {
        title: t('0.includes.7.title', { fallback: 'API Integration' }),
        value: t('0.includes.7.text', {
          fallback:
            'Seamlessly integrate third-party services such as payment gateways or CRM systems.',
        }),
        number: '008',
      },
      {
        title: t('0.includes.8.title', { fallback: 'E-Commerce Development' }),
        value: t('0.includes.8.text', {
          fallback:
            'Build secure and scalable online stores that provide smooth shopping experiences.',
        }),
        number: '009',
      },
      {
        title: t('0.includes.9.title', { fallback: 'Security Integration' }),
        value: t('0.includes.9.text', {
          fallback:
            'Add top-tier security features, such as SSL certificates and data encryption, to ensure your site is secure.',
        }),
        number: '010',
      },
    ],
  },
  {
    title: t('1.title', { fallback: 'E-commerce Development' }),
    text: t('1.text', {
      fallback:
        'Empower your online store with a seamless, feature-rich, and secure e-commerce platform.',
    }),
    imgUrl: '/images/web-dev/range-2.jpg',
    includes: [
      {
        title: t('1.includes.0.title', {
          fallback: 'Custom E-Commerce Solutions',
        }),
        value: t('1.includes.0.text', {
          fallback:
            'Tailored solutions for your online store that suit your specific industry and needs.',
        }),
        number: '001',
      },
      {
        title: t('1.includes.1.title', {
          fallback: 'User-Friendly Shopping Experience',
        }),
        value: t('1.includes.1.text', {
          fallback:
            'Crafting a seamless, intuitive shopping process from browsing to checkout.',
        }),
        number: '002',
      },
      {
        title: t('1.includes.2.title', {
          fallback: 'Secure Payment Integration',
        }),
        value: t('1.includes.2.text', {
          fallback:
            'Implement secure, reliable payment gateways that protect sensitive customer data.',
        }),
        number: '003',
      },
      {
        title: t('1.includes.3.title', {
          fallback: 'Mobile-Optimized E-Commerce',
        }),
        value: t('1.includes.3.text', {
          fallback:
            'Develop e-commerce platforms with mobile-first designs to enhance usability across all devices and platforms, ensuring seamless user experiences.',
        }),
        number: '004',
      },
      {
        title: t('1.includes.4.title', { fallback: 'Inventory Management' }),
        value: t('1.includes.4.text', {
          fallback:
            'Integrate sophisticated inventory management systems to streamline stock management and order processing.',
        }),
        number: '005',
      },
      {
        title: t('1.includes.5.title', {
          fallback: 'Product Variations & Options',
        }),
        value: t('1.includes.5.text', {
          fallback:
            'Customize product pages with options such as size, color, and quantity for improved user selection.',
        }),
        number: '006',
      },
      {
        title: t('1.includes.6.title', {
          fallback: 'Shipping & Tax Calculators',
        }),
        value: t('1.includes.6.text', {
          fallback:
            'Implement automated tools for calculating shipping and taxes during the checkout process.',
        }),
        number: '007',
      },
      {
        title: t('1.includes.7.title', {
          fallback: 'Customer Account Features',
        }),
        value: t('1.includes.7.text', {
          fallback:
            'Allow users to create accounts for easier ordering, tracking, and returning.',
        }),
        number: '008',
      },
      {
        title: t('1.includes.8.title', {
          fallback: 'Order Tracking & Management',
        }),
        value: t('1.includes.8.text', {
          fallback:
            'Develop systems to manage and track customer orders efficiently.',
        }),
        number: '009',
      },
      {
        title: t('1.includes.9.title', {
          fallback: 'Promotions & Discount Codes',
        }),
        value: t('1.includes.9.text', {
          fallback:
            'Enable special offers and discount features to boost sales and customer retention.',
        }),
        number: '010',
      },
    ],
  },
  {
    title: t('2.title', { fallback: 'Responsive Web Design' }),
    text: t('2.text', {
      fallback:
        'Creating websites that look great and function seamlessly on any device.',
    }),
    imgUrl: '/images/web-dev/range-3.jpg',
    includes: [
      {
        title: t('2.includes.0.title', { fallback: 'Mobile-First Design' }),
        value: t('2.includes.0.text', {
          fallback:
            'Design with mobile users in mind first, ensuring seamless functionality on smaller screens.',
        }),
        number: '001',
      },
      {
        title: t('2.includes.1.title', {
          fallback: 'Cross-Device Compatibility',
        }),
        value: t('2.includes.1.text', {
          fallback:
            'Ensure your site works perfectly across various devices and screen sizes.',
        }),
        number: '002',
      },
      {
        title: t('2.includes.2.title', { fallback: 'Flexible Grid Layouts' }),
        value: t('2.includes.2.text', {
          fallback:
            "Implement flexible layouts that automatically adapt to the user's device and screen size.",
        }),
        number: '003',
      },
      {
        title: t('2.includes.3.title', {
          fallback: 'Optimized Image Rendering',
        }),
        value: t('2.includes.3.text', {
          fallback:
            'Use image sizes and formats that automatically adjust based on device type.',
        }),
        number: '004',
      },
      {
        title: t('2.includes.4.title', {
          fallback: 'Touchscreen Optimization',
        }),
        value: t('2.includes.4.text', {
          fallback:
            'Optimize your site for touchscreens to provide a seamless user experience on mobile devices.',
        }),
        number: '005',
      },
      {
        title: t('2.includes.5.title', { fallback: 'Fast Loading Speed' }),
        value: t('2.includes.5.text', {
          fallback:
            "Optimize your website's speed for mobile devices, ensuring fast load times on any network.",
        }),
        number: '006',
      },
      {
        title: t('2.includes.6.title', { fallback: 'Viewport Adjustments' }),
        value: t('2.includes.6.text', {
          fallback:
            "Ensure content and design elements scale properly to fit the user's screen size with responsive viewports.",
        }),
        number: '007',
      },
      {
        title: t('2.includes.7.title', { fallback: 'Adaptive Menus' }),
        value: t('2.includes.7.text', {
          fallback:
            'Implement menus that adapt to different devices, such as dropdowns for mobile users.',
        }),
        number: '008',
      },
      {
        title: t('2.includes.8.title', {
          fallback: 'Mobile-Specific Features',
        }),
        value: t('2.includes.8.text', {
          fallback:
            'Add mobile-specific features, such as click-to-call or geolocation, to enhance the user experience.',
        }),
        number: '009',
      },
      {
        title: t('2.includes.9.title', { fallback: 'Device Testing' }),
        value: t('2.includes.9.text', {
          fallback:
            'Conduct extensive cross-device testing to ensure consistent performance on all devices.',
        }),
        number: '010',
      },
    ],
  },
  {
    title: t('3.title', { fallback: 'Content Management Systems (CMS)' }),
    text: t('3.text', {
      fallback:
        'Manage and update your website with ease using a powerful content management system.',
    }),
    imgUrl: '/images/web-dev/range-4.jpg',
    includes: [
      {
        title: t('3.includes.0.title', { fallback: 'WordPress Development' }),
        value: t('3.includes.0.text', {
          fallback:
            'Build custom WordPress websites with advanced features tailored to your needs.',
        }),
        number: '001',
      },
      {
        title: t('3.includes.1.title', {
          fallback: 'Joomla & Drupal Development',
        }),
        value: t('3.includes.1.text', {
          fallback:
            'Expert development and customization for other popular CMS platforms like Joomla and Drupal.',
        }),
        number: '002',
      },
      {
        title: t('3.includes.2.title', {
          fallback: 'User-Friendly Dashboards',
        }),
        value: t('3.includes.2.text', {
          fallback:
            'Implement easy-to-use dashboards that allow users to update content without technical knowledge.',
        }),
        number: '003',
      },
      {
        title: t('3.includes.3.title', { fallback: 'Custom CMS Features' }),
        value: t('3.includes.3.text', {
          fallback:
            'Develop unique CMS features tailored to your specific business operations.',
        }),
        number: '004',
      },
      {
        title: t('3.includes.4.title', {
          fallback: 'Multilingual CMS Support',
        }),
        value: t('3.includes.4.text', {
          fallback:
            'Integrate multi-language options into your CMS for a global reach.',
        }),
        number: '005',
      },
      {
        title: t('3.includes.5.title', { fallback: 'Security Features' }),
        value: t('3.includes.5.text', {
          fallback:
            'Implement built-in security protocols to safeguard your CMS against hacking and data breaches.',
        }),
        number: '006',
      },
      {
        title: t('3.includes.6.title', { fallback: 'SEO-Ready CMS' }),
        value: t('3.includes.6.text', {
          fallback:
            'Optimize CMS pages for SEO to improve their ranking in search engines.',
        }),
        number: '007',
      },
      {
        title: t('3.includes.7.title', { fallback: 'Media Management' }),
        value: t('3.includes.7.text', {
          fallback:
            'Integrate media libraries and content management features that streamline content creation.',
        }),
        number: '008',
      },
      {
        title: t('3.includes.8.title', {
          fallback: 'Role-Based Access Control',
        }),
        value: t('3.includes.8.text', {
          fallback:
            'Set up different access levels for users to control who can edit or update content.',
        }),
        number: '009',
      },
      {
        title: t('3.includes.9.title', {
          fallback: 'CMS Maintenance & Support',
        }),
        value: t('3.includes.9.text', {
          fallback:
            "Provide ongoing support and maintenance for your CMS, ensuring it's always up-to-date.",
        }),
        number: '010',
      },
    ],
  },
  {
    title: t('4.title', { fallback: 'Web Application Development' }),
    text: t('4.text', {
      fallback:
        'Develop powerful, customized web applications designed to streamline your business processes.',
    }),
    imgUrl: '/images/web-dev/range-5.jpg',
    includes: [
      {
        title: t('4.includes.0.title', { fallback: 'Custom Web Applications' }),
        value: t('4.includes.0.text', {
          fallback:
            'Build web applications that are fully customized to your project needs and workflow.',
        }),
        number: '001',
      },
      {
        title: t('4.includes.1.title', { fallback: 'Database Integration' }),
        value: t('4.includes.1.text', {
          fallback:
            'Integrate robust databases to store, retrieve, and manage data efficiently.',
        }),
        number: '002',
      },
      {
        title: t('4.includes.2.title', { fallback: 'Enterprise Solutions' }),
        value: t('4.includes.2.text', {
          fallback:
            'Develop large-scale web applications that streamline operations and enhance efficiency.',
        }),
        number: '003',
      },
      {
        title: t('4.includes.3.title', {
          fallback: 'Data Analytics & Reporting',
        }),
        value: t('4.includes.3.text', {
          fallback:
            'Build web apps that provide real-time data analytics and reporting.',
        }),
        number: '004',
      },
      {
        title: t('4.includes.4.title', { fallback: 'Mobile Web Apps' }),
        value: t('4.includes.4.text', {
          fallback:
            'Design and develop web apps that work seamlessly on both desktop and mobile devices.',
        }),
        number: '005',
      },
      {
        title: t('4.includes.5.title', { fallback: 'API Integrations' }),
        value: t('4.includes.5.text', {
          fallback:
            'Integrate third-party APIs into your web apps for enhanced functionality.',
        }),
        number: '006',
      },
      {
        title: t('4.includes.6.title', {
          fallback: 'Security & Authentication',
        }),
        value: t('4.includes.6.text', {
          fallback:
            'Implement secure user authentication and data protection protocols.',
        }),
        number: '007',
      },
      {
        title: t('4.includes.7.title', {
          fallback: 'Payment Gateway Integration',
        }),
        value: t('4.includes.7.text', {
          fallback:
            'Set up secure, reliable payment systems within your web applications.',
        }),
        number: '008',
      },
      {
        title: t('4.includes.8.title', { fallback: 'CRM Web Applications' }),
        value: t('4.includes.8.text', {
          fallback:
            'Develop web applications that integrate with customer relationship management (CRM) systems to enhance customer interactions and streamline business processes.',
        }),
        number: '009',
      },
      {
        title: t('4.includes.9.title', {
          fallback: 'Continuous Support & Maintenance',
        }),
        value: t('4.includes.9.text', {
          fallback:
            'Offer ongoing maintenance and updates to ensure your web app remains fully functional.',
        }),
        number: '010',
      },
    ],
  },
  {
    title: t('5.title', { fallback: 'SEO Web Development' }),
    text: t('5.text', {
      fallback:
        'Optimize your website for search engines right from the development phase.',
    }),
    imgUrl: '/images/web-dev/range-6.jpg',
    includes: [
      {
        title: t('5.includes.0.title', {
          fallback: 'On-Page SEO Optimization',
        }),
        value: t('5.includes.0.text', {
          fallback:
            'Ensure your website is fully optimized for search engines with keyword-focused content.',
        }),
        number: '001',
      },
      {
        title: t('5.includes.1.title', { fallback: 'Meta Tag Implementation' }),
        value: t('5.includes.1.text', {
          fallback:
            'Add necessary meta tags, such as title, description, and keywords, to help search engines index your site correctly.',
        }),
        number: '002',
      },
      {
        title: t('5.includes.2.title', { fallback: 'SEO-Friendly URLs' }),
        value: t('5.includes.2.text', {
          fallback:
            'Structure URLs in an SEO-friendly manner to improve search engine visibility.',
        }),
        number: '003',
      },
      {
        title: t('5.includes.3.title', { fallback: 'Mobile SEO' }),
        value: t('5.includes.3.text', {
          fallback:
            'Optimize your site for mobile searches to ensure visibility on mobile devices.',
        }),
        number: '004',
      },
      {
        title: t('5.includes.4.title', { fallback: 'Site Speed Optimization' }),
        value: t('5.includes.4.text', {
          fallback:
            "Improve your website's loading speed, a key factor for SEO rankings.",
        }),
        number: '005',
      },
      {
        title: t('5.includes.5.title', { fallback: 'Structured Data Markup' }),
        value: t('5.includes.5.text', {
          fallback:
            'Implement schema markup to help search engines better understand your content and improve its visibility.',
        }),
        number: '006',
      },
      {
        title: t('5.includes.6.title', {
          fallback: 'Internal Linking Strategies',
        }),
        value: t('5.includes.6.text', {
          fallback:
            'Establish a robust internal linking structure to enhance both SEO and user navigation.',
        }),
        number: '007',
      },
      {
        title: t('5.includes.7.title', { fallback: 'Content Optimization' }),
        value: t('5.includes.7.text', {
          fallback:
            'Optimize your web content with relevant keywords and best SEO practices to achieve higher search engine rankings.',
        }),
        number: '008',
      },
      {
        title: t('5.includes.8.title', { fallback: 'Backlink Strategy' }),
        value: t('5.includes.8.text', {
          fallback:
            "Develop strategies to build high-quality backlinks and enhance your website's domain authority.",
        }),
        number: '009',
      },
      {
        title: t('5.includes.9.title', { fallback: 'Ongoing SEO Monitoring' }),
        value: t('5.includes.9.text', {
          fallback:
            'Provide continuous SEO monitoring and adjustments to ensure your site remains optimized.',
        }),
        number: '010',
      },
    ],
  },
  {
    title: t('6.title', { fallback: 'Website Maintenance & Support' }),
    text: t('6.text', {
      fallback:
        'Ensure your website performs optimally with ongoing support and regular updates.',
    }),
    imgUrl: '/images/web-dev/range-8.jpg',
    includes: [
      {
        title: t('6.includes.0.title', {
          fallback: 'Regular Software Updates',
        }),
        value: t('6.includes.0.text', {
          fallback:
            'Keep all your website software up to date to avoid security vulnerabilities.',
        }),
        number: '001',
      },
      {
        title: t('6.includes.1.title', { fallback: 'Security Monitoring' }),
        value: t('6.includes.1.text', {
          fallback:
            'Implement continuous security scans to detect and prevent threats.',
        }),
        number: '002',
      },
      {
        title: t('6.includes.2.title', { fallback: 'Backup Solutions' }),
        value: t('6.includes.2.text', {
          fallback: 'Ensure regular backups are taken to prevent data loss.',
        }),
        number: '003',
      },
      {
        title: t('6.includes.3.title', { fallback: 'Performance Monitoring' }),
        value: t('6.includes.3.text', {
          fallback:
            "Regularly check your website's performance to ensure it's running at peak efficiency.",
        }),
        number: '004',
      },
      {
        title: t('6.includes.4.title', { fallback: 'Content Updates' }),
        value: t('6.includes.4.text', {
          fallback:
            'Offer timely content updates to keep your website relevant and engaging.',
        }),
        number: '005',
      },
      {
        title: t('6.includes.5.title', { fallback: 'Bug Fixing' }),
        value: t('6.includes.5.text', {
          fallback:
            'Resolve issues quickly to ensure your website remains fully functional.',
        }),
        number: '006',
      },
      {
        title: t('6.includes.6.title', { fallback: 'Hosting Support' }),
        value: t('6.includes.6.text', {
          fallback:
            'Provide troubleshooting and assistance with hosting-related issues.',
        }),
        number: '007',
      },
      {
        title: t('6.includes.7.title', { fallback: 'SEO Maintenance' }),
        value: t('6.includes.7.text', {
          fallback:
            "Continuously monitor and update your website's SEO to stay competitive.",
        }),
        number: '008',
      },
      {
        title: t('6.includes.8.title', { fallback: 'Compliance Updates' }),
        value: t('6.includes.8.text', {
          fallback:
            'Keep your website up to date with legal and industry-specific regulations.',
        }),
        number: '009',
      },
      {
        title: t('6.includes.9.title', { fallback: 'Technical Support' }),
        value: t('6.includes.9.text', {
          fallback:
            'Provide ongoing technical support to resolve issues efficiently and effectively.',
        }),
        number: '010',
      },
    ],
  },
  {
    title: t('7.title', { fallback: 'UX/UI Design' }),
    text: t('7.text', {
      fallback:
        'Deliver exceptional user experiences through custom-designed, intuitive user interfaces.',
    }),
    imgUrl: '/images/web-dev/range-7.jpg',
    includes: [
      {
        title: t('7.includes.0.title', { fallback: 'User Research' }),
        value: t('7.includes.0.text', {
          fallback:
            'Conduct thorough user research to understand their needs and preferences.',
        }),
        number: '001',
      },
      {
        title: t('7.includes.1.title', {
          fallback: 'Wireframing & Prototyping',
        }),
        value: t('7.includes.1.text', {
          fallback:
            'Create detailed wireframes and prototypes to visualize design concepts before they are developed.',
        }),
        number: '002',
      },
      {
        title: t('7.includes.2.title', { fallback: 'Responsive UI Design' }),
        value: t('7.includes.2.text', {
          fallback:
            'Ensure your interface works smoothly across all screen sizes, providing a seamless user experience.',
        }),
        number: '003',
      },
      {
        title: t('7.includes.3.title', { fallback: 'Interactive Design' }),
        value: t('7.includes.3.text', {
          fallback:
            'Develop engaging and interactive UI elements that keep users engaged and motivated.',
        }),
        number: '004',
      },
      {
        title: t('7.includes.4.title', { fallback: 'Usability Testing' }),
        value: t('7.includes.4.text', {
          fallback:
            'Conduct usability testing to refine the user experience and ensure ease of use.',
        }),
        number: '005',
      },
      {
        title: t('7.includes.5.title', {
          fallback: 'Brand Identity Integration',
        }),
        value: t('7.includes.5.text', {
          fallback:
            "Design interfaces that align with your brand's aesthetic and values.",
        }),
        number: '006',
      },
      {
        title: t('7.includes.6.title', { fallback: 'Cross-Platform UI' }),
        value: t('7.includes.6.text', {
          fallback:
            'Ensure consistency in design and functionality across multiple platforms.',
        }),
        number: '007',
      },
      {
        title: t('7.includes.7.title', { fallback: 'Intuitive Navigation' }),
        value: t('7.includes.7.text', {
          fallback:
            'Create easy-to-navigate designs that enhance user experience and reduce bounce rates.',
        }),
        number: '008',
      },
      {
        title: t('7.includes.8.title', {
          fallback: 'Conversion-Oriented Design',
        }),
        value: t('7.includes.8.text', {
          fallback:
            'Design interfaces that guide users toward desired actions, such as purchasing or subscribing.',
        }),
        number: '009',
      },
      {
        title: t('7.includes.9.title', {
          fallback: 'UI Optimization for Performance',
        }),
        value: t('7.includes.9.text', {
          fallback:
            'Ensure all UI elements are optimized for performance and quick loading times.',
        }),
        number: '010',
      },
    ],
  },
];

export const OurFullRange = () => {
  const t = useTranslations('webDevelopment.ourFullRange');

  return (
    <section className="container flex flex-col gap-10 py-[60px] max-md:py-10">
      <Heading
        title={t('title', {
          fallback: 'Our Full Range of Web Development Services',
        })}
        text={t('text', {
          fallback:
            'We offer a comprehensive suite of web development services designed to bring your business objectives to life. From custom websites and scalable e-commerce platforms to robust web applications and seamless integrations, we provide everything you need to build a high-performing online presence for your company.',
        })}
      />
      <Slider />
    </section>
  );
};

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    axis: 'x',
  });

  const [isShowMore, setIsShowMore] = useState(false);

  useEffect((): (() => void) => {
    if (!emblaApi) return () => {};
    const onSelect = () => setIsShowMore(false);
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const t = useTranslations('webDevelopment.ourFullRange.slider');
  const slides = getSlides(t);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
    setIsShowMore(false);
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
    setIsShowMore(false);
  };

  return (
    <section className="flex h-max flex-col gap-10 rounded-xl border border-[#A4A189] p-6">
      <div className="flex items-center gap-10">
        <span className="h-1 w-full bg-[#FFF4E1] opacity-40" />
        <nav className="flex shrink-0 items-center gap-2">
          <Button variant="outline" onClick={scrollPrev}>
            <ArrowLeft />
          </Button>
          <Button variant="outline" onClick={scrollNext}>
            <ArrowRight />
          </Button>
        </nav>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-max">
          {slides.map(slide => (
            <div key={slide.title} className="h-max min-w-full px-1">
              <Card
                {...slide}
                isShowMore={isShowMore}
                setIsShowMore={setIsShowMore}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  imgUrl,
  title,
  text,
  includes,
  isShowMore,
  setIsShowMore,
}: {
  imgUrl: string;
  title: string;
  text: string;
  includes: {
    title: string;
    value: string;
    number: string;
  }[];
  isShowMore: boolean;
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations('webDevelopment.ourFullRange.slider');

  return (
    <article className="flex flex-col gap-10">
      <Image
        className="h-[400px] w-full object-cover"
        src={imgUrl}
        alt={title}
        width={1200}
        height={400}
        unoptimized
      />
      <div className="flex items-end justify-between gap-20 max-md:flex-col max-md:items-start max-md:gap-10">
        <section className="flex flex-col gap-2.5">
          <Title as="h4" size="4xl" weight={700} uppercase>
            {title}
          </Title>
          <Text uppercase>{text}</Text>
        </section>
        <Button variant="outline" onClick={() => setIsShowMore(prev => !prev)}>
          {isShowMore
            ? t('hide', { fallback: 'Hide' })
            : t('show', { fallback: 'Show' })}{' '}
          {t('allServices', { fallback: 'all services' })}
        </Button>
      </div>
      <section
        className={cn(
          'grid grid-cols-2 gap-5 overflow-hidden transition-all duration-500 ease-in-out max-md:grid-cols-1',
          isShowMore ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        {includes.map(include => (
          <IncludeCard key={include.title} {...include} />
        ))}
      </section>
    </article>
  );
};

const IncludeCard = ({
  title,
  value,
  number,
}: {
  title: string;
  value: string;
  number: string;
}) => {
  return (
    <article className="flex flex-col gap-5 py-8 pr-2.5 pl-5">
      <span className="flex items-center gap-2">
        <Text size="xs" color="grey">
          {number}
        </Text>
        <span className="h-0.5 w-8 bg-[#A4A189]" />
      </span>
      <section className="flex flex-col">
        <Text size="xl">{title}</Text>
        <Text color="grey">{value}</Text>
      </section>
    </article>
  );
};
