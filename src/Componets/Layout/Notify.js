

import Nav  from "../Nav";
import { IoIosHelpCircleOutline} from "react-icons/io"
import Notify from '../Wallet/Notify'
import Sidebar from "./Sidebar";

export default function Home() {
    return (
      <>
       <Nav />
       <Sidebar/>
       <Notify />
      </>
    );
  }