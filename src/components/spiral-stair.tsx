// src/components/spiral-stair.tsx
'use client'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { Mesh } from 'three'


export function SpiralStair({ position = [ 2  , 0, 2] }) {
  const { scene } = useGLTF('/models/spiral_stair/spiral_stair.gltf')

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
      scale={310}
    />
  )
}