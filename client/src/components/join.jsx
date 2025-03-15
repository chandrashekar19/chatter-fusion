import { Link } from "react-router-dom";
import { userStore } from "../hooks/user-store";

export const Join = () => {
  const { name, setName, room, setRoom } = userStore();

  return (
    <div className="flex justify-center text-center h-screen items-center bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-white text-4xl pb-3 border-b-2 border-white">
          Join Chat
        </h1>
        <div className="mt-5">
          <input
            placeholder="Enter Your Name"
            className="w-full p-3 text-lg border-2 border-gray-500 rounded-lg bg-gray-700 text-white outline-none focus:border-blue-500 transition-all"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mt-4">
          <input
            placeholder="Enter Room Name"
            className="w-full p-3 text-lg border-2 border-gray-500 rounded-lg bg-gray-700 text-white outline-none focus:border-blue-500 transition-all"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className="w-full mt-6 p-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95 transition"
            type="submit"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
