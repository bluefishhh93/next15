"use client";
import { GalleryRoom } from "./gallery-room";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Light from "./light";

const Scene = () => {
  return <>
    <color attach="background" args={['#f0f0f0']} />

    <PerspectiveCamera makeDefault position={[10, 2, 5]} fov={75} />
    <OrbitControls
      target={[10, 0, 0]}
      maxPolarAngle={Math.PI / 2}
      minDistance={2}
      maxDistance={30}
      enableDamping
      dampingFactor={0.05}
    />

    <Environment preset="apartment" />
    <Light />
    {/* <LightControl /> */}
    {/* <ambientLight intensity={0.9} /> */}
    <pointLight position={[0, 8, 0]} intensity={1} castShadow />
    <pointLight position={[0, 8, -10]} intensity={0.5} />
    <GalleryRoom />
    {/* <Preload all /> */}
    <axesHelper position={[0, 0, 0]} args={[55]} /> {/* Thêm trục tọa độ vào scene */}

  </>

}


export default Scene;
