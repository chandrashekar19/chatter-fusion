import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

import TextContainer from "./text";
import Messages from "./messages";
import InfoBar from "./info-bar";
import Input from "./input";
import { ChatStore } from "../hooks/chat-store";
import { userStore } from "../hooks/user-store";

const ENDPOINT = "https://chatter-fusion.onrender.com";

let socket;

const Chat = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);

  const { setName, setRoom, users, name, setUsers } = userStore();
  const { message, setMessage } = ChatStore();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, () => {});
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col justify-between bg-white rounded-md h-[60%] w-[35%]">
        <InfoBar />
        <Messages messages={messages} name={name} />
        <Input sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
