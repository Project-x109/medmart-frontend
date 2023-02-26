import { useEffect, useState } from "react";
import ChatArea from "../ChatArea/ChatArea";
import ChatNav from "../ChatNav/ChatNav";
import "./Chat.css";

const Chat = ({ selectedChat }) => {
  const [messages, setMessages] = useState(selectedChat.messages);
  useEffect(() => {
    setMessages(selectedChat.messages);
  }, [selectedChat]);
  return (
    <div className="chat">
      <div className="h-12 -py-4 z-10 fixed w-full">
      <ChatNav selectedChat={selectedChat} />
      </div>
      <div className="py-20">
      <ChatArea messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
};

export default Chat;
