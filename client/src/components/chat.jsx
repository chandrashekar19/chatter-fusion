import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useChatStore } from "../hooks/use-chat-store";
import io from "socket.io-client";
import InfoBar from "./info-bar";
import Input from "./input";
import TextContainer from "./text-container";
import Messages from "./message-box/messages";
import { useMessageStore } from "../hooks/use-messages-store";

const Chat = () => {
  const location = useLocation();
  const { name, room, users, setName, setRoom, setUsers } = useChatStore();
  const { message, messages, setMessage, setMessages } = useMessageStore();
  const ENDPOINT = "http://localhost:5000"; // Use backend server port, like 5000
  const socketRef = useRef(null); // useRef to store socket
  let socket;

  socket = io(ENDPOINT);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // Initialize socket connection and store in ref
    socketRef.current = io(ENDPOINT);

    setRoom(room);
    setName(name);

    // Emit join event
    socketRef.current.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    // Cleanup on unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, [ENDPOINT, location.search, setRoom, setName]);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on("message", (message) => {
        setMessages(message);
      });

      socketRef.current.on("roomData", ({ users }) => {
        setUsers(users);
      });
    }

    // Cleanup listeners on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.off("message");
        socketRef.current.off("roomData");
      }
    };
  }, [setMessages, setUsers]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col justify-between bg-white rounded-lg h-3/5 w-11/12 md:w-2/5 lg:w-1/3">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
