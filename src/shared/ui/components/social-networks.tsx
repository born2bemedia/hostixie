'use client';

import { Link } from '@/i18n/navigation';

import { FacebookIcon } from '@/shared/ui/icons/socials/fb';
import { InstagramIcon } from '@/shared/ui/icons/socials/inst';
import { XIcon } from '@/shared/ui/icons/socials/x';

export const SocialNetworks = () => (
  <nav className="flex items-center gap-5">
    <Link href="#">
      <XIcon />
    </Link>
    <Link href="#">
      <FacebookIcon />
    </Link>
    <Link href="#">
      <InstagramIcon />
    </Link>
  </nav>
);
