

import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Auth(props) {
     console.log('kown',props)
     const [email, setEmail] = useState('');
    const [name, setName] = useState('');
     const [reqVal, setreqVal] = useState([])
     const navigate = useNavigate();

     const CreateWal = async () => {
        
           var keyphrase =  props.keyphrase
           var password = props.password
           const data  = {
                keyphrase,
                password,
                email,
                name
           }
    
            // const TOKEN_STORAGE_KEY = 'token';
            // const token = Cookies.get(TOKEN_STORAGE_KEY);
            // axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
            const res = await axios.post('https://nurbansports.com/expertapi/public/create', data);
            setreqVal(res)
            if(reqVal.status === 200){
                console.log('navigate')
                navigate("/home");
            }
    }

     console.log('request value',reqVal)


    return (
        <>
            <Container fluid>
                <div className="roomfac fontReg">
                    <div className="ape-text">
                       <h3> Welcome  WAPEH Wallet </h3>
                       </div>
                       <div className="ape-text">
                        <p>A Secure Decentralize Wallet with Backup restore </p>
                        <h6>fill in the boxs for backup</h6>
                    </div>
                    <div className="innerdiv">
                    <input  type="text" placeholder="Full Name" onChange={(e) => { setEmail(e.target.value) }} value={email}  />
                    </div>
                    <div className="innerdiv">
                    <input  type="Email" placeholder="email" onChange={(e) => { setName(e.target.value) }} value={name}  />
                    </div>
                    {/* <div className="innerdiv">
                    <input type="password" placeholder="Your initial password" />
                    </div> */}
                   
                    <div className="innerdiv">
                       <button onClick={CreateWal}>Create Wallet</button>
                    </div>
                </div>
            </Container>
        </>
    );
  }
