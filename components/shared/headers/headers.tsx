import { Button } from "@/components/ui/button";
import { appName } from "@/constants/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModeToggle from "@/components/shared/headers/modeToggle";

const Header = () => {
  return (
    <div className="border-b w-full border-b-zinc-500/10 ">
      <div className="wrapper flex justify-between items-center">
        <Link href={"/"}>
          <span className="font-bold hidden sm:flex bg-clip-text bg-gradient-to-l uppercase tracking-tighter text-2xl from-rose-500  to-pink-600 text-transparent">
            {appName}
          </span>
          <span className="font-bold  flex sm:hidden bg-clip-text bg-gradient-to-l uppercase tracking-tighter text-xl from-rose-500 via-red-400 to-pink-600 text-transparent">
            ZS
          </span>
        </Link>
        <div className="flex space-x-2">
          <ModeToggle />
          <Button variant={"ghost"} asChild>
            <Link href={"/cart"}>
              <ShoppingCart /> cart
            </Link>
          </Button>
          <Button asChild>
            <Link href={"/signin"}>
              <UserIcon />
              Sign in
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
