
import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {  FaEthereum } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
export default function Dashboard() {
    return (
      <>
     <div className="bolex">
         <div className="list-boxs">
             <div className="banny">
                 <p className="text-ar">input</p>
                 <p className="price">0.00</p>
                 <p className="fee">Balance: 0.0939</p>
             </div>

             <div className="join">
                 <p style={{
                     color: "#fec033",
                     marginTop: "30px",
                 }}>Max</p>
                 <div className="jun">
                     <FaEthereum className="" /> <span>ETH</span>
                     <MdOutlineKeyboardArrowDown className=""/>
                 </div>
                 
             </div>

         </div>

         <div className="alkin">
             <GoPlus style={{ color: " #fec033"}} />
         </div>

         <div className="list-boxs">
             <div className="banny">
                 <p className="text-ar">input</p>
                 <p className="price">0.00</p>
                 <p className="fee">Balance: 0.0939</p>
             </div>

             <div className="join">
                 <p style={{
                     color: "#fec033",
                     marginTop: "30px",
                 }}>Max</p>
                 <div className="jun">
                     <FaEthereum className="" /> <span>ETH</span>
                     <MdOutlineKeyboardArrowDown className=""/>
                 </div>
                 
             </div>

         </div>

         <button className="btn-vp"> Exchange </button>

     </div>
      </>
    );
  }