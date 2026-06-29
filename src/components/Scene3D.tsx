/**
 * Scene3D — Hyper Torus Knot
 *
 * Features:
 *  - Three layered torus knots at different scales/speeds/colors
 *  - Iridescent custom ShaderMaterial — color shifts with view angle (Fresnel)
 *  - Orbiting micro-spheres with emissive glow trails
 *  - Particle ring halo around the knot
 *  - Stars field in dark mode
 *  - Smooth 120fps — minimal draw calls, InstancedMesh for particles
 */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

// ─── Iridescent shader (Fresnel color shift) ──────────────────────────────────
const iridescentVert = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vViewDir = normalize(cameraPosition - worldPos.xyz);
    vNormal  = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const iridescentFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3  uColor1;
  uniform vec3  uColor2;
  uniform vec3  uColor3;
  uniform float uEmissive;
  varying vec3  vNormal;
  varying vec3  vViewDir;
  varying vec2  vUv;

  void main() {
    float fresnel = pow(1.0 - clamp(dot(vNormal, vViewDir), 0.0, 1.0), 2.5);
    float t = uTime * 0.4 + vUv.x * 3.14159;
    float wave = sin(t) * 0.5 + 0.5;

    vec3 base   = mix(uColor1, uColor2, wave);
    vec3 accent = mix(base, uColor3, fresnel);
    vec3 glow   = accent * (0.6 + uEmissive * fresnel);

    gl_FragColor = vec4(glow, 0.92);
  }
