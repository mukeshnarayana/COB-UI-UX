import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 41 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.905518 14.1429H40.9611V18.8571H0.905518V14.1429ZM0.905518 0H40.9611V4.71429H0.905518V0ZM0.905518 28.2857H40.9611V33H0.905518V28.2857Z'
      fill='#607D8B'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
