import { createRoot } from "react-dom/client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

function GardenModel() {
  const { scene } = useGLTF("/garden.glb");
  return <primitive object={scene} scale={0.5} />;
}

function RotatingCamera() {
  const cameraRef = useRef();

  useFrame(() => {
    cameraRef.current.rotation.y += 0.01;
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 2, 5]}
      rotation={[-Math.PI / 4, 0, 0]}
    />
  );
}

export default function Garden() {
  return (
    <Canvas>
      <RotatingCamera />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 5]} intensity={1} />
      <GardenModel />
    </Canvas>
  );
}
