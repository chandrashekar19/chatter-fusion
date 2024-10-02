import PropTypes from "prop-types"; // Import PropTypes
import { CircleX, Wifi } from "lucide-react";

const InfoBar = ({ room }) => (
  <div className="flex items-center justify-between bg-blue-600 rounded-t-md h-16 w-full">
    <div className="flex items-center ml-4 text-white flex-1">
      <Wifi className="mr-2" />
      <h3>{room}</h3>
    </div>
    <div className="flex justify-end mr-4 flex-1">
      <a href="/">
        <CircleX className="text-white" />
      </a>
    </div>
  </div>
);

// Add prop validation
InfoBar.propTypes = {
  room: PropTypes.string.isRequired, // room is a required string
};

export default InfoBar;
