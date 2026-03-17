import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function NetworkSphere() {
  const groupRef = useRef<THREE.Group>(null);

  const sphere = new THREE.SphereGeometry(2.2, 32, 32);
  const positions: number[] = [];
  const colors: number[] = [];

  const colorInner = new THREE.Color("#00f0ff");
  const colorOuter = new THREE.Color("#a020f0");

  for (let i = 0; i < sphere.attributes.position.count; i += 3) {
    const x = sphere.attributes.position.getX(i);
    const y = sphere.attributes.position.getY(i);
    const z = sphere.attributes.position.getZ(i);

    positions.push(x, y, z);

    const t = (y + 2.2) / 4.4;
    const color = colorInner.clone().lerp(colorOuter, t);
    colors.push(color.r, color.g, color.b);
  }

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  lineGeometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3)
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
  });

  return (
    <group ref={groupRef}>
      <points geometry={lineGeometry}>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        className="opacity-70"
      >
        <color attach="background" args={["#050809"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color={"#00f0ff"} />
        <NetworkSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bgDark/60 via-transparent to-bgDark" />
    </div>
  );
}

