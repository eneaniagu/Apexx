
import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {  FaEthereum } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { BiDownArrow, BiDownArrowAlt, BiFontColor, BiUpArrowAlt } from "react-icons/bi"
import Bitcoin  from '/node_modules/cryptocurrency-icons/32/color/btc.png'
import ETH  from '/node_modules/cryptocurrency-icons/32/color/eth.png'

export default function Home() {
    return (
      <>
     <div className="bolex">
         <div className="list-boxs">
             <div className="banny">
                 <div className="list-token">
                 <img src={Bitcoin} className="ico-token" /> 
                 <p className="text-ar">Bitcoin</p>
                 </div>
                 <p className="price">0.49600</p>
                 <p className="exchangeRate">trading rate: 34.0939USd</p>
             </div>

             <div className="shift">
                 <div className="xc">
                 <BiUpArrowAlt className="up-arrow"/>
                 <p className="xc-up">2%</p>
                 </div>
                <div className="xc">
                <BiDownArrowAlt className="down-arrow" />
                <p className="xc-down">5%</p>
                </div>
                 
                 
             </div>

         </div>

        

         <div className="list-boxs">
             <div className="banny">
             <div className="list-token">
                 <img src={ETH} className="ico-token" /> 
                 <p className="text-ar">Ethereum</p>
                 </div>
                 <p className="price">4.020</p>
                 <p className="exchangeRate">trading rate: 34.0939USd</p>
             </div>

             <div className="shift">
                 <div className="xc">
                 <BiUpArrowAlt className="up-arrow"/>
                 <p className="xc-up">2%</p>
                 </div>
                <div className="xc">
                <BiDownArrowAlt className="down-arrow" />
                <p className="xc-down">5%</p>
                </div>
                 
                 
             </div>

         </div>

       

     </div>
      </>
    );
  }