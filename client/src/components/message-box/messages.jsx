import PropTypes from "prop-types";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./message";

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="flex-1 overflow-auto py-5">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default Messages;
