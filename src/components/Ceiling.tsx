import React from 'react';

interface CeilingProps {
  width: number;
  height: number;
  depth: number;
  color: string;
}

const Ceiling: React.FC<CeilingProps> = ({ width, height, depth, color }) => {
  return (
    <mesh position={[0, height / 2, 0]} castShadow={true} receiveShadow={true}>
      <boxGeometry args={[width, 1, depth]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Ceiling;