import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Mouse state ─── */
const mouse = { x: 0, y: 0 };

/* ─── Holographic wireframe core ─── */
const HoloCore = () => {
  const groupRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12 + mouse.x * 0.8;
      groupRef.current.rotation.x = mouse.y * 0.4;
    }
    if (wireRef.current) wireRef.current.rotation.z = t * 0.05;
    if (innerRef.current && !Array.isArray(innerRef.current.material)) {
      (innerRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.05 + Math.sin(t * 2) * 0.025;
    }
  });

  return (
    <group ref={groupRef}>
      {/* ─── Holographic Death Star / Planet Wireframe ─── */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshBasicMaterial color="#4fc3f7" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.75, 2]} />
        <meshBasicMaterial color="#0288d1" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
      <pointLight color="#4fc3f7" intensity={2} distance={12} />

      {/* Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.4, 0.007, 16, 128]} />
        <meshBasicMaterial color="#4fc3f7" transparent opacity={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.005, 16, 128]} />
        <meshBasicMaterial color="#29b6f6" transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[Math.PI / 5, -Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[3.2, 0.004, 16, 128]} />
        <meshBasicMaterial color="#0288d1" transparent opacity={0.08} />
      </mesh>

      <OrbitNodes />
    </group>
  );
};

/* ─── Orbiting data nodes ─── */
const OrbitNodes = () => {
  const ref = useRef<THREE.Group>(null);
  const nodes = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      angle: (i / 14) * Math.PI * 2,
      r: 2.2 + (i % 3) * 0.6,
      speed: 0.15 + (i % 5) * 0.06,
      yOff: (Math.random() - 0.5) * 2.5,
      size: 0.02 + Math.random() * 0.02,
    })), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.children.forEach((c, i) => {
      const n = nodes[i];
      const a = t * n.speed + n.angle;
      c.position.set(Math.cos(a) * n.r, n.yOff + Math.sin(a * 1.5) * 0.5, Math.sin(a) * n.r);
    });
  });

  return (
    <group ref={ref}>
      {nodes.map((n, i) => (
        <mesh key={i}>
          <sphereGeometry args={[n.size, 6, 6]} />
          <meshBasicMaterial color="#4fc3f7" />
        </mesh>
      ))}
    </group>
  );
};

/* ─── Interactive camera ─── */
const Cam = () => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1.2, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.3 + mouse.y * 0.6, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
};

/* ─── Main Export ─── */
export const Hero3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-visible" style={{ zIndex: 0 }}>
      {/* ═══ 3D HOLOGRAM (transparent background) ═══ */}
      <Canvas
        camera={{ position: [0, 0.3, 5.5], fov: 55 }}
        dpr={[1, isMobile ? 1 : 1.5]}
        gl={{ antialias: !isMobile, alpha: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.05} />
        <HoloCore />
        <Cam />
      </Canvas>
    </div>
  );
};
