"use client";
import * as React from "react";
import Image from "next/image";
import Spacing from "@/app/components/spacing";
import Scene from "./components/scene";
import Spline from "@splinetool/react-spline";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <div className="justify-center items-center px-8 py-2.5 w-full border-2 border-solid border-zinc-800 max-w-[336px] rounded-[32px] hover:cursor-pointer text-center">
      {children}
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center py-20 mx-auto w-full text-2xl tracking-tighter bg-white max-w-[480px] text-neutral-500">
      <div className="mt-5 text-base tracking-tighter text-neutral-500">
        Acme's Flower Garden
      </div>
      <Spacing lg />
      <Spacing lg />
      <Spacing lg />
      <Scene />
      <Spline scene="https://prod.spline.design/7mnfiKtGH115hHeT/scene.splinecode" />
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd525a1373a717d0f0688bf9ef4f9ee718db1930ca85511d1c7283960fc152a?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
        alt=""
        className="self-stretch w-full aspect-[1.47]"
        width={480}
        height={327}
      />
      <Spacing lg />
      <Spacing lg />
      <Spacing lg />
      <Button>Send A Flower</Button>
      <Button>Share</Button>
    </div>
  );
}

export default Home;
