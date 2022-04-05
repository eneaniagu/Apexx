

import Nav  from "../Nav";
import { IoIosHelpCircleOutline} from "react-icons/io"
import Pool from '../Wallet/Pooling'
import {MdOutlineGeneratingTokens} from 'react-icons/md'
import { BiBitcoin } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import Atom  from '/node_modules/cryptocurrency-icons/32/color/atom.png'

export default function Settings() {
    return (
      <>

        <div className="hr">
            <div className="list-e">
                <h2 className="gine">Lists</h2>
                <h2 className="gine-3">Token</h2>
            </div>
            <div className="">
                <input type="text" name="text" value="https://apexx.com/wallet/user/auth?mrn/coinvalue" disabled className="gee" /> 
            </div>

            <div className="time">
                <div className="landing">
                <div className="boren">
                    <MdOutlineGeneratingTokens className="t-coin"/><h3 className="list-coin">Gemini Token List</h3>
                    <div className="nest">
                    <div className="button r" id="button-9">
          <input type="checkbox" className="checkbox" />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
                    </div>
                   
                </div>
                <p className="kin">21 tokens ....</p>
                </div>
                
            </div>


            <div className="time">
                <div className="landing">
                <div className="boren">
                    <FaEthereum className="t-coin"/><h3 className="list-coin">Gemini Token List</h3>
                    <div className="nest">
                    <div className="button r" id="button-9">
          <input type="checkbox" className="checkbox" />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
                    </div>
                   
                </div>
                <p className="kin">21 tokens ....</p>
                </div>
                
            </div>
     
            <div className="time">
                <div className="landing">
                <div className="boren">
                <img src={Atom} /> 
                    {/* <BiBitcoin className="t-coin"/><h3 className="list-coin">Gemini Token List</h3> */}
                    <div className="nest">
                    <div className="button r" id="button-9">
          <input type="checkbox" className="checkbox" />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
                    </div>
                   
                </div>
                <p className="kin">21 tokens ....</p>
                </div>
                
            </div>

        </div>
        

      </>
    );
  }