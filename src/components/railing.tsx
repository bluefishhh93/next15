// src/components/spiral-stair.tsx
'use client'
import { Vec3 } from '@/types'
import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
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
}: RailingProps) {
  const { scene } = useGLTF('/models/railing/railing.glb')
  const clonedScene = useMemo(() => scene.clone(), [scene])


  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true
        // child.receiveShadow = true 
      }
    })
  }, [clonedScene])
  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  )
}