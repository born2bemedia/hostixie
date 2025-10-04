'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('0.title', { fallback: 'Collaboration & Communication' }),
    subtitle: t('0.subtitle', {
      fallback: 'Keeping You in the Loop Every Step of the Way',
    }),
    text: t('0.text', {
      fallback:
        "From start to finish, we value open communication and feedback. Our process includes regular check-ins and progress updates, ensuring you're always informed. You can rely on us to be transparent, responsive, and collaborative, ensuring we deliver precisely what you need.",
    }),
    imgUrl: '/images/our-philosophy/card-1.jpg',
  },
  {
    title: t('1.title', { fallback: 'Innovation & Continuous Improvement' }),
    subtitle: t('1.subtitle', {
      fallback: 'Staying Ahead of the Curve',
    }),
    text: t('1.text', {
      fallback:
        "We continually push the boundaries with the latest technologies and trends. Whether it's adopting new web development tools or leveraging emerging technologies, we integrate innovation into every project. Our commitment to continuous improvement ensures that your website stays competitive and functional long after it launches.",
    }),
    imgUrl: '/images/our-philosophy/card-2.jpg',
  },
  {
    title: t('2.title', { fallback: 'Client-Centered Customization' }),
    subtitle: t('2.subtitle', {
      fallback: 'Tailoring Solutions to Your Needs',
    }),
    text: t('2.text', {
      fallback:
        "We understand that each business is unique. That's why we customize every solution to fit your specific goals, industry, and audience. No two projects are alike, and we ensure that your website is designed to meet your exact needs, budget, and timeline.",
    }),
    imgUrl: '/images/our-philosophy/card-3.jpg',
  },
  {
    title: t('3.title', { fallback: 'Project Management' }),
    subtitle: t('3.subtitle', {
      fallback: 'Effortless Collaboration with Agile Methodology',
    }),
    text: t('3.text', {
      fallback:
        'We employ an agile project management approach, enabling us to remain flexible and adapt quickly to your evolving needs. Our team works in short, iterative cycles, delivering functional parts of the project regularly, which allows for easy adjustments based on feedback. This ensures that we remain focused on providing the highest quality solution, on time.',
    }),
    imgUrl: '/images/our-philosophy/card-4.jpg',
  },
  {
    title: t('4.title', { fallback: 'Quality Assurance & Testing' }),
    subtitle: t('4.subtitle', {
      fallback: 'Ensuring Flawless Performance',
    }),
    text: t('4.text', {
      fallback:
        "We're committed to delivering a flawless product. Our dedicated QA team rigorously tests every aspect of your website to ensure it works perfectly across all browsers and devices. From performance testing to usability checks, we leave no stone unturned to provide a bug-free, fully functional website.",
    }),
    imgUrl: '/images/our-philosophy/card-5.jpg',
  },
  {
    title: t('5.title', { fallback: 'Post-Launch Support' }),
    subtitle: t('5.subtitle', {
      fallback: 'Your Success is Our Priority',
    }),
    text: t('5.text', {
      fallback:
        "We don't just build websites — we provide ongoing support to ensure your business's success. After launch, we provide continuous monitoring, updates, and technical support to ensure your website operates optimally. Whether you need content updates, security patches, or performance tweaks, we've got you covered.",
    }),
    imgUrl: '/images/our-philosophy/card-6.jpg',
  },
  {
    title: t('6.title', { fallback: 'Success Metrics & Reporting' }),
    subtitle: t('6.subtitle', {
      fallback: 'Measuring the Impact of Our Work',
    }),
    text: t('6.text', {
      fallback:
        "We measure success by results. We track the KPIs that matter most to your project, including website traffic and conversions, user engagement, and site speed. Following the launch, we provide comprehensive reports that demonstrate your website's performance and identify areas for improvement.",
    }),
    imgUrl: '/images/our-philosophy/card-7.jpg',
  },
];

export const FlatCards = () => {
  const t = useTranslations('ourApproach.flatCards');

  const cards = getCards(t);

  return (
    <section className="bg-[#FFF4E1] py-[60px] max-md:py-10">
      <div className="relative container flex flex-col gap-10">
        {cards.map((card, index) => (
          <Card key={card.title} {...card} index={index} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  imgUrl,
  subtitle,
  text,
  title,
  index,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
  text: string;
  index: number;
}) => {
  return (
    <article
      className="sticky flex flex-col gap-2.5 rounded-xl border border-[#A4A189] bg-[#FFF4E1] p-4 max-md:!relative max-md:!top-0"
      style={{
        top: `${index * 40}px`,
        zIndex: index,
      }}
    >
      <div className="relative h-[400px] w-full">
        <Image
          className="rounded-sm object-cover"
          src={imgUrl}
          alt={title}
          fill
          unoptimized
        />
        <Title
          as="h4"
          size="4xl"
          weight={700}
          className="absolute bottom-5 left-5 max-md:text-2xl"
          uppercase
        >
          {title}
        </Title>
      </div>
      <div className="flex flex-col gap-2">
        <Text size="xl" color="primary" weight={700}>
          {subtitle}
        </Text>
        <Text size="base" color="black" weight={500}>
          {text}
        </Text>
      </div>
    </article>
  );
};
