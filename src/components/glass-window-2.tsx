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
  position,
  scale,
  rotation
}: GlassWindowProps) {
  const { scene } = useGLTF('/models/glass_window_2/glass_window_2.glb')
  const clonedScene = useMemo(() => scene.clone(), [scene])

  // useEffect(() => {
  //   clonedScene.traverse((child) => {
  //     if (child instanceof Mesh) {
  //       child.castShadow = true
  //       // child.receiveShadow = true
  //     }
  //   })
  // }, [clonedScene])
  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  )
}