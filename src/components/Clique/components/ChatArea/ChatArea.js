import ChatInput from "../ChatInput/ChatInput";
import ReceiverMessage from "../ReceiverMessage/ReceiverMessage";
import SenderMessage from "../SenderMessage/SenderMessage";
import "./ChatArea.css";

const ChatArea = ({ messages, setMessages }) => {
  return (
    <div className="chatarea scrollbar-hide">
      <div className="chatarea__container  "></div>
      <div className="chatarea__messages ">
        {messages.map((message, index) => {
          return message.type === "sent" ? (
            <SenderMessage key={index} message={message} />
          ) : (
            <ReceiverMessage key={index} message={message} />
          );
        })}
      </div>
      <ChatInput setMessages={setMessages} />
    </div>
  );
};

export default ChatArea;
