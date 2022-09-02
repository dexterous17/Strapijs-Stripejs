import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Orders() {
    const token = useSelector(state => state.user.jwt)
   
    useEffect(()=>{
        
    },[])

    if (!token) {
        return <Navigate to={"/Login"} replace />
    } else {
        return (
            <>

            </>
        )
    }

}