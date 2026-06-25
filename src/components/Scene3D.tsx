import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Sphere, TorusKnot, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function FloatingKnot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[1, 0.32, 220, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#a855f7"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.6}
        />
      </TorusKnot>
    </Float>
  );
}

function OrbitingShape({ radius, speed, phase, color, shape }: { radius: number; speed: number; phase: number; color: string; shape: "sphere" | "ico" }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + phase;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.3) * 0.6;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.012;
  });
  const Shape: any = shape === "sphere" ? Sphere : Icosahedron;
  return (
    <Shape ref={ref} args={shape === "sphere" ? [0.18, 32, 32] : [0.22, 0]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} metalness={0.7} />
    </Shape>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -3, -5]} intensity={1} color="#a855f7" />
        <directionalLight position={[0, 5, 5]} intensity={0.6} />
        <Stars radius={50} depth={50} count={2500} factor={3} saturation={0} fade speed={1} />
        <FloatingKnot />
        <OrbitingShape radius={2.4} speed={0.6} phase={0} color="#22d3ee" shape="sphere" />
        <OrbitingShape radius={2.4} speed={0.6} phase={2.1} color="#a855f7" shape="ico" />
        <OrbitingShape radius={2.4} speed={0.6} phase={4.2} color="#f0abfc" shape="sphere" />
      </Suspense>
    </Canvas>
  );
}