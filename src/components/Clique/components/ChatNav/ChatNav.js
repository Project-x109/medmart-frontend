import "./ChatNav.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";

const ChatNav = ({ selectedChat }) => {
  const { setSelectedChat } = useContext(ChatContext);
  const clearSelectedChat = () => {
    setSelectedChat(null);
  };
  return (
    <div className="chatnav h-16 bg-blue-500">
      <div className="chatnav__left">
        <ArrowBackIcon onClick={clearSelectedChat} />
        <Avatar src={selectedChat.photoUrl} />
        <h2> {selectedChat.name} </h2>
      </div>
      <div className="chatnav__right">
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default ChatNav;
