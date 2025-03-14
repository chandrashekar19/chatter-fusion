import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./message";
import { ChatStore } from "../hooks/chat-store";
import { userStore } from "../hooks/user-store";

const Messages = () => {
  const { messages } = ChatStore();
  const { name } = userStore();

  return (
    <ScrollToBottom className="p-[5%] overflow-auto flex-auto">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
