import React from "react";
import "../Style/Header.css"
import companylogo from '../Assets/Amazonlogo.png'
import { FaSearch } from "react-icons/fa";
import { AiOutlineUser } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
    const cartlength = useSelector(state => state.cartItems.length)
    return (
        <header className="Header">
            <div className="Header_Multi_box_1">
                <Link to={'/'}>
                    <img src={companylogo} alt="Logo" className="Logo" />
                </Link>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><FaSearch /></button>
            </div>
            <div className="Header_Multi_box_2">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to={'/Orders'} style={{ textDecoration: 'none' }}>
                        Orders
                    </Link>
                </div>
                <div className="cart">
                    <Link to={'/Cart'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <BsCart className="badge" fontSize="1.5em" color="white" />
                        <div>
                            {
                                cartlength
                            }
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to={'/Login'}>
                        <AiOutlineUser fontSize="1.5em" color="white" />
                    </Link>
                </div>
            </div>
        </header>
    );
}