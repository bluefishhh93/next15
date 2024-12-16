'use client'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
interface GlassWindowProps {
    position: [number, number, number]
}

export default function GlassWindow({ position = [0, 0, 0] }: GlassWindowProps) {
    const { scene } = useGLTF('/models/glass_window/glass_window.gltf')
    const clonedScene = useMemo(() => scene.clone(), [scene])

    return (
        <primitive
            object={clonedScene}
            position={position}
            scale={[5,4.9,3.4]}
            rotation={[0,Math.PI / 2, 0]}
        />
    )
}