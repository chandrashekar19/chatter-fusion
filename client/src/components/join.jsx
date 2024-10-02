import { Link } from "react-router-dom";
import { useChatStore } from "../hooks/use-chat-store";

const Join = () => {
  const { name, room, setName, setRoom } = useChatStore();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg p-8 h-[300px] w-[300px] md:w-[500px] sm:w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Join</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className="w-[200px] py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
            type="submit"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
