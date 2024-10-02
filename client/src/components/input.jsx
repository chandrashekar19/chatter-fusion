import PropTypes from "prop-types"; // Import PropTypes

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="flex border-t-2 border-gray-300">
    <input
      className="border-none rounded-none p-2 w-4/5 text-lg focus:outline-none"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button
      className="text-white uppercase bg-blue-600 p-4 w-1/5"
      onClick={(e) => sendMessage(e)}
    >
      Send
    </button>
  </form>
);

// Add prop validation
Input.propTypes = {
  setMessage: PropTypes.func.isRequired, // setMessage is a required function
  sendMessage: PropTypes.func.isRequired, // sendMessage is a required function
  message: PropTypes.string.isRequired, // message is a required string
};

export default Input;
