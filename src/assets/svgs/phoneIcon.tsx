import React, { FC } from 'react';

const PhoneIcon: FC<{
  fill?: string;
  height?: number | string;
  width?: number | string;
}> = ({ fill = '#404040', height = 13, width = 13 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 13 13'
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M2.25.034c-.315.069-.376.116-1.2.938-.718.716-.774.778-.858.957-.139.294-.174.453-.189.869-.015.42.02.697.147 1.18.765 2.907 4.198 6.73 7.483 8.336.975.476 1.71.684 2.436.686.444.001.668-.043.976-.195.198-.097.25-.143.966-.856.8-.798.849-.858.95-1.196a1.52 1.52 0 000-.69c-.092-.307-.13-.351-1.142-1.367-.535-.537-1.041-1.024-1.125-1.084-.506-.359-1.156-.31-1.58.121-.127.13-.177.207-.265.411a2.38 2.38 0 01-.178.345c-.243.33-.714.539-1.114.496-.597-.063-1.487-.6-2.241-1.353-.913-.91-1.452-1.959-1.32-2.57a1.27 1.27 0 01.498-.74c.058-.038.18-.101.27-.14.266-.113.33-.15.454-.257.424-.37.517-1.06.208-1.551C5.335 2.229 3.576.456 3.362.292a1.47 1.47 0 00-.597-.268 1.159 1.159 0 00-.515.01z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default PhoneIcon;