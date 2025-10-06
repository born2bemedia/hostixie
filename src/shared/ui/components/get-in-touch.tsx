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
  layoutClassName,
  color = 'black',
  onClickButton,
}: {
  title: string;
  subtitle?: string;
  text: string;
  button: string;
  titleClassName?: string;
  layoutClassName?: string;
  color?: 'white' | 'black';
  onClickButton?: () => void;
}) => {
  return (
    <div className={cn('bg-[#FFF4E1]', layoutClassName)}>
      <section className="container">
        <HeroTitle
          color={color}
          title={title}
          subtitle={subtitle}
          text={text}
          additionalContent={<Button onClick={onClickButton}>{button}</Button>}
          titleClassName={titleClassName}
        />
      </section>
    </div>
  );
};
