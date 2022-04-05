

import {Row, Col, Container, Button } from "react-bootstrap"   
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Cookies from 'js-cookie';
import {key} from '../../Key'
import { Next } from "react-bootstrap/esm/PageItem";
import BrainTin from "./BrainTin"


export default function KeyPhrase(props) {
     console.log("password",props.password)
    
    const [keyPhrase, setkeyPhrase] = useState('');
    const [confirm, setConfirm] = useState('');
    const [next, setNext] = useState('')
    const [Val, setVal] = useState('')

   

    const createwallet = async () => {
      var bonn =   document.getElementById('keys_id').value
       setVal(bonn);
       setNext("value")

    //    console.log(bonn)
        // setFeed(res.data.data.data)
    }

    console.log(Val)

function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


 
var randomWords = require('random-words');

 var vin =randomWords({ exactly: 12, join: ' ' })
 
 const array = [];
     
for(var x=0; x<3; x++){

   var Keys = (randomWord(key));
   
}


 
    

    return (
        <>
        
                {
                    next ? 
                    <>
                    <BrainTin keyvalue={Val} password={props.password} />
                    </>

                    : 
                    <>
                    <div className="roomfac fontReg">
                    <div className="ape-text">
                       <h3> Apexx Wallet </h3>
                       </div>
                       
                    <div className="warning">
                <p> 
                    write down or copy these words in the right order and save them somewhere safe.
                    <br/> 
                     do not share your secret phrase
                </p>
                </div>
                
                <div className="keys">
                <textarea disabled className="keyphrase-v" id="keys_id" > 
                {
                      vin
                    }
                </textarea>
                </div>
                   
                    {/* <div className="innerdiv">
                    <textarea  type="password" placeholder="Key Phrase"  onChange={(e) => { setkeyPhrase(e.target.value) }} value={keyPhrase} >
                        </textarea>
                    </div> */}
                    
                    <div className="innerdiv">
                       <button onClick={createwallet} className="">Next</button>
                    </div>
                </div>


                    </>
                }        
        </>
    );
  }