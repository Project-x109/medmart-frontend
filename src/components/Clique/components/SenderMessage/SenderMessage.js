import "./SenderMessage.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const SenderMessage = ({ message }) => {
  return (
    <div className="sendermessage">
      <p>{message.content}</p>
      <span>
        {message.timestamp} <DoneAllIcon />
      </span>
    </div>
  );
};

export default SenderMessage;
