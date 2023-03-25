import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.2058 22.2443L14.2769 21.1732V26.8154V26.8154V27.8154H26.2769V26.8154V26.8154V21.1732L27.3479 22.2443L28.055 21.5372L20.984 14.4661L20.2769 13.759L19.5698 14.4661L12.4987 21.5372L13.2058 22.2443ZM15.2769 26.8154V20.1732L20.2769 15.1732L25.2769 20.1732V26.8154H22.2769V22.8154V21.8154H18.2769V22.8154V26.8154H15.2769ZM19.2769 22.8154V26.8154H21.2769V22.8154H19.2769Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
