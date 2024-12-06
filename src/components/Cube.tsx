import { SVGProps } from 'react';

export const Cube = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="cube-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
      </linearGradient>
    </defs>

    {/* Main cube shape */}
    <path
      d="M16 4L28 11V21L16 28L4 21V11L16 4Z"
      fill="currentColor"
      fillOpacity="0.2"
    />

    {/* Top face */}
    <path
      d="M16 4L28 11L16 18L4 11L16 4Z"
      fill="url(#cube-gradient)"
      fillOpacity="0.3"
    />

    {/* Edges */}
    <path
      d="M16 4L28 11V21L16 28L4 21V11L16 4Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />

    {/* Inner lines */}
    <path
      d="M16 18V28M4 11L16 18L28 11"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.6"
    />
  </svg>
); 