`;

// ─── Main knot — iridescent + distort ────────────────────────────────────────
function PrimaryKnot({
  c1, c2, c3,
}: {
  c1: THREE.Color; c2: THREE.Color; c3: THREE.Color;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef  = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime:     { value: 0 },
    uColor1:   { value: c1 },
    uColor2:   { value: c2 },
    uColor3:   { value: c3 },
    uEmissive: { value: 2.8 },
  }), []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync colors when theme changes
  useMemo(() => {
    uniforms.uColor1.value = c1;
    uniforms.uColor2.value = c2;
    uniforms.uColor3.value = c3;
  }, [c1, c2, c3, uniforms]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (matRef.current)  matRef.current.uniforms.uTime.value = t;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.18;
      meshRef.current.rotation.y = t * 0.13;
      meshRef.current.rotation.z = t * 0.07;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.15, 0.38, 240, 36]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={iridescentVert}
        fragmentShader={iridescentFrag}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ─── Ghost wire knot (slightly larger, counter-rotating) ──────────────────────
function WireKnot({ c1, c2 }: { c1: THREE.Color; c2: THREE.Color }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!ref.current) return;
    ref.current.rotation.x = -t * 0.10;
    ref.current.rotation.y =  t * 0.08;
    ref.current.rotation.z = -t * 0.05;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.45, 0.04, 180, 16]} />
      <MeshDistortMaterial
        color={c1}
        emissive={c2}
        emissiveIntensity={0.7}
        wireframe
        distort={0.12}
        speed={1.2}
        transparent
        opacity={0.35}
        toneMapped={false}
      />
    </mesh>
  );
}

// ─── Inner micro knot (fast spin, accent color) ───────────────────────────────
function InnerKnot({ c2, c3 }: { c2: THREE.Color; c3: THREE.Color }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!ref.current) return;
    ref.current.rotation.x = t * 0.28;
    ref.current.rotation.y = t * 0.22;
  });
  return (
    <mesh ref={ref} scale={0.45}>
      <torusKnotGeometry args={[1, 0.32, 120, 16, 3, 5]} />
      <MeshDistortMaterial
        color={c2}
        emissive={c3}
        emissiveIntensity={1.4}
        roughness={0.05}
        metalness={0.95}
        distort={0.4}
        speed={2.5}
        toneMapped={false}
      />
    </mesh>
  );
}

// ─── Orbiting glow spheres ─────────────────────────────────────────────────────
const ORBIT_COUNT = 8;
const ORBIT_SPHERE_GEO = new THREE.SphereGeometry(0.06, 8, 8);

function OrbitingSpheres({ c1, c2, c3 }: { c1: THREE.Color; c2: THREE.Color; c3: THREE.Color }) {
  const iMesh = useRef<THREE.InstancedMesh>(null);
  const _m4   = useMemo(() => new THREE.Matrix4(), []);
  const _pos  = useMemo(() => new THREE.Vector3(), []);
  const _scl  = useMemo(() => new THREE.Vector3(), []);
  const _q    = useMemo(() => new THREE.Quaternion(), []);
  const palette = useMemo(() => [c1, c2, c3], [c1, c2, c3]);

  const params = useMemo(() => Array.from({ length: ORBIT_COUNT }, (_, i) => ({
    radius: 2.0 + (i % 3) * 0.35,
    speed:  0.4 + i * 0.09,
    phase:  (i / ORBIT_COUNT) * Math.PI * 2,
    tilt:   (i / ORBIT_COUNT) * Math.PI,
    ci:     i % 3,
  })), []);

  const colorsSet = useRef(false);

  useFrame((state) => {
    const mesh = iMesh.current; if (!mesh) return;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < ORBIT_COUNT; i++) {
      const p = params[i];
      const angle = t * p.speed + p.phase;
      _pos.set(
        Math.cos(angle) * p.radius,
        Math.sin(angle * 1.3) * 0.7,
        Math.sin(angle) * p.radius,
      );
      // tilt the orbit plane
      _pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), p.tilt * 0.5);
      const pulse = 0.8 + Math.sin(t * 2 + p.phase) * 0.2;
      _scl.setScalar(pulse);
      _m4.compose(_pos, _q, _scl);
      mesh.setMatrixAt(i, _m4);
      if (!colorsSet.current) mesh.setColorAt(i, palette[p.ci]);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (!colorsSet.current && mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
      colorsSet.current = true;
    }
  });

  return (
    <instancedMesh ref={iMesh} args={[ORBIT_SPHERE_GEO, undefined, ORBIT_COUNT]} frustumCulled={false}>
      <meshStandardMaterial
        vertexColors
        emissive={new THREE.Color(1, 1, 1)}
        emissiveIntensity={3}
        roughness={0.05}
        metalness={0.5}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

// ─── Particle halo ring ───────────────────────────────────────────────────────
const HALO_COUNT = 120;
const HALO_GEO   = new THREE.SphereGeometry(0.018, 4, 4);

function ParticleHalo({ c1, c2 }: { c1: THREE.Color; c2: THREE.Color }) {
  const iMesh = useRef<THREE.InstancedMesh>(null);
  const _m4   = useMemo(() => new THREE.Matrix4(), []);
  const _pos  = useMemo(() => new THREE.Vector3(), []);
  const _scl  = useMemo(() => new THREE.Vector3(), []);
  const _q    = useMemo(() => new THREE.Quaternion(), []);

  const particles = useMemo(() => Array.from({ length: HALO_COUNT }, (_, i) => ({
    angle:  (i / HALO_COUNT) * Math.PI * 2,
    radius: 2.4 + (Math.sin(i * 1.7) * 0.3),
    yOff:   Math.sin(i * 0.9) * 0.6,
    speed:  0.15 + (i % 5) * 0.02,
    phase:  (i / HALO_COUNT) * Math.PI * 6,
    ci:     i % 2,
  })), []);

  const colorsSet = useRef(false);

  useFrame((state) => {
    const mesh = iMesh.current; if (!mesh) return;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < HALO_COUNT; i++) {
      const p = particles[i];
      const angle = p.angle + t * p.speed;
      _pos.set(
        Math.cos(angle) * p.radius,
        p.yOff + Math.sin(t * 0.5 + p.phase) * 0.2,
        Math.sin(angle) * p.radius,
      );
      const s = 0.5 + Math.abs(Math.sin(t * 1.2 + p.phase)) * 0.5;
      _scl.setScalar(s);
      _m4.compose(_pos, _q, _scl);
      mesh.setMatrixAt(i, _m4);
      if (!colorsSet.current) mesh.setColorAt(i, p.ci === 0 ? c1 : c2);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (!colorsSet.current && mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
      colorsSet.current = true;
    }
  });

  return (
    <instancedMesh ref={iMesh} args={[HALO_GEO, undefined, HALO_COUNT]} frustumCulled={false}>
      <meshStandardMaterial
        vertexColors
        emissive={new THREE.Color(1, 1, 1)}
        emissiveIntensity={2.5}
        toneMapped={false}
        transparent
        opacity={0.75}
      />
    </instancedMesh>
  );
}

// ─── Responsive wrapper for mobile ────────────────────────────────────────────
function ResponsiveGroup({ children }: { children: React.ReactNode }) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;
  // Scale down the scene if the viewport is narrower than 6 units to prevent cropping.
  const scale = Math.min(1, viewport.width / 6);
  // Shift up slightly on mobile so it doesn't touch the bottom paragraph
  const yShift = isMobile ? 0.6 : 0;
  
  return <group scale={scale} position={[0, yShift, 0]}>{children}</group>;
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function Scene3D() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const c1 = useMemo(() => new THREE.Color(isDark ? "#22d3ee" : "#3b5bdb"), [isDark]);
  const c2 = useMemo(() => new THREE.Color(isDark ? "#a855f7" : "#7c3aed"), [isDark]);
  const c3 = useMemo(() => new THREE.Color(isDark ? "#f0abfc" : "#ec4899"), [isDark]);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 52 }}
      dpr={[1, 2]}
      frameloop="always"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        precision: "highp",
      }}
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={isDark ? 0.1 : 0.35} />
        <pointLight position={[3, 5, 5]}   intensity={isDark ? 2.0 : 1.2} color={c1} />
        <pointLight position={[-4, -3, -4]} intensity={isDark ? 1.8 : 1.0} color={c2} />
        <pointLight position={[0, 4, -3]}   intensity={1.0}                color={c3} />
        <pointLight position={[0, -5, 3]}   intensity={0.6}                color={c1} />

        {isDark && (
          <Stars radius={80} depth={60} count={2500} factor={2.5} saturation={0} fade speed={0.6} />
        )}

        {/* Three-layer torus knot system and particles scaled for mobile */}
        <ResponsiveGroup>
          <WireKnot   c1={c1} c2={c2} />
          <PrimaryKnot c1={c1} c2={c2} c3={c3} />
          <InnerKnot  c2={c2} c3={c3} />

          {/* Orbiting elements */}
          <OrbitingSpheres c1={c1} c2={c2} c3={c3} />
          <ParticleHalo    c1={c1} c2={c2} />
        </ResponsiveGroup>
      </Suspense>
    </Canvas>
  );
}