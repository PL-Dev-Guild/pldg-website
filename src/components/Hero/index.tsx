import { Background } from './Background';
import { Content } from './Content';
import { FloatingCube } from './FloatingCube';

export const Hero = () => (
  <div className="relative min-h-screen bg-black pt-20 overflow-hidden">
    <Background />
    <Content />
    <FloatingCube />
  </div>
);