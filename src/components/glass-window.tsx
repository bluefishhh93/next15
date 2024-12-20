import { Vec3 } from '@/types'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
// import { Mesh } from 'three'

interface GlassWindowProps {
  position?: Vec3
  scale?: Vec3
  rotation?: Vec3
}
// GlassWindow
export default function GlassWindow({
  position,
  scale,
  rotation
}: GlassWindowProps) {
  const { scene } = useGLTF('/models/glass_window/glass_window.glb')
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
