'use client';

import { Text } from '@/shared/ui/kit/text';

export const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="border-primary flex h-10 w-max items-center justify-center rounded-lg border px-3 max-md:w-full">
    <Text size="xs" color="primary" weight={700}>
      {children}
    </Text>
  </span>
);
