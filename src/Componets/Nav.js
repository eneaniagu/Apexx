
import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";
import {BsBrightnessHigh} from 'react-icons/bs'
import { BiLogOutCircle } from "react-icons/bi";


export default function Nav () {
    return (
      <> 
      <div className="">
      
      <div className="line">
      <h2 className="logo-text">WAPEH Wallet</h2>
          <ul className="links">
             
              <li>
                  <Link to="/notify">
                  <h2 className="navbars">Notification</h2>
                  </Link>
              </li>

              <li>
                  <Link to="/settings">
                  <h2 className="navbars">Settings</h2>
                  </Link>
              </li>
          </ul>

          <ul className="links-1">
              <li className="dev">
                  <h2 className="navbars-1-we">37 DEV</h2>
                
              </li>

              <li className="nav-dev">
                
                  <h2 className="navbars-1">80.08ETH</h2>
              </li>
              <li className="nav-dev">
                  <h2 className="navbars-1">0x0d17028je8383h8302828</h2>
              </li>

              <li className="nav-dev">
                
                  <BsBrightnessHigh className="icon-bs"/>
            
              </li>

              <li className="nav-dev">
                  <Link to="/login">
                 <BiLogOutCircle />
                  </Link>
              </li>
          </ul>
        
          </div>   
          </div>  
      </>
    );
  }
