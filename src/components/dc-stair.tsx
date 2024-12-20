// src/components/spiral-stair.tsx
'use client'
import { Vec3 } from '@/types'
import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { Mesh } from 'three'

interface DCStairProps {
    position?: Vec3
    scale?: Vec3
    rotation?: Vec3
}
  // SpiralStair
  export function DCStair({ 
    position ,
    scale,
    rotation
  } : DCStairProps) {
    const { scene } = useGLTF('/models/dc_stair/dc_stair.glb')
    const clonedScene = useMemo(() => scene.clone(), [scene])
  
    useEffect(() => {
      clonedScene.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }, [clonedScene])
  
    return (
      <primitive 
        object={clonedScene} 
        position={position}
        // scale={[2,3,3]}
        scale={scale}
        rotation={rotation}
      />
    )
  }