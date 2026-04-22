"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

export default function Background3D() {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      
      <Sphere args={[1, 64, 64]} scale={2}>
        <meshStandardMaterial color="#1f4c6b" wireframe />
      </Sphere>

      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}