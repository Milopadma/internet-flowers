import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="relative h-full aspect-square">
        <Image src="/pixelart-flowers.png" alt="flower" fill />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <SignUp path="/sign-up" />
      </div>
    </div>
  );
}
