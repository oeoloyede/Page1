import { memo, SVGProps } from 'react';

const ProfileIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.9054 21.2373C18.0239 21.2373 15.688 23.5732 15.688 26.4547V27.759H26.1228V26.4547C26.1228 23.5732 23.7869 21.2373 20.9054 21.2373Z'
      stroke='black'
    />
    <ellipse cx={20.9055} cy={16.6721} rx={3.91307} ry={3.91304} stroke='black' strokeLinecap='square' />
  </svg>
);

const Memo = memo(ProfileIcon2);
export { Memo as ProfileIcon2 };
