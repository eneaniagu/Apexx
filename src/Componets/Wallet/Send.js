import Nav  from "../Nav";
import Dashboard from "../Wallet/Dashboard";
import { IoIosHelpCircleOutline} from "react-icons/io"
import Bitcoin  from '/node_modules/cryptocurrency-icons/32/color/btc.png'
import ETH  from '/node_modules/cryptocurrency-icons/32/color/eth.png'


export default function Send() {
    return (
      <>
       <div className="addcoin">
           <div className="polin">
               <h2>Transfer Coin </h2>
               <p>Make sure you are sending to the correct address any coin send to a wrong address cannot be retrieve back<IoIosHelpCircleOutline className=""/></p>
             
           </div>
          <div className="" style={{ marginLeft: "20%"}}>
          <label>Coin to send</label>
           <div className="" style={{
               marginTop: "10px",
               marginBottom: "30px",
           }}>
               
               <select className="selectoption1"> 
                   <option value="">Select Token</option>
                   <option value="Bitcoin">Bitcoin</option>
                   <option value="ETHEREUM">ETHEREUM</option>
                   <option value="USDT">USDT</option>
                   <option value="">BNB</option>
                   <option value="">Solana</option>
                   <option value="">Cardano</option>
                   <option value="">XRP</option>
                   <option value="">Avalanche</option>
                   <option value="">Polygon</option>
                   <option value="">Chianlink</option>
                   <option value="">Elrond</option>
                   <option value="">Dia</option>
                   <option value="">Apecoin</option>
                   <option value="">Doge</option>
                   <option value="">veChain</option>
               </select>
           </div>
           <div className="">
               <input type="text" placeholder="
               enter recipient address" className="Inputoption1" />
           </div>

           <div className=""  style={{
               marginTop: "10px",
               marginBottom: "30px",
           }}>
               <input type="text" name="amount" className="selectoption" placeholder="enter amout that you want to transfer" />
                   
           </div>

           <button className="btn-create">Send</button>
           </div>
       </div>
      </>
    );
  }