'use client';

import type { ReactNode } from 'react';

export const FormColumn = ({ children }: { children: ReactNode }) => (
  <div className="flex w-full flex-col gap-5">{children}</div>
);
