'use client';

export const PlayIcon = ({
  color = '#FFF4E1',
  classNames,
}: {
  color?: string;
  classNames?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    className={classNames}
  >
    <path
      d="M3.5 7.49998V5.94248C3.5 4.01164 4.87083 3.21831 6.545 4.18664L7.8925 4.96831L9.24 5.74998C10.9142 6.71831 10.9142 8.29914 9.24 9.26748L7.8925 10.0491L6.545 10.8308C4.87083 11.7816 3.5 10.9941 3.5 9.05748V7.49998Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
