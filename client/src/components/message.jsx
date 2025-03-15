import React from "react";
import ReactEmoji from "react-emoji";

export const Message = ({ message: { text, user }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;

  return (
    <div
      className={`flex px-4 mt-1 ${
        isSentByCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {isSentByCurrentUser ? (
        <>
          <p className="flex items-center text-sm pr-2 text-red-500">
            {trimmedName}
          </p>
          <div className="bg-blue-500 text-white rounded-2xl py-2 px-4 max-w-[75%] shadow-md">
            <p className="text-lg break-words">{ReactEmoji.emojify(text)}</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-200 text-gray-900 rounded-2xl py-2 px-4 max-w-[75%] shadow-md">
            <p className="text-lg break-words">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="flex items-center text-sm pl-2 text-orange-500">
            {user}
          </p>
        </>
      )}
    </div>
  );
};
