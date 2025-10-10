'use client';

import { Text } from '@/shared/ui/kit/text';

export const PolicyText = ({ children }: { children: React.ReactNode }) => (
  <Text size="xl" color="black" className="opacity-80">
    {children}
  </Text>
);
