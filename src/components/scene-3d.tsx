'use client'
import React, { Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import {OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { Loader } from './loader';

function Box() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

const Scene3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Suspense fallback={<Loader/>}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <OrbitControls />
      <gridHelper args={[10, 10]} />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;