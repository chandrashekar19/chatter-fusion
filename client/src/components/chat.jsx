import { useEffect } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { useChatStore } from "../hooks/use-chat-store";
import io from "socket.io-client";
import InfoBar from "./info-bar";
import Input from "./input";
import TextContainer from "./text-container";
import Messages from "./message-box/messages";

const Chat = ({ location }) => {
  const {
    name,
    room,
    users,
    message,
    messages,
    setName,
    setRoom,
    setUsers,
    setMessage,
    setMessages,
  } = useChatStore();
  const ENDPOINT = "localhost:5000";
  let socket;

  socket = io(ENDPOINT);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);
    console.log("SOCKET CONNECTION", socket);

    socket.emit("join", { name, room }, (err) => {
      if (err) {
        alert(err);
      }
    });
  }, [location]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages], message);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  });

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

Chat.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chat;
