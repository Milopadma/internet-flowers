// RedeemFlower.tsx
import { addFlowerToGarden } from "@/app/utils/garden";
import { checkUserLogin } from "@/app/utils/auth";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RedeemFlower = () => {
  const router = useRouter();
  const { flowerId } = router.query;

  useEffect(() => {
    const redeemFlower = async () => {
      // Check if the user is logged in
      const isLoggedIn = await checkUserLogin();

      if (isLoggedIn) {
        // Add the shared flower to the user's garden
        if (typeof flowerId !== "string") {
          return;
        }
        await addFlowerToGarden(flowerId);
        // Optionally, show a success message or redirect to the garden pageA
        toast("Flower redeemed successfully");
      } else {
        // Redirect the user to the login page
        router.push("/login");
      }
    };
  }, [flowerId]);

  return <div>Redeeming Flower...</div>;
};
