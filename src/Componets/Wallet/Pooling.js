import Nav  from "../Nav";
import Dashboard from "../Wallet/Dashboard";
import { IoIosHelpCircleOutline} from "react-icons/io"

export default function Home() {
    return (
      <>
       <div className="addcoin">
           <div className="polin">
               <h2>Add Coin </h2>
               <p>coin added can be removed<IoIosHelpCircleOutline className=""/></p>
               <button className="btn-create">Customize Token</button>
           </div>
          <div className="" style={{ marginLeft: "20%"}}>
           <div className="" style={{
               marginTop: "10px",
               marginBottom: "30px",
           }}>
               <select className="selectoption1"> 
                   <option value="">Select Token</option>
                   <option value="">Bitcoin</option>
                   <option value="">ETHEREUM</option>
                   <option value="">USDT</option>
               </select>
           </div>

           <div className=""  style={{
               marginTop: "10px",
               marginBottom: "30px",
           }}>
               <select className="selectoption">
                   <option>Select Token</option>
                   <option value="">Bitcoin</option>
                   <option value="">ETHEREUM</option>
                   <option value="">USDT</option>
               </select>
           </div>
           </div>
       </div>
      </>
    );
  }