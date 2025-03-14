import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;

  return isSentByCurrentUser ? (
    <div className="flex justify-end px-[5%] mt-1">
      <p className="text-gray-500 text-sm pr-2">{trimmedName}</p>
      <div className="bg-blue-500 text-black rounded-lg px-5 py-1 inline-block max-w-[80%]">
        <p className="w-full tracking-normal text-[1.1em] break-words">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start px-[5%] mt-1">
      <div className="bg-gray-200 text-gray-900 rounded-lg px-5 py-1 inline-block max-w-[80%]">
        <p className="w-full tracking-normal text-[1.1em] break-words">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="text-gray-500 text-sm pl-2">{user}</p>
    </div>
  );
};

export default Message;
