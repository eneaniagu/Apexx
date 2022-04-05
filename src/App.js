import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 import Auth from './Componets/Auth'
import AuthIn from './Componets/AuthIn';
import Home from './Componets/Layout/Home'
import Pooling from './Componets/Layout/Pool'
import Notify from './Componets/Layout/Notify'
import Settings from './Componets/Layout/Settings';
import CreateWallet from './Componets/Layout/CreateWall';
import Dash from './Componets/Layout/Dash';
import Sendz from './Componets/Layout/Send';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateWallet />} />
      <Route path="login" element={<AuthIn />} />
      <Route path='/home' element={<Dash/>}/>
      <Route path='/swap' element={<Home/>}/>
      <Route path="/addcoin" element={<Pooling />}/>
      <Route path="/notify" element={<Notify />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/createWallet" element={<CreateWallet />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/send" element={<Sendz />} />
      </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
