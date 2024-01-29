import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 279 57' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.198797 54.4316L256.419 56.433C261.454 56.4724 265.862 53.0606 267.087 48.1763L275.165 15.9578C276.884 9.10381 271.734 2.44904 264.668 2.39385L22.3193 0.500731C17.284 0.461397 12.8757 3.87318 11.651 8.75751L0.198797 54.4316Z'
      fill='#D9D9D9'
    />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
