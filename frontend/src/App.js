import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Main from './Main'
import './Style/Header.css'
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Page404 from "./Pages/Page404";
import Footer from './Compenent/Footer'
import Layout from "./Compenent/Layout";


export default function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route excat path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </>
  );
}