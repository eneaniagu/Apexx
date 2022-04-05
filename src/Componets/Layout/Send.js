import Dashboard from "../Wallet/Dashboard";
import { IoIosHelpCircleOutline} from "react-icons/io"
import Nav from "../Nav";
import Sidebar from "./Sidebar";
import Send from "../Wallet/Send";

export default function Sendz() {
    return (
      <>
       <Nav/>
       <Sidebar /> 
        <Send />
      </>
    );
  }