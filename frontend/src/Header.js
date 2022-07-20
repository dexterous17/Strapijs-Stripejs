import React from "react";
import "./Style/Header.css"
import companylogo from './Assets/Amazonlogo.png'
import {FaSearch} from "react-icons/fa";
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'

export default function Header() {
    return (
        <header className="Header">
            <div className="Header_Multi_box_1">
                <img src={companylogo} alt="Logo" className="Logo" />
                <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><FaSearch/></button>
            </div>
            <div className="Header_Multi_box_2">
            <div className="cart">    
                <BsCart className="badge" fontSize="1.5em" color="white"/>
                4
            </div>
            <div>    
                <AiOutlineUser fontSize="1.5em" color="white"/>
                </div>
            </div>
        </header>
    );
}