import ReactEmoji from "react-emoji";
import PropTypes from "prop-types";

const Message = ({ message: { text, user }, name }) => {
  const trimmedName = name.trim().toLowerCase();
  const isSentByCurrentUser = user === trimmedName;

  return (
    <div
      className={`flex p-2 mt-1 ${
        isSentByCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {isSentByCurrentUser ? (
        <>
          <p className="text-gray-500 pr-2">{trimmedName}</p>
          <div className="bg-blue-600 rounded-full p-2 max-w-[80%]">
            <p className="text-white text-lg">{ReactEmoji.emojify(text)}</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-200 rounded-full p-2 max-w-[80%]">
            <p className="text-gray-800 text-lg">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="text-gray-500 pl-2">{user}</p>
        </>
      )}
    </div>
  );
};

// PropTypes validation
Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
