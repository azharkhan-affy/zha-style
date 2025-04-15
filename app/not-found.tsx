import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <div className="rounded-4xl shadow-2xl text-red-500 flex flex-col">
        Your requested page is not found
      </div>
      <Button asChild>
        <Link href={"/"}>
          Back To Home <LogOut />
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
