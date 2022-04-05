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


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateWallet />} />
      <Route path="login" element={<AuthIn />} />
      <Route path='/swap' element={<Home/>}/>
      <Route path="/addcoin" element={<Pooling />}/>
      <Route path="/notify" element={<Notify />} />
      <Route path="/settings" element={<Settings />} /><CreateWallet />
      <Route path="/createWallet" element={<Auth/>} />
      <Route path="/settings" element={<Settings />} />
      </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
