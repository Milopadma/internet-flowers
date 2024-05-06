"use client";
import React, { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import Spacing from "./components/spacing";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="grid grid-cols-6">
      <div className="col-start-3 col-span-2 items-center w-full justify-center flex-col flex font-mono tracking-tighter text-center">
        <Spacing size16 />
        <span className="underline font-extrabold">acme&rsquo;s </span>internet
        flowers
      </div>
      <div className="md:col-start-2 md:col-span-4 md:h-[calc(35vw)] h-max aspect-square col-start-1 col-span-6">
        <FlowerCanvas />
      </div>
      <div className="col-start-2 col-span-4">
        <Spacing size16 />
        <div className="text-center">
          <p className="text-lg font-mono tracking-tighter leading-[1.25em]">
            Send a flower to someone. Make them happy.
          </p>
          <Spacing size16 />
          <div className="flex justify-center">
            <Drawer>
              <DrawerTrigger>
                <div className="bg-black text-white font-mono tracking-tighter px-4 py-2 hover:cursor-pointer hover:text-black hover:bg-white border-black border-2">
                  Send Now
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>send to</DrawerTitle>
                </DrawerHeader>
                <input type="text" placeholder="name" />
                <DrawerFooter>
                  <Button className="bg-black text-white font-mono tracking-tighter px-4 py-2 hover:cursor-pointer hover:text-black hover:bg-white border-black border-2">
                    Send Now
                  </Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
      <footer className="col-start-2 col-span-4 font-mono tracking-tighter text-center text-xs">
        <Spacing size64 />
        <div className="text-center">
          <p className="font-mono tracking-tighter leading-[1.25em]">
            2024.{" "}
            <a
              href="https://milopadma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              mylo
            </a>
          </p>
        </div>
        <Spacing size16 />
      </footer>
    </main>
  );
}

function FlowerCanvas() {
  const ref = useRef();
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 45, 150], fov: 50 }}
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

useGLTF.preload("/box.gltf");
