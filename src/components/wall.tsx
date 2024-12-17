import React from 'react';
import { Texture } from 'three';

interface WallProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  dimensions: {
    width: number;
    height: number;
    depth?: number; // Defaults to thin walls
  };
  material: {
    color: string;
    texture?: Texture;
    roughness?: number;
    metalness?: number;
    opacity?: number;
    transparent?: boolean;
  };
  options?: {
    castShadow?: boolean;
    receiveShadow?: boolean;
  };
}

export function Wall({
  position,
  rotation = [0, 0, 0],
  dimensions: { width, height, depth = 0.2 },
  material: { color, texture, roughness = 1, metalness = 0.1, opacity = 1, transparent = true },
  options: { castShadow = true, receiveShadow = true } = {},
}: WallProps) {
  return (
    <mesh position={position} rotation={rotation} castShadow={castShadow} receiveShadow={receiveShadow}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color={color}
        map={texture}
        flatShading={true}
        roughness={roughness}
        metalness={metalness}
        opacity={opacity}
        transparent={transparent}
      />
    </mesh>
  );
}
