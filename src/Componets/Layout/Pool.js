

import Nav  from "../Nav";
import Dashboard from "../Wallet/Dashboard";
import { IoIosHelpCircleOutline} from "react-icons/io"
import Pool from '../Wallet/Pooling'
import Sidebar from "./Sidebar";

export default function Home() {
    return (
      <>
       <Nav />
       <Sidebar/>
       <Pool />
      </>
    );
  }