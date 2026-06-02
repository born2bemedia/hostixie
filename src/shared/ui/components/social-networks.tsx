'use client';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { FacebookIcon } from '@/shared/ui/icons/socials/fb';
import { InstagramIcon } from '@/shared/ui/icons/socials/inst';
import { XIcon } from '@/shared/ui/icons/socials/x';

type SocialNetworksProps = {
  linkClassName?: string;
  className?: string;
};

export const SocialNetworks = ({
  linkClassName,
  className,
}: SocialNetworksProps) => (
  <nav className={cn('flex items-center gap-5', className)}>
    <Link href="#" className={cn(linkClassName)}>
      <XIcon />
    </Link>
    <Link href="#" className={cn(linkClassName)}>
      <FacebookIcon />
    </Link>
    <Link href="#" className={cn(linkClassName)}>
      <InstagramIcon />
    </Link>
  </nav>
);
