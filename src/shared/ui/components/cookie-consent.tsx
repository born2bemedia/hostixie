'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { lsRead, lsWrite } from '@/shared/lib/utils/ls';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = lsRead('isCookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const t = useTranslations('cookieConsent');

  const handleAccept = () => {
    lsWrite('isCookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => setIsVisible(false);

  return (
    <div
      className={cn(
        'fixed right-6 bottom-6 z-20 flex w-[844px] items-center gap-6 rounded-lg border border-[#DBDBDB] bg-[#FFF4E1] p-6 shadow-[0_0_25px_0_rgba(0,0,0,0.05)] max-lg:w-[350px] max-lg:flex-col max-lg:items-start max-sm:w-[90%]',
        !isVisible && 'hidden',
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M31.9999 58.6666C28.311 58.6666 24.8444 57.9662 21.5999 56.5653C18.3555 55.1644 15.5333 53.2648 13.1333 50.8666C10.7333 48.4684 8.8337 45.6462 7.43459 42.4C6.03547 39.1537 5.33503 35.6871 5.33325 32C5.33325 28.4 6.07814 24.9004 7.56792 21.5013C9.0577 18.1022 11.1244 15.1128 13.7679 12.5333C16.4115 9.95373 19.5555 7.99817 23.1999 6.66662C26.8444 5.33506 30.8444 4.93506 35.1999 5.46662C35.8666 5.55551 36.3777 5.83373 36.7333 6.30129C37.0888 6.76884 37.2888 7.40173 37.3333 8.19995C37.4221 11.0444 38.4781 13.4782 40.5013 15.5013C42.5244 17.5244 44.935 18.5795 47.7333 18.6666C48.6666 18.7111 49.3777 18.9777 49.8666 19.4666C50.3555 19.9555 50.6221 20.7111 50.6666 21.7333C50.7555 23.6 51.3226 25.1333 52.3679 26.3333C53.4133 27.5333 54.8684 28.4444 56.7333 29.0666C57.3555 29.2888 57.8337 29.6115 58.1679 30.0346C58.5021 30.4577 58.6684 30.9795 58.6666 31.6C58.7555 35.2888 58.111 38.7777 56.7333 42.0666C55.3555 45.3555 53.4666 48.2337 51.0666 50.7013C48.6666 53.1688 45.8221 55.1128 42.5333 56.5333C39.2444 57.9537 35.7333 58.6648 31.9999 58.6666ZM27.9999 26.6666C29.111 26.6666 30.0559 26.2782 30.8346 25.5013C31.6133 24.7244 32.0017 23.7795 31.9999 22.6666C31.9981 21.5537 31.6097 20.6097 30.8346 19.8346C30.0595 19.0595 29.1146 18.6702 27.9999 18.6666C26.8853 18.6631 25.9413 19.0524 25.1679 19.8346C24.3946 20.6168 24.0053 21.5608 23.9999 22.6666C23.9946 23.7724 24.3839 24.7173 25.1679 25.5013C25.9519 26.2853 26.8959 26.6737 27.9999 26.6666ZM22.6666 40C23.7777 40 24.7226 39.6115 25.5013 38.8346C26.2799 38.0577 26.6684 37.1128 26.6666 36C26.6648 34.8871 26.2764 33.9431 25.5013 33.168C24.7261 32.3928 23.7813 32.0035 22.6666 32C21.5519 31.9964 20.6079 32.3857 19.8346 33.168C19.0613 33.9502 18.6719 34.8942 18.6666 36C18.6613 37.1057 19.0506 38.0506 19.8346 38.8346C20.6186 39.6186 21.5626 40.0071 22.6666 40ZM39.9999 42.6666C40.7555 42.6666 41.3893 42.4106 41.9013 41.8986C42.4133 41.3866 42.6684 40.7537 42.6666 40C42.6648 39.2462 42.4088 38.6133 41.8986 38.1013C41.3884 37.5893 40.7555 37.3333 39.9999 37.3333C39.2444 37.3333 38.6115 37.5893 38.1013 38.1013C37.591 38.6133 37.335 39.2462 37.3333 40C37.3315 40.7537 37.5875 41.3875 38.1013 41.9013C38.615 42.4151 39.2479 42.6702 39.9999 42.6666Z"
          fill="black"
        />
      </svg>
      <section className="flex flex-col gap-3">
        <Text color="black" weight={700} size="lg">
          {t('title', { fallback: 'Cookie settings' })}
        </Text>
        <Text
          color="sand"
          weight={700}
          className="leading-[22.4px] tracking-[0.32px]"
        >
          {t('text', {
            fallback:
              'Cookies help us improve our website. By clicking "Accept," you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our',
          })}{' '}
          <Link href="/cookie-policy" className="underline">
            {t('link', { fallback: 'Cookie Policy' })}
          </Link>
          .
        </Text>
      </section>
      <div className="flex w-[180px] shrink-0 flex-col gap-2 max-lg:flex-row">
        <Button
          onClick={handleDecline}
          size="lg"
          variant="primary"
          className="h-[52px] font-bold"
          fullWidth
        >
          {t('accept', { fallback: 'Accept' })}
        </Button>
        <Button
          onClick={handleAccept}
          size="lg"
          variant="flat"
          className="h-[52px] font-bold"
          fullWidth
        >
          {t('decline', { fallback: 'Decline' })}
        </Button>
      </div>
    </div>
  );
};
