

import { BiArrowFromBottom, BiHomeCircle, BiMoney, BiPlus, BiPlusCircle } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { GoArrowSmallDown } from "react-icons/go";
import { MdAdd, MdSendAndArchive } from "react-icons/md";
import { Link } from "react-router-dom";
import Nav  from "../Nav";
import Dashboard from "../Wallet/Dashboard";

export default function Sidebar() {
    return (
      <>
        <div className="sidebar">
        
        <Link to="/home"> 
            <div className="lime">
            
            <BiHomeCircle className="ico" />
             <p>Home</p>
            </div>
            </Link>

        <Link to="/send"> 
            <div className="lime">
            <FaAngleDoubleUp className="ico" />
             <p>Send</p>
            </div>
            </Link>

            <Link to="/receive"> 
            <div className="lime">
            <FaAngleDoubleDown  className="ico" />
             <p>Recieve</p>
            </div>
            </Link>

            <Link to="/Buy"> 
            <div className="lime">
            <BiMoney className="ico" />
             <p>Buy</p>
            </div>
            </Link>

            <Link to="/swap">           
             <div className="lime">
                <BsCurrencyExchange className="ico"/>
    
             <p>Swap</p>
            </div>
            </Link>
            <Link to="/addcoin">           
             <div className="lime">  
                <BiPlusCircle className="ico"/>
             <p>Add Coin</p>
            </div>
            </Link>
            
        </div>
           
      </>
    );
  }