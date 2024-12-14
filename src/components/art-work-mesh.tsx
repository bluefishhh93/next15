import React from 'react'
import { useTexture } from '@react-three/drei'

interface Artwork {
  id: number
  url: string
  position: [number, number, number]
  rotation: [number, number, number]
}

export function ArtworkMesh({ artwork }: { artwork: Artwork }) {
  const texture = useTexture(artwork.url)

  return (
    <mesh position={artwork.position} rotation={artwork.rotation}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}