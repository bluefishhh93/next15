import React, { useMemo } from 'react'
import { ArtRoom } from './art-room'
import GlassWindow from './glass-window'
import GLASS_WINDOWS_2 from './glass-window-2'
import { GALLERY_CONFIG } from '@/utils/gallery-config'
import { calculateArtworkPositions } from '@/utils/room-helper'
import { Vec3 } from '@/types'
import { DCStair } from './dc-stair'
import { BirchTree } from './birch-tree'
import { Railing } from './railing'

export function GalleryRoom() {
  const { WIDTH: roomWidth, HEIGHT: roomHeight, DEPTH: roomDepth } = GALLERY_CONFIG.ROOM
  const artworkPositions = calculateArtworkPositions(roomWidth, 2)

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
          position: artworkPositions[0],
          rotation: [0, 0, 0] as Vec3,
        },
        {
          id: 4,
          url: '/art/artwork4.jpg',
          position: artworkPositions[1],
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
      },
      ceiling: {
        position: [0, roomHeight, 8] as Vec3,
        args: {
          width: roomWidth + 16,
          height: roomWidth,
          depth: 0.5
        }
      }
    },
  ], [artworkPositions, roomHeight])

  const firstFloorModels = useMemo(() => [
    <DCStair 
      key="stair"
      position={GALLERY_CONFIG.MODELS.DC_STAIR.POSITION}
      scale={GALLERY_CONFIG.MODELS.DC_STAIR.SCALE}
      rotation={GALLERY_CONFIG.MODELS.DC_STAIR.ROTATION} 
    />,
    <BirchTree 
      key="birchtree"
      position={GALLERY_CONFIG.MODELS.BIRCH_TREE.POSITION}
      rotation={GALLERY_CONFIG.MODELS.BIRCH_TREE.ROTATION}
      scale={GALLERY_CONFIG.MODELS.BIRCH_TREE.SCALE}
    />,
    ...GALLERY_CONFIG.MODELS.GLASS_WINDOWS.POSITIONS.map((pos, index) => (
      <GlassWindow
        key={`window_${index}`}
        position={pos}
        rotation={GALLERY_CONFIG.MODELS.GLASS_WINDOWS.ROTATION}
        scale={GALLERY_CONFIG.MODELS.GLASS_WINDOWS.SCALE}
      />
    )),
    <GLASS_WINDOWS_2 
      key="glass-window-2"
      position={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.POSITIONS}
      rotation={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.ROTATION}
      scale={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.SCALE} 
    />,
  ], [])
  
  const secondFloorModels = useMemo(() => [
    <GLASS_WINDOWS_2 
      key="glass-window-2"
      position={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.POSITIONS}
      rotation={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.ROTATION}
      scale={GALLERY_CONFIG.MODELS.GLASS_WINDOWS_2.SCALE} 
    />,
    ...GALLERY_CONFIG.MODELS.RAILING.POSITIONS.map((pos, index) => (
      <Railing
        key={`railing_${index}`}
        position={pos}
        rotation={GALLERY_CONFIG.MODELS.RAILING.ROTATION}
        scale={GALLERY_CONFIG.MODELS.RAILING.SCALE}
      />
    ))
  ], []);

  return (
    <group>
      <ArtRoom
        key="floor1"
        room={rooms[0]}
        roomWidth={roomWidth}
        roomHeight={roomHeight}
        roomDepth={roomDepth}
        models={firstFloorModels}
      />
      <ArtRoom
        key="floor2"
        room={rooms[1]}
        roomWidth={roomWidth}
        roomHeight={roomHeight}
        roomDepth={roomDepth}
        models={secondFloorModels}
      />
    </group>
  )
}
{/* Lighting */}
{/* <ambientLight intensity={0.9} /> */}
{/* <pointLight position={[0, 8, 0]} intensity={1} castShadow /> */}
{/* <pointLight position={[0, 8, -10]} intensity={0.5} /> */}