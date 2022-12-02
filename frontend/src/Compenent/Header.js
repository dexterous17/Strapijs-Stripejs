import React from "react";
import "../Style/Header.css"
import companylogo from '../Assets/Amazonlogo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navbar, Icon } from '@blueprintjs/core'


export default function Header() {

    return (
        <Navbar>
            <Navbar.Group align={"left"}>
                <Logo />
                <Search />
            </Navbar.Group>
            <Navbar.Group align={"right"}>
                <Orders />
                <Navbar.Divider />
                <Link to={'/Cart'}>
                    <Icon icon={"shopping-cart"} size={25} />
                </Link>
                <Navbar.Divider />
                <Login />
            </Navbar.Group>
        </Navbar>
    );
}

export function Logo() {
    return (
        <Link to={'/'}>
            <img src={companylogo} alt="Logo" className="Logo" />
        </Link>
    )
}

//user

export function Login() {
    return (
        <Link to={'/Login'}>
            <Icon icon={'user'} size={23.5} />
        </Link>
    )
}

export function Search() {
    return (
        < div className="bp4-input-group" >
            <Icon icon={'search'} />
            <input className="bp4-input" type="search" placeholder="Search input" dir="auto" />
        </div >
    )
}


export function Orders() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={'/Orders'} style={{ textDecoration: 'none' }}>
                Orders
            </Link>
        </div>
    )
}

export function Cart() {
    const cartlength = useSelector(state => state.cartItems.length)
    return (<Link to={'/Cart'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <BsCart className="badge" fontSize="1.5em" color="white" />
        <div>
            {
                cartlength
            }
        </div>
    </Link>)
}