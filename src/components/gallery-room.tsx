import React, { useMemo } from 'react'
import { ArtRoom } from './art-room'
import { SpiralStair } from './spiral-stair'
import { SecondFloorRoom } from './second-floor-room'
import GlassWindow from './glass-window'

export function GalleryRoom() {
  // Room dimensions
  const roomWidth = 20
  const roomHeight = 10
  const roomDepth = 20

  // Create multiple rooms
  const rooms = useMemo(() => [
    {
      position: [0, 0, 0] as [number, number, number],
      color: "#f0f0f0",
      artworks: [
        {
          id: 1,
          url: '/art/artwork1.jpg',
          position: [-5, 3, -9.8] as [number, number, number],
          rotation: [0, 0, 0] as [number, number, number],
        },
        {
          id: 2,
          url: '/art/artwork2.jpg',
          position: [0, 3, -9.8] as [number, number, number],
          rotation: [0, 0, 0] as [number, number, number],
        },
      ]
    },
    {
      position: [0, roomHeight, 0] as [number, number, number],
      color: "#f0f0f0",
      artworks: [
        {
          id: 3,
          url: '/art/artwork3.jpg',
          position: [-5, 3, -9.8] as [number, number, number],
          rotation: [0, 0, 0] as [number, number, number],
        },
        {
          id: 4,
          url: '/art/artwork4.jpg',
          position: [5, 3, -9.8] as [number, number, number],
          rotation: [0, 0, 0] as [number, number, number],
        },
      ]
    },
  ], [])

  return (
    <group>

        <ArtRoom
          key={0}
          room={rooms[0]}
          roomWidth={roomWidth}
          roomHeight={roomHeight}
          roomDepth={roomDepth}
          models={[
            <SpiralStair key="stair" position={[roomWidth / 4, 0, roomDepth / 4]} />,
            // Add more models here
            <GlassWindow key="window_1" position={[0.3, 0, -15]} />,
            <GlassWindow key="window_2" position={[10, 0, -15  ]} />
          ]}
        />
        <SecondFloorRoom 
          key={1}
          room={rooms[1]}
          roomWidth={roomWidth}
          roomHeight={roomHeight}
          roomDepth={roomDepth}
          />
     
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 8, 0]} intensity={1} castShadow />
      <pointLight position={[0, 8, -10]} intensity={0.5} />
    </group>
  )
}