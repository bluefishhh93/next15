import { Vec3 } from '@/types'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

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
  
    return (
      <primitive
        object={clonedScene}
        position={position}
        scale={scale}
        rotation={rotation}
      />
    )
}