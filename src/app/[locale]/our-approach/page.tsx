import { getTranslations } from 'next-intl/server';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';
import { PageHero } from '@/shared/ui/components/page-hero';

import { FlatCards, OurPhilosophy, OurStepByStep } from './components';

export default async function OurApproach() {
  const t = await getTranslations('ourApproach.hero');
  const tContact = await getTranslations('ourApproach.contactUs');

  return (
    <main>
      <PageHero
        title={
          <>
            <span className="text-[40px] leading-[48px] max-md:text-base max-md:leading-[120%]">
              {t('title.0', { fallback: 'Our Approach:' })}
            </span>{' '}
            <br /> {t('title.1', { fallback: 'Building Your' })} <br />
            <span className="text-primary">
              {t('title.2', { fallback: 'Digital Future' })}
            </span>
          </>
        }
        subtitle={t('subtitle', {
          fallback:
            'A Collaborative and Results-Driven Process to Turn Your Business Ambitions into Seamless, Scalable Solutions',
        })}
        text={t('text', {
          fallback:
            'We believe that every enterprise is unique and requires a personalized approach. Our process focuses on collaboration, innovation, and delivering exceptional results. We work closely with you at every stage, ensuring that your website or application not only meets your company’s goals but also exceeds your expectations. Here’s a deeper look into how we approach every project we undertake.',
        })}
      />
      <OurPhilosophy />
      <OurStepByStep />
      <FlatCards />
      <div className="bg-[#FFF4E1] py-20 max-md:py-10">
        <GetInTouch
          title={tContact('title', { fallback: 'Contact Us Today!' })}
          subtitle={tContact('subtitle', {
            fallback:
              'Do you have questions, or are you ready to begin your project?',
          })}
          text={tContact('text', {
            fallback:
              'Our team is here to assist you every step of the way. Whether you want to learn more about our approach or discuss your ideas, we’re ready to bring your vision to life. Let’s make your project a success!',
          })}
          button={tContact('button', { fallback: 'Let’s Make It Happen' })}
          titleClassName="leading-[120%] tracking-[1.12px] max-md:leading-[120%] max-md:tracking-[1.12px]"
        />
      </div>
    </main>
  );
}
