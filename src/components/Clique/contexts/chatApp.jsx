import { Contacts } from "@mui/icons-material";
import Main from "../components/Main/Main";
import ChatContextProvider from "./ChatContext";
 

const ChatApp=()=>{
return(  
<div className="flex">
  <Contacts />
  <Main />
</div>)
}
export default ChatApp;