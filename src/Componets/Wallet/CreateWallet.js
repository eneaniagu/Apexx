

import {Row, Col, Container, Button } from "react-bootstrap"   
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import KeyPhrase  from "./KeyPhrase"
import Cookies from 'js-cookie';





export default function CreateWallet() {
    
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [err, setErr ]= useState('');
    const [navigate, setNavigate] = useState('')
    
   const linkm = () => {
       HTMLFormControlsCollection.log('wlcome');
   }


    const Continueup = async () => {
        if(password !== confirm){
           setErr('Your password do not Match')

        }else{
            setErr('')
            setNavigate('next')
            // const TOKEN_STORAGE_KEY = 'token';
            // const token = Cookies.get(TOKEN_STORAGE_KEY);
            // axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
            // const res = await axios.post('https://nurbansports.com/expertapi/public/create');
        }
   

        // setFeed(res.data.data.data)
    }

     
    return (
        <>
            <Container fluid>
                {
                    navigate ? 

                    <>
                     <KeyPhrase />
                    </>
                    :
                   <>
                   <div className="roomfac fontReg">
                    <div className="ape-text">
                       <h3> Welcome Apexx Wallet </h3>
                       </div>
                       <div className="ape-text">
                        <p>A Secure Decentralize Wallet</p>
                    </div>

                    <div className="err">
                         {
                             err ?
                             <>
                                <p className="errmsg">
                                {err}
                                </p>
                             </>
                             :
                             <>
                            
                             </>

                         }
                    </div>
                    <div className="innerdiv">
                    <input  type="password" placeholder="password"  onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    </div>
                    <div className="innerdiv">
                    <input  type="password" placeholder="confirm Password"  onChange={(e) => { setConfirm(e.target.value) }} value={confirm}/>
                    </div>
                    <div className="innerdiv">
                       <button onClick={Continueup} className="">Continue</button>
                    </div>
                </div>
                   </>
                }
            </Container>
        </>
    );
  }