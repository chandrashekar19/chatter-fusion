import React from "react";
import { MessageCircle, Heart, ArrowLeft, Circle } from "lucide-react"; // Lucide icons
import { userStore } from "../hooks/user-store";

const TextContainer = () => {
  const { users } = userStore();
  return (
    <div className="hidden md:flex flex-col ml-24 text-white h-[60%] justify-between">
      <div>
        <h1 className="mb-0 text-2xl font-bold flex items-center">
          Realtime Chat Application <MessageCircle className="ml-2" />
        </h1>
        <h2 className="text-lg flex items-center">
          Created with React, Express, Node, and Socket.IO{" "}
          <Heart className="ml-2 text-red-500" />
        </h2>
        <h2 className="text-lg flex items-center">
          Try it out right now! <ArrowLeft className="ml-2" />
        </h2>
      </div>

      {users?.length > 0 && (
        <div>
          <h1 className="text-xl font-semibold">People currently chatting:</h1>
          <div className="flex items-center mb-[50%]">
            <h2 className="flex flex-wrap gap-3">
              {users.map(({ name }) => (
                <div key={name} className="flex items-center space-x-2">
                  <span>{name}</span>
                  <Circle className="text-green-500" size={12} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextContainer;
