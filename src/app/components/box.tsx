import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { nodes, materials } = useGLTF("/box.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node.geometry}
        material={materials.palette}
      />
    </group>
  );
}

export default function ModelCanvas() {
  const ref = useRef()
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 150], fov: 50 }}
    >
      <ambientLight intensity={0.25} />
      <Suspense fallback={null}>
        <Stage shadows adjustCamera>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
}

useGLTF.preload("/box.gltf");
