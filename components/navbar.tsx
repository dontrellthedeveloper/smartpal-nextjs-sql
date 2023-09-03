import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { MobileSidebar } from "./mobile-sidebar";
// import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({ weight: "600", subsets: ["latin"] });

export const Navbar = async () => {
  return ( 
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 bg-secondary h-16 border-b border-b-stone-700">
      <div className="flex items-center">
        <MobileSidebar />
        <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
            companion.ai
          </h1>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant='premium' size='sm'>
            Upgrade
        </Button>
        <ModeToggle/>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}