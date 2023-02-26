import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import ContactCard from "../ContactCard/ContactCard";
import "./Contacts.css";

const Contacts = () => {
  const { chats: contacts } = useContext(ChatContext);
  return (
    <div className="contacts static h-96 rounded-full border-2 shadow-indigo-900">
      <div className="contacts__heading">
        <h1> Contacts </h1>
      </div>
      <div className="contacts__list scroll border-2">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
