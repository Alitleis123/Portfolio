"use client";

import { Canvas } from "@react-three/fiber";
import { Ring } from "@react-three/drei";
import { useEffect, useState } from "react";

function Halo() {
  return (
    <Ring
      args={[3.5, 4, 64]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <meshBasicMaterial
        color="#8faaff"
        transparent
        opacity={0.15}
      />
    </Ring>
  );
}

export default function CanvasBackground() {
  const [mounted, setMounted] = useState(false);

  // Prevent WebGL from mounting during SSR / fast refresh
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <Halo />
      </Canvas>
    </div>
  );
}