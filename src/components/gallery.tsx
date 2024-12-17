'use client'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei'
import { GalleryRoom } from './gallery-room'
// import Light from './light'
// import LightControl from './light-control'
export default function Gallery() {

  return (
    <div className="h-screen w-full">
      <Canvas shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [10, 2, 5], fov: 75 }}
      >
        <color attach="background" args={['#f0f0f0']} />

        <PerspectiveCamera makeDefault position={[10, 2, 5]} />
        <OrbitControls
          target={[10, 0, 0]}
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={30}
          enableDamping
          dampingFactor={0.05}
        />

        <Environment preset="apartment" />
        {/* <Light />       */}
        {/* <LightControl /> */}
        <GalleryRoom />
        <Preload all />
        <axesHelper position={[0, 0, 0]} args={[55]} /> {/* Thêm trục tọa độ vào scene */}

      </Canvas>
    </div>
  )
}