import React from "react";
import { CheckCircle, LogOut } from "lucide-react";
import { userStore } from "../hooks/user-store";

export const InfoBar = () => {
  const { room } = userStore();
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl h-14 px-4 shadow-lg">
      <div className="flex items-center text-white space-x-2">
        <CheckCircle className="text-green-400" />
        <h3 className="text-lg font-semibold">{room}</h3>
      </div>
      <div>
        <a
          href="/"
          className="text-white hover:text-red-400 transition-all duration-300"
        >
          <LogOut />
        </a>
      </div>
    </div>
  );
};
