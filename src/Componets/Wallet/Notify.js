

import Nav  from "../Nav";
import { IoIosHelpCircleOutline} from "react-icons/io"
import Pool from '../Wallet/Pooling'
import {FaEthereum } from 'react-icons/fa'
import {BsCurrencyBitcoin} from 'react-icons/bs'

export default function Home() {
    return (
      <>
       <div className="Hive">
           <div className="notify">
               <div className="head-price">
               <p> 
                   Amount
               </p>
               <span className="spacing"></span>
                <p>Detail</p>
                </div>

                  <div className="percent">
                      <h2>100%</h2>
                  </div>

                <div className="cover-count">
                <div className="count">
                    <span>25%</span>
                </div>
                <div className="count">
                    <span>25%</span>
                </div>
                <div className="count">
                    <span>25%</span>
                </div>
                {/* <div className="go">
                    <span className="">Max</span>
                </div> */}
                </div>

           </div>

           <div className="jun">
               <div className="tx"> 
                 transaction Ref: Px0x093h9x0x98w
               </div>
               <div className="wear">
               <p>0.0000gwei</p>
               <p> 0.04844 gwei</p>
               </div>
               <div className="float-left">
               <div className="left-hand">
                  <div className="coi"> <p>ETH</p><FaEthereum className="tokenize"/></div>
                   
                   <div className="coi"><p>BTC</p><BsCurrencyBitcoin className="tokenize"/></div>
               </div>

               <div>
                   <p className="down-msg">Recieved BTC</p>
               </div>

               </div>

           </div>

       </div>
      </>
    );
  }