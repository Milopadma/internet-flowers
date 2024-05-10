"use client";
import React from "react";
import Spacing from "./components/spacing";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  const username = user?.emailAddresses[0].emailAddress.split("@")[0];

  if (!isLoaded || !userId) {
    // router.push("/sign-in");
  } else {
    router.push(`/${username}`);
  }

  const handleLogin = async () => {
    router.push("/sign-up");
  };

  return (
    <main className="grid grid-cols-6 font-mono tracking-tighter">
      <div className="col-start-3 col-span-2 text-center">
        <Spacing size48 />
        <h1>the fastest way to share flowers</h1>
        <Spacing size16 />
        <div>
          <span>*show 3 images on how it works here*</span>
        </div>
        <Spacing size16 />
        <Button
          className="bg-black rounded-none text-white font-mono tracking-tighter px-4 py-2 hover:cursor-pointer hover:text-black hover:bg-white border-black border-2"
          onClick={() => handleLogin()}
        >
          send now
        </Button>
      </div>
    </main>
  );
}
