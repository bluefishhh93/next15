import React, { useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { Vec3 } from '@/types'

interface Artwork {
  id: number
  url: string
  position: Vec3
  rotation: Vec3
}

function FrameMesh({ width, height }: { width: number; height: number }) {
  // Load texture cho khung tranh
  const frameTexture = useTexture('/models/textures/floor.jpg') // Đường dẫn texture gỗ

  const frameThickness = 0.1 // Độ dày của khung

  return (
    <group>
      {/* Khung trên */}
      <mesh position={[0, height / 2 + frameThickness / 2, 0]}>
        <boxGeometry args={[width + frameThickness * 2, frameThickness, 0.1]} />
        <meshStandardMaterial map={frameTexture} />
      </mesh>
      {/* Khung dưới */}
      <mesh position={[0, -height / 2 - frameThickness / 2, 0]}>
        <boxGeometry args={[width + frameThickness * 2, frameThickness, 0.1]} />
        <meshStandardMaterial map={frameTexture} />
      </mesh>
      {/* Khung trái */}
      <mesh position={[-width / 2 - frameThickness / 2, 0, 0]}>
        <boxGeometry args={[frameThickness, height, 0.1]} />
        <meshStandardMaterial map={frameTexture} />
      </mesh>
      {/* Khung phải */}
      <mesh position={[width / 2 + frameThickness / 2, 0, 0]}>
        <boxGeometry args={[frameThickness, height, 0.1]} />
        <meshStandardMaterial map={frameTexture} />
      </mesh>
    </group>
  )
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
    <group position={artwork.position} rotation={artwork.rotation}>
      {/* Tranh */}
      <mesh>
        <planeGeometry args={[scaledWidth, scaledHeight]} />
        <meshStandardMaterial map={texture} roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Khung */}
      <FrameMesh width={scaledWidth} height={scaledHeight} />
    </group>
  )
}
