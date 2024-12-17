import React from 'react'
import { ArtworkMesh } from './art-work-mesh'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { DoorWall } from './door-wall'
import { Wall } from './wall'
import { Vec3 } from '@/types'


interface Artwork {
  id: number
  url: string
  position: Vec3
  rotation: Vec3
}

interface Room {
  position: Vec3
  color: string
  artworks: Artwork[]
  floor: {
    texture?: string
    color?: string
    position?: Vec3,
    roughness?: number
    args?: {
      width: number
      height: number
      depth: number
    }
  }
}

interface ArtRoomProps {
  room: Room
  roomWidth: number
  roomHeight: number
  roomDepth: number
  models?: React.ReactNode[]

}

export function ArtRoom({ room, roomWidth, roomHeight, roomDepth, models }: ArtRoomProps) {
  const woodFloorTexture = useLoader(TextureLoader, 'models/textures/wooden-parquet-floor.jpg');
  const wallTexture = useLoader(TextureLoader, 'models/textures/white-wall.jpg');
  return (
    <group position={room.position}>
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={room.floor.position || [0, -0.5, 0]}
        receiveShadow
      >
        <boxGeometry args={room.floor.args ?
          [room.floor.args.height,
          room.floor.args.width,
          room.floor.args.depth]
          : [roomWidth, roomWidth]} />
        <meshStandardMaterial
          map={woodFloorTexture}
          color={room.floor.color || room.color}
          roughness={room.floor.roughness ?? 0.8}
        />
      </mesh>

      {/* Walls */}
      <group>
        {/* Back wall */}
        <Wall
          position={[0, 5, -roomDepth / 2]}
          dimensions={{ width: roomWidth, height: roomHeight, depth: 0.2 }}
          material={{ color: room.color, texture: wallTexture, roughness: 1, metalness: 0.1 }}

        />

        {/* Left wall */}
        <Wall
          position={[-roomWidth / 2, 5, 0]}
          rotation={[0, Math.PI / 2, 0]}
          dimensions={{ width: roomDepth, height: roomHeight, depth: 0.2 }}
          material={{ color: room.color, texture: wallTexture, roughness: 1, metalness: 0.1 }}
        />
        {/* Right wall */}
        <DoorWall
          roomWidth={roomWidth}
          roomHeight={roomHeight}
          roomDepth={roomDepth}
          color={room.color} />


      </group>

      {/* Artworks */}
      {room.artworks.map((artwork) => (
        <ArtworkMesh key={artwork.id} artwork={artwork} />
      ))}

      {/* Models */}
      {models && models.map((model, index) => (
        <React.Fragment key={index}>
          {model}
        </React.Fragment>
      ))}
    </group>
  )
}