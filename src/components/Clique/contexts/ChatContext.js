import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadChat } from "../../../actions/cliqueAction";
import { getAllUsers } from "../../../actions/userAction";
import BackdropLoader from "../../Layouts/BackdropLoader";
import MetaData from "../../Layouts/MetaData";
import Contacts from "../components/Contacts/Contacts";
import Main from "../components/Main/Main";
import userChats from "../data/userChats";
export const ChatContext = createContext();

const ChatContextProvider = () => {
  const {chat,loading}=useSelector(state=>state.chat);
  const [chats, setChats] = useState(chat);
  const [selectedChat, setSelectedChat] = useState(null);
const dispatch=useDispatch();
  useEffect(()=>{
dispatch(loadChat())
  },[dispatch])
  
console.log(chat)
  return (
    <>
    <MetaData title="Admin Users | Medmart" />
    {loading && <BackdropLoader />}
    <div className="py-16 flex">
    <ChatContext.Provider
      value={{ chats, setChats, selectedChat, setSelectedChat }}
    >
      {<Contacts />}
      { <Main />}
    </ChatContext.Provider>
    </div>
    </>
  );
};

export default ChatContextProvider;
