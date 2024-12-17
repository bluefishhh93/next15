// src/components/spiral-stair.tsx
'use client'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { Mesh } from 'three'

  // SpiralStair
  export function DCStair({ 
    position = [2, 0, 2],
    scale = 1,
    rotation = [0, 0, 0]
  }) {
    const { scene } = useGLTF('/models/dc_stair/dc_stair.glb')
  
    useEffect(() => {
      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }, [scene])
  
    return (
      <primitive 
        object={scene} 
        position={position}
        // scale={[2,3,3]}
        scale={scale}
        rotation={rotation}
      />
    )
  }