
import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'

export default function AuthIn() {
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
                   
                    <div className="innerdiv">
                    <input  type="username" placeholder="Username" />
                    </div>
                   
                    <div className="innerdiv">
                    <input type="password" placeholder="password" />
                    </div>
                        
                    <div className="innerdiv">
                       <button>Submits</button>
                    </div>
                    <div>
                           <p className="link-text">
                             Dont have a wallet 
                           </p>
                           <div className="go">
                            <p style={{
                              color: 'white'
                            }}>Restore account?</p>
                            <p className="text-sec"> import using account seed phrase </p>
                           </div>
                         </div>
                </div>
            </Container>
        </>
      </>
    );
  }