interface CubeProps {
  className?: string;
}

export const Cube = ({ className = '' }: CubeProps) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" fill="none" strokeWidth="1">
      <path d="M20,70 L50,85 L80,70 L50,55 Z" />
      <path d="M20,70 L20,30 L50,15 L50,55 Z" />
      <path d="M50,55 L50,15 L80,30 L80,70 Z" />
      <path d="M35,62.5 L65,77.5" strokeDasharray="2,2" />
      <path d="M35,22.5 L35,62.5" strokeDasharray="2,2" />
      <path d="M65,37.5 L65,77.5" strokeDasharray="2,2" />
    </g>
  </svg>
);