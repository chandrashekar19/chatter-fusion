import PropTypes from "prop-types";
import { Wifi } from "lucide-react";

const TextContainer = ({ users }) => (
  <div className="flex flex-col ml-24 text-white h-[60%] justify-between">
    <div>
      <h1 className="mb-0">
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users && (
      <div>
        <h1>People currently chatting:</h1>
        <div className="flex items-center mb-20">
          <h2 className="flex flex-col">
            {users.map(({ name }) => (
              <div key={name} className="flex items-center">
                {name}
                <Wifi />
              </div>
            ))}
          </h2>
        </div>
      </div>
    )}
  </div>
);

TextContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default TextContainer;
