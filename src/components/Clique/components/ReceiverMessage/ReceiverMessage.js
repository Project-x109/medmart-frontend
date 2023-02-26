import "./ReceiverMessage.css";

const ReceiverMessage = ({ message }) => {
  return (
    <div className="receivermessage">
      <p>{message.content}</p>
      <span>{message.timestamp}</span>
    </div>
  );
};

export default ReceiverMessage;
