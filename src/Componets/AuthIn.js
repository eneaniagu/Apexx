
import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export default function AuthIn() {

  const [password, setPassword] = useState('');
  const [req, setReq] = useState([]);
  const [reqData, setReqData] = useState('');

  const navigate = useNavigate();


  const Login = async () => {
      
       const data = {
         password
       }
        // const TOKEN_STORAGE_KEY = 'token';
        // const token = Cookies.get(TOKEN_STORAGE_KEY);
        // axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
        const res = await axios.post('https://nurbansports.com/expertapi/public/log', data);
         setReq(res)

         if(req.status === 200){
          navigate("/home");
           Cookies.set('user',JSON.stringify(res.data) );
           var jim = JSON.stringify(res.data)
          
         }else{
          setReqData('Wrong Password')
         }
           
  }

    return (
      <>
                <>
            <Container fluid>
                <div className="roomfac fontReg">
                    <div className="ape-text">
                       <h3> Welcome Apexx Wallet </h3>
                       </div>
                       <div className="ape-text">
                        <p>A Secure Decentralize Wallet</p>
                    </div>
                    <div style={{ marginLeft:"30%"}}>
                      {
                        reqData ?
                        <>
                        <p style={{color: "red"}}>{reqData}</p>
                        </>
                        :
                        <>
                        </>
                      }
                    </div>
                  
                   
                    <div className="innerdiv">
                    <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} value={password}/>
                    </div>
                        
                    <div className="innerdiv">
                       <button onClick={Login}>Submits</button>
                    </div>
                    <div>
                           <div className="go">
                             <Link to="/restore">
                            <p style={{
                              color: 'yellow'
                            }}>Restore account?</p>
                            </Link>
                            <Link to="/phrase">
                            <p className="text-sec"> login using key phrase </p>
                            </Link>
                           </div>
                           <Link to="/">
                      <p className="link-text">
                             Dont have a wallet 
                           </p>
                      </Link>
                         </div>
                </div>
            </Container>
        </>
      </>
    );
  }