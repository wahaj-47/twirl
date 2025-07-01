import { FlyControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Viewport() {
  return (
    <Canvas shadows>
      <FlyControls></FlyControls>
    </Canvas>
  );
}
