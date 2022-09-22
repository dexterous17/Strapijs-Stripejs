import React from "react";
import { Navigate } from "react-router-dom";

const Protectpage = (props) => {
    const token = localStorage.getItem('jwt')
    if (!token) {
        return <Navigate to="/Login" replace={false} />
    } else {
        return props.children
    }
}

export default Protectpage