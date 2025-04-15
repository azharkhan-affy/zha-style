import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center min-h-screen justify-center">
      <Loader2 className="animate-spin w-20 h-20" />
    </div>
  );
};

export default loading;
