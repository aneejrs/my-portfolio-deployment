"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";

import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.x =
      state.clock.elapsedTime * 0.15;

    mesh.current.rotation.y =
      state.clock.elapsedTime * 0.25;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.45, 2]} />

      <meshStandardMaterial
        color="#7c3aed"
        emissive="#4c1d95"
        emissiveIntensity={1.2}
        metalness={0.85}
        roughness={0.25}
        wireframe
      />
    </mesh>
  );
}

function InnerCore() {
  return (
    <mesh>
      <sphereGeometry args={[0.82, 32, 32]} />

      <meshStandardMaterial
        color="#06b6d4"
        emissive="#0891b2"
        emissiveIntensity={1.4}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}

function Ring({
  rotation,
}: {
  rotation: [number, number, number];
}) {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;

    ring.current.rotation.z =
      state.clock.elapsedTime * 0.2;

    ring.current.rotation.y =
      state.clock.elapsedTime * 0.12;
  });

  return (
    <mesh ref={ring} rotation={rotation}>
      <torusGeometry args={[1.9, 0.018, 16, 100]} />

      <meshStandardMaterial
        color="#22d3ee"
        emissive="#0891b2"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

function SceneObjects() {
  return (
    <>
      <ambientLight intensity={0.6} />

      <pointLight
        position={[3, 3, 4]}
        intensity={25}
        color="#8b5cf6"
      />

      <pointLight
        position={[-3, -2, 3]}
        intensity={18}
        color="#06b6d4"
      />

      <Float
        speed={1}
        rotationIntensity={0.25}
        floatIntensity={0.4}
      >
        <Core />
        <InnerCore />
      </Float>

      <Ring rotation={[Math.PI / 2, 0, 0]} />

      <Ring rotation={[0, Math.PI / 2, 0]} />

      <Sparkles
        count={70}
        scale={6}
        size={1.2}
        speed={0.25}
        color="#a78bfa"
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-container">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 1.5]}
      >
        <SceneObjects />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
        />
      </Canvas>
    </div>
  );
}