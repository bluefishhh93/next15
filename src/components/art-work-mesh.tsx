import React, { useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { Vec3 } from '@/types'

interface Artwork {
  id: number
  url: string
  position: Vec3
  rotation: Vec3
}

export function ArtworkMesh({ artwork }: { artwork: Artwork }) {
  // Load texture
  const texture = useTexture(artwork.url)

  // Tính toán tỉ lệ ảnh
  const { scaledWidth, scaledHeight } = useMemo(() => {
    const img = texture.image
    const aspectRatio = img.width / img.height
    const baseHeight = 2 // Chiều cao cơ bản
    const scaledWidth = baseHeight * aspectRatio
    const scaledHeight = baseHeight

    return { scaledWidth, scaledHeight }
  }, [texture])

  return (
    <mesh 
      position={artwork.position} 
      rotation={artwork.rotation}
    >
      <planeGeometry args={[scaledWidth, scaledHeight]} />
      <meshStandardMaterial 
        map={texture} 
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  )
}