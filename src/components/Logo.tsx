import { Cube } from './Cube';

export const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="w-8 h-8 text-electric">
      <Cube className="w-full h-full" />
    </div>
    <div className="flex flex-col">
      <span className="font-spaceGrotesk font-bold text-xl text-white">PLDG</span>
      <span className="text-xs text-steel/70">Protocol Labs Dev Guild</span>
    </div>
  </div>
);