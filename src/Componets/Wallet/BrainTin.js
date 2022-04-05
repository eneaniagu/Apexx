

import {Row, Col, Container, Button } from "react-bootstrap"   
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Cookies from 'js-cookie';
import {key} from '../../Key'
import { Next } from "react-bootstrap/esm/PageItem";
import Auth from "../Auth";



export default function BrainTin(props) {
    console.log("sk",props)
    
    const [keyPhrase, setkeyPhrase] = useState('');
    const [confirm, setConfirm] = useState('');
    const [secnext, setsecNext] = useState('')
    const [Val, setVal] = useState([])

   

    const savedata = async () => {
         if(keyPhrase === props.keyvalue) {
             console.log('yes')
             setsecNext('next')
         }else{
            setsecNext('')
             console.log("ssjsjjjjj")
         }

    //    console.log(bonn)
        // setFeed(res.data.data.data)
    }



 


 
    

    return (
        <>
        
                {
               secnext ? 
                    <>
                <Auth />
                    </>

                    : 
                    <>
                    <div className="roomfac fontReg">
                    <div className="ape-text">
                       <h3> Apexx Wallet </h3>
                       </div>
                       
                    <div className="warning">
                <p> 
                   Select your key Phrase according the prevoius arrange your copied or listed down.
        
                </p>
                </div>
    
                   
                    <div className="innerdiv">
                    <textarea  type="password" placeholder="Key Phrase"  onChange={(e) => { setkeyPhrase(e.target.value) }} value={keyPhrase} >
                        </textarea>
                    </div>
                    
                    <div className="innerdiv">
                       <button onClick={savedata} className="">Next</button>
                    </div>
                </div>


                    </>
                }        
        </>
    );
  }