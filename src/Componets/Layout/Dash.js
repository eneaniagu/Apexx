
import {Row, Col, Container, Button } from "react-bootstrap"
import Nav from "../Nav";
import Home from '../Wallet/Home'
import Sidebar from "./Sidebar";
import CoinBal from "../Wallet/CoinBal";

export default function Dash() {
    return (
      <>
      <Nav />
      <CoinBal />
      <Sidebar/>
        <Home />
      </>
    );
  }