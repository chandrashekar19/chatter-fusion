import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Message } from "./message";

export const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="p-4 h-full overflow-y-auto scrollbar-hide">
      {messages.map((message, i) => (
        <div key={i} className="mb-2">
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};
