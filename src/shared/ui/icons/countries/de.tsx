'use client';

export const DeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    role="img"
    aria-label="Germany (rounded)"
  >
    <g clipPath="url(#clip0)">
      <mask
        id="mask"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path
          d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
          fill="white"
        />
      </mask>
      <rect width="18" height="18" fill="#EEEEEE" mask="url(#mask)" />
      <rect
        x="0"
        y="0"
        width="18"
        height="6"
        fill="#000000"
        mask="url(#mask)"
      />
      <rect
        x="0"
        y="6"
        width="18"
        height="6"
        fill="#DD0000"
        mask="url(#mask)"
      />
      <rect
        x="0"
        y="12"
        width="18"
        height="6"
        fill="#FFCC00"
        mask="url(#mask)"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
