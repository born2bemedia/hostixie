'use client';

import { Text } from '@/shared/ui/kit/text';

export const ArticleText = ({ children }: { children: React.ReactNode }) => (
  <Text size="xl" color="black">
    {children}
  </Text>
);
