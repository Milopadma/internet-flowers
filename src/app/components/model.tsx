"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { fileURLToPath } from "url";

const fileurl = "/garden2.gltf";

export default function Model(props) {
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileurl);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.Cube.geometry}
        material={gltf.materials.Material}
        scale={[4.245, 0.368, 3.778]}
      />
    </group>
  );
}

useGLTF.preload(fileurl);
