import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
import Header from "./Header";
import Main from './Main'
import Footer from './Footer'
import './Style/Header.css'
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";


export default function App() {

  const [header, setHeader] = useState()

  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </>
  );
}