import React from "react";
import { Navigate } from "react-router-dom";
import token from '../Utils/Token'


const Protectpage = (props) => {
    if (!token) {
        return <Navigate to="/Login" replace={false} />
    } else {
        return props.children
    }
}

export default Protectpage