

import Nav  from "../Nav";
import Dashboard from "../Wallet/Dashboard";
import Sidebar from "./Sidebar";

export default function Home() {
    return (
      <>
       <Nav/> 
       <Sidebar/>
       <Dashboard />    
      </>
    );
  }