'use client';

export const ArrowBottomIcon = ({
  color = 'white',
  classNames,
}: {
  classNames?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    className={classNames}
  >
    <path
      d="M5.18993 1.5H6.74743C8.67826 1.5 9.4716 2.87083 8.50326 4.545L7.7216 5.8925L6.93993 7.24C5.9716 8.91417 4.39076 8.91417 3.42243 7.24L2.64076 5.8925L1.8591 4.545C0.908264 2.87083 1.69576 1.5 3.63243 1.5H5.18993Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
