import React from 'react'
import {ArtworkMesh} from './art-work-mesh'


interface Artwork {
    id: number
    url: string
    position: [number, number, number]
    rotation: [number, number, number]
  }
  
  interface Room {
    position: [number, number, number]
    color: string
    artworks: Artwork[]
  }
  
  interface SecondFloorRoomProps {
    room: Room
    roomWidth: number
    roomHeight: number
    roomDepth: number
    models?: React.ReactNode[]
  }
  
  export function SecondFloorRoom({ room, roomWidth, roomHeight, roomDepth, models }: SecondFloorRoomProps) {
    return (
      <group position={room.position}>
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -2.5]} receiveShadow>
          <boxGeometry args={[roomWidth , roomWidth - 5, 0.5]} />
          <meshStandardMaterial color="#444444" roughness={0.9} />
        </mesh>
  
        {/* Walls */}
        <group>
        {/* Back wall */}
        <mesh position={[0, 5 , -roomDepth/2]} receiveShadow>
          <boxGeometry args={[roomWidth, roomHeight, 0.2]} />
          <meshStandardMaterial 
            color={room.color} 
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>

        {/* Left wall */}
        <mesh position={[-roomWidth/2, 5 , 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[roomDepth, roomHeight, 0.2]} />
          <meshStandardMaterial 
            color={room.color} 
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>

        {/* Right wall */}
        <mesh position={[roomWidth/2, 3.3, 6.7]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[roomDepth/3, roomHeight*2/3, 0.2]} />
          <meshStandardMaterial 
            color={room.color} 
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[roomWidth/2, 3.3, -6.7]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[roomDepth/3, roomHeight*2/3, 0.2]} />
          <meshStandardMaterial 
            color={room.color} 
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[roomWidth/2, 8.3, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[roomDepth, roomHeight/3, 0.2]} />
          <meshStandardMaterial 
            color={room.color} 
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>

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