import { memo, SVGProps } from 'react';

const UploadIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 75 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_114_89)'>
      <rect x={0.936005} y={0.759036} width={73.1733} height={43.3735} rx={20} fill='url(#paint0_linear_114_89)' />
      <path
        d='M38 8L40.6942 17.6738H49.4127L42.3593 23.6525L45.0534 33.3262L38 27.3475L30.9466 33.3262L33.6407 23.6525L26.5873 17.6738H35.3058L38 8Z'
        fill='#D9D9D9'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_114_89'
        x1={52.4283}
        y1={0.759036}
        x2={40.8885}
        y2={48.5449}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF00D6' />
        <stop offset={1} stopColor='#FF4D00' />
      </linearGradient>
      <clipPath id='clip0_114_89'>
        <rect width={73.1733} height={43.3735} fill='white' transform='translate(0.936005 0.759036)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(UploadIcon2);
export { Memo as UploadIcon2 };
