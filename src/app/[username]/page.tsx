"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Html } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import Spacing from "@/app/components/spacing";
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
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const { username } = useParams();
  const router = useRouter();

  return (
    <main className="grid grid-cols-6">
      <div className="col-start-3 col-span-2 items-center w-full justify-center flex-col flex font-mono tracking-tighter text-center">
        <Spacing size16 />
        <span className="underline font-extrabold">{username}&rsquo;s </span>
        internet flowers
      </div>
      <div className="md:col-start-2 md:col-span-4 md:aspect-video h-max aspect-square col-start-1 col-span-6">
        <FlowerCanvas />
      </div>
      <div className="col-start-2 col-span-4 ">
        <Spacing size16 />
        <div className="text-center">
          <p className="text-lg font-mono tracking-tighter leading-[1.25em]">
            Send a flower to someone. Make them happy.
          </p>
          <Spacing size16 />
          <div className="flex justify-center">
            {/* if user not logged in, show sign in button */}
            {(!userId && (
              <Drawer>
                <DrawerTrigger>
                  <div className="bg-black text-white font-mono tracking-tighter px-4 py-2 hover:cursor-pointer hover:text-black hover:bg-white border-black border-2">
                    Send Now
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="font-mono tracking-tighter">
                      Login or Signup
                    </DrawerTitle>
                    <DrawerDescription className="font-mono tracking-tighter">
                      You have to be logged in to share flowers.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button
                      onClick={() => router.push("/sign-in")}
                      className="bg-black text-white font-mono tracking-tighter px-4 py-2 hover:cursor-pointer hover:text-black hover:bg-white border-black border-2"
                    >
                      Sign In
                    </Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )) || (
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
                    <ShareFlower flowerId={flowerId} />
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
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
          <Flower position={[0, 0, 0]} scale={[1, 1, 1]} />
          <Flower position={[0, 0, 1]} scale={[1, 1, 1]} />
        </Stage>
      </Suspense>
      {/* @ts-ignore */}
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
}

function Flower(props: any) {
  const { nodes, materials } = useGLTF("/flower1.gltf");
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [tooltipPosition, setTooltipPosition] = React.useState({ x: 0, y: 0 });

  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Node.geometry}
          material={materials.palette}
          onPointerEnter={() => (
            setShowTooltip(true), (document.body.style.cursor = "help")
          )}
          onPointerLeave={() => (
            setShowTooltip(false), (document.body.style.cursor = "auto")
          )}
        />
      </group>

      <Html
        as="div"
        style={{
          position: "absolute",
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "8px",
          borderRadius: "0px",
          pointerEvents: "none",
          opacity: showTooltip ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <h1 className="font-mono">
          <div className="font-black">Dandelion</div>given by name
        </h1>
      </Html>
    </>
  );
}

function Model(props: any) {
  const { nodes, materials } = useGLTF("/box.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.Node.geometry}
        material={materials.palette}
      />
    </group>
  );
}

useGLTF.preload("/box.gltf");
useGLTF.preload("/flower1.gltf");

// ShareFlower.tsx
import { generateShareLink } from "@/app/utils/shareFlower";
import { useAuth } from "@clerk/nextjs";

const flowerId = "1234"; //testing

interface ShareFlowerProps {
  flowerId: string;
}

const ShareFlower = ({ flowerId }: ShareFlowerProps) => {
  const [shareLink, setShareLink] = useState("");

  const handleShare = async () => {
    const link = await generateShareLink(flowerId);
    setShareLink(link);
    // Provide a way to copy or share the link
  };

  return (
    <div>
      <button onClick={handleShare}>Share Flower</button>
      {shareLink && <div>Share Link: {shareLink}</div>}
    </div>
  );
};
