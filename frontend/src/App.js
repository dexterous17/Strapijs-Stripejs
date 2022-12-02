import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main'
import './Style/Header.css'
import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";
import Page404 from "./Pages/Page404";
import Checkout from './Pages/Checkout'
import Header from './Compenent/Header'
import Sucesss from "./Pages/Success";
import './Style/App.css'
import Orders from "./Pages/Orders";
import Protectpage from "./Compenent/Protectpage";
import Profile from "./Pages/Profile/Profile";
import { Navbar } from "@blueprintjs/core";
import '../src/Style/Footer.css'
export default function App() {
  return (
    <>
      <Router>
        <div className='content-wrap'>
          <Header />
          <Routes>
            <Route excat path="/" element={<Main />} />
            <Route path="/Login" element={<Auth />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Protectpage><Checkout /></Protectpage>} />
            <Route path="/Success" element={<Protectpage><Sucesss /></Protectpage>} />
            <Route path="/Orders" element={<Protectpage><Orders /></Protectpage>} />
            <Route path="/Profile" element={<Protectpage><Profile /></Protectpage>} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}


export function Footer() {
  return (
    <Navbar className="footer" style={
      {
        position: "absolute",
        marginTop: "10px"
      }
    }>
      <div>
        About us
      </div>
      <div>
        Terms and conditions
      </div>
      <div>
        Privacy policy
      </div>
    </Navbar>
  );
}