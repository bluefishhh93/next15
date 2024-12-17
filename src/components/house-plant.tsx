import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'


export function HousePlant({
    position = [0, 0, 0],
    scale = 1,
    rotation = [0, 0, 0]
}) {
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