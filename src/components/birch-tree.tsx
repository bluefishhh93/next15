import { Vec3 } from '@/types'
import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { Mesh } from 'three'

interface BirchTreeProps {
    position?: Vec3
    scale?: Vec3
    rotation?: Vec3
}

export function BirchTree({
  position,
  scale,
  rotation
}: BirchTreeProps) {
  const { scene } = useGLTF('/models/birch_tree/birch_tree.glb')
  const clonedScene = useMemo(() => scene.clone(), [scene])
  
  useEffect(() => {
      // Apply shadows to the clonedScene instead of the original scene
      clonedScene.traverse((child) => {
          if (child instanceof Mesh) {
              child.castShadow = true
              // child.receiveShadow = true
          }
      })
  }, [clonedScene]) // dependency changed to clonedScene

  return (
      <primitive
          object={clonedScene}
          position={position}
          scale={scale}
          rotation={rotation}
      />
  )
}