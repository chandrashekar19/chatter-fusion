import PropTypes from "prop-types";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="flex-1 overflow-auto py-5">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

// Add prop validation
Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired, // messages is a required array of objects
  name: PropTypes.string.isRequired, // name is a required string
};

export default Messages;
