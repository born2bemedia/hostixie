'use client';

export const IconLayout = ({ children }: { children: React.ReactNode }) => (
  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.10)]">
    {children}
  </span>
);
