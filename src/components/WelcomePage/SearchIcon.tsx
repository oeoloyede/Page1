import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.2173 19.259C13.2173 15.9453 15.9036 13.259 19.2173 13.259C22.531 13.259 25.2173 15.9453 25.2173 19.259C25.2173 20.7359 24.6838 22.0881 23.7989 23.1335L23.5709 22.9055L22.8638 23.6126L23.0918 23.8406C22.0464 24.7255 20.6942 25.259 19.2173 25.259C15.9036 25.259 13.2173 22.5727 13.2173 19.259ZM23.801 24.5498C22.5729 25.6146 20.9704 26.259 19.2173 26.259C15.3513 26.259 12.2173 23.125 12.2173 19.259C12.2173 15.393 15.3513 12.259 19.2173 12.259C23.0833 12.259 26.2173 15.393 26.2173 19.259C26.2173 21.0121 25.5729 22.6146 24.5081 23.8427L28.5709 27.9055L27.8638 28.6126L23.801 24.5498Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
