import React from "react";
import { CheckCircle, LogOut } from "lucide-react";
import { userStore } from "../hooks/user-store";

const InfoBar = () => {
  const { room } = userStore();
  return (
    <div className="flex items-center justify-between bg-blue-800 rounded-md h-15 w-[100%]">
      <div className="flex flex-[0.5] items-center ml-[5%] text-white">
        <CheckCircle className="mr-[5%]" />
        <h3>{room}</h3>
      </div>
      <div className="flex flex-[0.5] justify-end mr-[5%] text-white">
        <a href="/">
          <LogOut />
        </a>
      </div>
    </div>
  );
};
export default InfoBar;
