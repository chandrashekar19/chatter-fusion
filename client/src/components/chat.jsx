import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import { TextContainer } from "./text";
import { Messages } from "./messages";
import { InfoBar } from "./info-bar";
import { Input } from "./input";
import { ChatStore } from "../hooks/chat-store";
import { userStore } from "../hooks/user-store";

const ENDPOINT = "https://chatter-fusion.onrender.com";
let socket;

export const Chat = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);

  const { setName, setRoom, users, name, setUsers } = userStore();
  const { message, setMessage } = ChatStore();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, {
      withCredentials: true,
      transports: ["websocket", "polling"],
    });

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, () => {});
  }, [location.search]);

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
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="flex flex-col justify-between bg-white rounded-2xl shadow-2xl w-full max-w-[450px] h-[80%] sm:h-[70%] p-4">
        <InfoBar />
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <Messages messages={messages} name={name} />
        </div>
        <Input sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};
