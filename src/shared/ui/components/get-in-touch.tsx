'use client';

import { cn } from '@/shared/lib/utils/cn';
import { HeroTitle } from '@/shared/ui/components/hero-title';
import { Button } from '@/shared/ui/kit/button';

export const GetInTouch = ({
  button,
  subtitle,
  text,
  title,
  titleClassName,
  subtitleClassName,
  layoutClassName,
  color = 'black',
  onClickButtonAction,
}: {
  title: string;
  subtitle?: string;
  text: string;
  button?: string;
  titleClassName?: string;
  layoutClassName?: string;
  subtitleClassName?: string;
  color?: 'white' | 'black';
  onClickButtonAction?: () => void;
}) => {
  return (
    <div className={cn('bg-[#FFF4E1]', layoutClassName)}>
      <section className="container">
        <HeroTitle
          color={color}
          title={title}
          subtitle={subtitle}
          text={text}
          additionalContent={
            button ? (
              <Button onClick={onClickButtonAction}>{button}</Button>
            ) : null
          }
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
        />
      </section>
    </div>
  );
};
