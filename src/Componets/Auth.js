

import {Row, Col, Container, Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form'

export default function Auth() {
    return (
        <>
            <Container fluid>
                <div className="roomfac fontReg">
                    <div className="ape-text">
                       <h3> Welcome Apeh Wallet </h3>
                       </div>
                       <div className="ape-text">
                        <p>A Secure Decentralize Wallet with Backup restore </p>
                        <h6>fill in the boxs for backup</h6>
                    </div>
                    <div className="innerdiv">
                    <input  type="text" placeholder="Full Name" />
                    </div>
                    <div className="innerdiv">
                    <input  type="Email" placeholder="email" />
                    </div>
                   
                   
                    <div className="innerdiv">
                       <button>Submits</button>
                    </div>
                </div>
            </Container>
        </>
    );
  }