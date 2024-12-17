// src/components/spiral-stair.tsx
'use client'
import { Vec3 } from '@/types'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { Mesh } from 'three'

interface RailingProps {
    position?: Vec3
    scale?: Vec3
    rotation?: Vec3
}
  // SpiralStair
  export function Railing({ 
    position = [1.5, 0, 5],
    scale = 0.7,
    rotation = [0, 0, 0]
  } : RailingProps) {
    const { scene } = useGLTF('/models/railing/railing.glb')
  
    return (
      <primitive 
        object={scene.clone()} 
        position={position}
        // scale={[2,3,3]}
        scale={scale}
        rotation={rotation}
      />
    )
  }