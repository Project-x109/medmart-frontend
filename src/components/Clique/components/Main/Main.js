import "./Main.css";
import Chat from "../Chat/Chat";
import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";

const Main = () => {
  const { selectedChat } = useContext(ChatContext);
  return !selectedChat ? (
    <div className="mainpage">
      <h1>Welcome</h1>
      <p>Click on a contact name to start chatting!</p>
    </div>
  ) : (
    <Chat selectedChat={selectedChat} />
  );
};

export default Main;
