import "./ChatInput.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import Picker from "emoji-picker-react";
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ setMessages }) => {
  const { selectedChat } = useContext(ChatContext);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    if (message !== "") {
      const newMessage = {
        type: "sent",
        content: message,
        timestamp:new Date().toLocaleTimeString()
      };
      setMessages([...selectedChat.messages, newMessage]);
      selectedChat.messages.push(newMessage);
      setMessage("");
      setShowPicker(false);
    }
  };
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };
  const addEmoji = (e, emoji) => {
    setMessage(message + emoji.emoji);
  };
  return (
    <div className="chatinput">
      <div className="chatinput__form">
        {showPicker && <Picker onEmojiClick={addEmoji} />}
        <SentimentVerySatisfiedIcon onClick={togglePicker} />
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            placeholder="Type a message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </form>
        <div className="chatinput__formIcons">
        <SendIcon color="red" className="hover:text-green-600 text"  onClick={sendMessage} />
          <AttachFileIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
