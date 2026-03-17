import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingNetwork() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions } = useMemo(() => {
    const positionsArray = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      const i3 = i * 3;
      positionsArray[i3] = (Math.random() - 0.5) * 6;
      positionsArray[i3 + 1] = (Math.random() - 0.5) * 4;
      positionsArray[i3 + 2] = (Math.random() - 0.5) * 4;
    }
    return { positions: positionsArray };
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.06 + mouse.x * 0.2;
    pointsRef.current.rotation.x = t * 0.02 + mouse.y * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={"#00f0ff"}
        opacity={0.9}
        transparent
        sizeAttenuation
      />
    </points>
  );
}

export default function AboutNetwork() {
  return (
    <div className="h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden glass-panel relative">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#05080a"]} />
        <ambientLight intensity={0.5} />
        <FloatingNetwork />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accentPurple/20" />
    </div>
  );
}

