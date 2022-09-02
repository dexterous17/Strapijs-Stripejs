import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main'
import './Style/Header.css'
import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";
import Page404 from "./Pages/Page404";
import Checkout from './Pages/Checkout'
import Header from './Compenent/Header'
import Footer from './Compenent/Footer'
import Sucesss from "./Pages/Success";
import './Style/App.css'
import Orders from "./Pages/Orders";


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
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Success" element={<Sucesss />} />
            <Route path="/Orders" element={<Orders/>} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}