'use client';

import type { ReactNode } from 'react';

export const List = ({ values }: { values: ReactNode[] }) => (
  <ul className="list-inside list-disc pl-2.5">
    {values.map((value, i) => (
      <li key={i} className="text-xl text-black">
        {value}
      </li>
    ))}
  </ul>
);
