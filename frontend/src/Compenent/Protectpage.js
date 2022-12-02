import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from '@rehooks/local-storage';


const Protectpage = (props) => {
    const [token] = useLocalStorage('jwt')
    if (!token) {
        return <Navigate to="/Login" replace={false} />
    } else {
        return props.children
    }
}

export default Protectpage