import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="flex justify-end px-[5%] mt-1">
      <p className="flex items-center text-red text-sm pr-2">{trimmedName}</p>
      <div className="bg-blue-500 text-white rounded-xl py-1 px-5 inline-block max-w-[80%]">
        <p className="w-full text-lg break-words text-black">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start px-[5%] mt-1">
      <div className="bg-gray-200 text-gray-900 rounded-xl py-1 px-5 inline-block max-w-[80%]">
        <p className="w-full text-lg break-words">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="flex items-center text-orange text-sm pl-2">{user}</p>
    </div>
  );
};

export default Message;
