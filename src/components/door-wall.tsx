import React from 'react';
import { Texture } from 'three';
import { Wall } from './wall';

interface DoorWallProps {
  roomWidth: number;
  roomHeight: number;
  roomDepth: number;
  color: string;
  texture?: Texture;
}

export function DoorWall({ roomWidth, roomHeight, roomDepth, color, texture }: DoorWallProps) {
    return (
        <group>
          {/* Bottom Right Section */}
          <Wall
            position={[roomWidth / 2, 3.3, 6.7]}
            rotation={[0, -Math.PI / 2, 0]}
            dimensions={{ width: roomDepth / 3, height: (roomHeight * 2) / 3 }}
            material={{ color, texture }}
          />
    
          {/* Top Right Section */}
          <Wall
            position={[roomWidth / 2, 3.3, -6.7]}
            rotation={[0, -Math.PI / 2, 0]}
            dimensions={{ width: roomDepth / 3, height: (roomHeight * 2) / 3 }}
            material={{ color, texture }}
          />
    
          {/* Middle Right Section */}
          <Wall
            position={[roomWidth / 2, 8.3, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            dimensions={{ width: roomDepth, height: roomHeight / 3 }}
            material={{ color, texture }}
            options={{ castShadow: true }}
          />
        </group>
      );
}
