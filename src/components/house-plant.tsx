import { Vec3 } from '@/types'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'


interface HousePlantProps {
    position?: Vec3
    scale?: Vec3
    rotation?: Vec3
}
export function HousePlant({
    position,
    scale,
    rotation
} : HousePlantProps) {
    const { scene } = useGLTF('/models/house_plant/house_plant.glb')
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