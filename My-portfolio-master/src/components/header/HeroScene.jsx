import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Icosahedron, TorusKnot, Stars } from "@react-three/drei";

const RotatingGroup = () => {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.08;
    group.current.rotation.x = Math.sin(t * 0.15) * 0.1;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.6}>
        <Sphere args={[1.15, 64, 64]} position={[2.4, 0.6, -1]}>
          <MeshDistortMaterial
            color="#4db5ff"
            attach="material"
            distort={0.42}
            speed={2}
            roughness={0.15}
            metalness={0.4}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={1.6} floatIntensity={2.2}>
        <Icosahedron args={[0.7, 0]} position={[-2.6, -0.8, -0.5]}>
          <meshStandardMaterial color="#8a7dff" roughness={0.25} metalness={0.6} wireframe />
        </Icosahedron>
      </Float>

      <Float speed={1.1} rotationIntensity={0.9} floatIntensity={1.3}>
        <TorusKnot args={[0.55, 0.18, 128, 32]} position={[-1.2, 1.6, -1.8]}>
          <meshStandardMaterial color="#00d9d9" roughness={0.2} metalness={0.5} />
        </TorusKnot>
      </Float>

      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.8}>
        <Icosahedron args={[0.32, 1]} position={[1.4, -1.6, 0.4]}>
          <meshStandardMaterial color="#4db5ff" roughness={0.3} metalness={0.7} />
        </Icosahedron>
      </Float>
    </group>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      className="hero__canvas"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#4db5ff" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#00d9d9" />
        <Stars radius={40} depth={30} count={1200} factor={2} saturation={0} fade speed={0.6} />
        <RotatingGroup />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
