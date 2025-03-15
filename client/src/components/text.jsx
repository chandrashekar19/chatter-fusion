import React from "react";
import { MessageCircle, Heart, ArrowLeft, Circle } from "lucide-react";
import { userStore } from "../hooks/user-store";

export const TextContainer = () => {
  const { users } = userStore();
  return (
    <div className="hidden md:flex flex-col ml-6 md:ml-24 text-white h-[60%] justify-between p-4 bg-gray-800 rounded-lg shadow-lg">
      <div>
        <h1 className="mb-2 text-xl md:text-2xl font-bold flex items-center">
          Realtime Chat Application <MessageCircle className="ml-2" />
        </h1>
        <h2 className="text-md md:text-lg flex items-center">
          Created with React, Express, Node, and Socket.IO
          <Heart className="ml-2 text-red-500" />
        </h2>
        <h2 className="text-md md:text-lg flex items-center">
          Try it out right now! <ArrowLeft className="ml-2" />
        </h2>
      </div>

      {users?.length > 0 && (
        <div>
          <h1 className="text-lg md:text-xl font-semibold">
            People currently chatting:
          </h1>
          <div className="flex flex-wrap items-center mt-2">
            {users.map(({ name }) => (
              <div
                key={name}
                className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-lg shadow-md m-1"
              >
                <span className="text-white font-medium">{name}</span>
                <Circle className="text-green-500" size={12} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
