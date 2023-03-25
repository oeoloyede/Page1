import { memo, SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 75 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_114_60)'>
      <rect x={0.936005} y={0.759036} width={73.1733} height={43.3735} rx={20} fill='url(#paint0_linear_114_60)' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M38.436 16.259H37.436V22.259H31.436V23.259H37.436V29.259H38.436V23.259H44.436V22.259H38.436V16.259Z'
        fill='white'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_114_60'
        x1={52.4283}
        y1={0.759036}
        x2={40.8885}
        y2={48.5449}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF00D6' />
        <stop offset={1} stopColor='#FF4D00' />
      </linearGradient>
      <clipPath id='clip0_114_60'>
        <rect width={73.1733} height={43.3735} fill='white' transform='translate(0.936005 0.759036)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(UploadIcon);
export { Memo as UploadIcon };
