
import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";
import {BsBrightnessHigh} from 'react-icons/bs'


export default function Nav () {
    return (
      <> 
      <div className="line">
          <ul className="links">
              <li>
                  <Link to="/swap">
                  <h2 className="navbars">Swap</h2>
                  </Link>
              </li>

              <li>
                  <Link to="/addcoin">
                  <h2 className="navbars">Add coin</h2>
                  </Link>
              </li>

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
                  <Link to="/">
                  <h2 className="navbars-1-we">37 DEV</h2>
                  </Link>
              </li>

              <li className="nav-dev">
                  <Link to="/">
                  <h2 className="navbars-1">80.08ETH</h2>
                  </Link>
              </li>
              <li className="nav-dev">
                  <Link to="/">
                  <h2 className="navbars-1">0x0d17028je8383h8302828</h2>
                  </Link>
              </li>

              <li className="nav-dev">
                  <Link to="/">
                  <BsBrightnessHigh className="icon-bs"/>
                  </Link>
              </li>

              <li className="nav-dev">
                  <Link to="/">
                  <h2 className="navbars-1">...</h2>
                  </Link>
              </li>
          </ul>
        
          </div>     
      </>
    );
  }