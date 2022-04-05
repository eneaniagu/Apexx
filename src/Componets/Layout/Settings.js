

import Nav  from "../Nav";
import Dashboard from "../Wallet/Dashboard";
import { IoIosHelpCircleOutline} from "react-icons/io"
import Settings from '../Wallet/Settings'
import Sidebar from "./Sidebar";

export default function Home() {
    return (
      <>
       <Nav />
       <Sidebar/>
       <Settings />
      </>
    );
  }