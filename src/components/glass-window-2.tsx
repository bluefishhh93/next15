import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import { Vec3 } from '@/types'

interface GlassWindowProps {
  position?: Vec3
  scale?: Vec3
  rotation?: Vec3
}

// GlassWindow2
export default function GlassWindow2({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0]
}: GlassWindowProps) {
  const { scene } = useGLTF('/models/glass_window_2/glass_window_2.glb')
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