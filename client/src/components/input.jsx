import { ChatStore } from "../hooks/chat-store";

export const Input = ({ sendMessage }) => {
  const { message, setMessage } = ChatStore();

  return (
    <form className="flex items-center border-t-2 border-gray-300 p-2">
      <input
        className="w-full sm:w-[80%] p-3 border-2 border-gray-400 rounded-lg text-lg outline-none focus:border-blue-500 transition-all"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button
        className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition"
        onClick={(e) => {
          console.log("Send button clicked. Message:", message);
          sendMessage(e);
        }}
      >
        Send
      </button>
    </form>
  );
};
