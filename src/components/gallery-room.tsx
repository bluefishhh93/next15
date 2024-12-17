import React, { useMemo } from 'react'
import { ArtRoom } from './art-room'
// import { SpiralStair } from './spiral-stair'
import { HousePlant } from './house-plant'
import GlassWindow from './glass-window'
import GLASS_WINDOWS_2 from './glass-window-2'
import { GALLERY_CONFIG } from '@/utils/gallery-config'
import { calculateArtworkPositions } from '@/utils/room-helper'
import { Vec3 } from '@/types'
import { DCStair } from './dc-stair'
export function GalleryRoom() {
  // Room dimensions
  const { WIDTH: roomWidth, HEIGHT: roomHeight, DEPTH: roomDepth } = GALLERY_CONFIG.ROOM
  const artworkPositions = calculateArtworkPositions(roomWidth, 2)


  // Create multiple rooms
  const rooms = useMemo(() => [
    {
      position: [0, 0, 0] as Vec3,
      color: "#f0f0f0",
      artworks: [
        {
          id: 1,
          url: '/art/artwork1.jpg',
          position: artworkPositions[0],
          rotation: [0, 0, 0] as Vec3,
        },
        {
          id: 2,
          url: '/art/artwork2.jpg',
          position: artworkPositions[1],
          rotation: [0, 0, 0] as Vec3,
        }
      ],
      floor: {
        texture: '/textures/wooden-parquet-floor.jpg',
        color: "#f0f0f0",
      }
    },
    {
      position: [0, roomHeight, 0] as Vec3,
      color: "#f0f0f0",
      artworks: [
        {
          id: 3,
          url: '/art/artwork3.jpg',
          position: artworkPositions[0] as Vec3,
          rotation: [0, 0, 0] as Vec3,
        },
        {
          id: 4,
          url: '/art/artwork4.jpg',
          position: artworkPositions[1] as Vec3,
          rotation: [0, 0, 0] as Vec3,
        },
      ],
      floor: {
        position: [0, 0, -2.5] as Vec3,
        args: {
          width: roomWidth - 5,
          height: roomWidth,
          depth: 0.5
        }
      }
    },
  ], [artworkPositions, roomHeight])

  return (
    <group>
      <ArtRoom
        key={'floor1'}
        room={rooms[0]}
        roomWidth={roomWidth}
        roomHeight={roomHeight}
        roomDepth={roomDepth}
        models={[
          // <SpiralStair key="stair" position={GALLERY_CONFIG.MODELS.SPIRAL_STAIR.POSITION} />
          <DCStair key="stair"
            position={GALLERY_CONFIG.MODELS.DC_STAIR.POSITION}
            scale={GALLERY_CONFIG.MODELS.DC_STAIR.SCALE}
            rotation={GALLERY_CONFIG.MODELS.DC_STAIR.ROTATION}/>
          ,
          ...GALLERY_CONFIG.MODELS.GLASS_WINDOWS.POSITIONS.map((pos, index) => (
            <GlassWindow
              key={`window_${index}`}
              position={pos}
            />
          )),
          <GLASS_WINDOWS_2 key="glass-window-2"
            position={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.POSITIONS}
            rotation={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.ROTATION}
            scale={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.SCALE} />,
        ]}
      />
      <ArtRoom
        key={'floor2'}
        room={rooms[1]}
        roomWidth={roomWidth}
        roomHeight={roomHeight}
        roomDepth={roomDepth}
        models={[
          <HousePlant key="house-plant"
            position={GALLERY_CONFIG.MODELS.HOUSE_PLANT.POSITION}
            scale={GALLERY_CONFIG.MODELS.HOUSE_PLANT.SCALE} />,
          <GLASS_WINDOWS_2 key="glass-window-2"
            position={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.POSITIONS}
            rotation={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.ROTATION}
            scale={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.SCALE} />
        ]}
      />


      {/* Spiral Stair */}

      {/* <SecondFloorRoom
        key={1}
        room={rooms[1]}
        roomWidth={roomWidth}
        roomHeight={roomHeight}
        roomDepth={roomDepth}
      /> */}

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 8, 0]} intensity={1} castShadow />
      <pointLight position={[0, 8, -10]} intensity={0.5} />
    </group>
  )
}