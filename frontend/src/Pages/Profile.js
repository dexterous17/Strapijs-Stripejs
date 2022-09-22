import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { removeuser } from "../reducers/rootReducer";
export default function Profile() {
    const dispatch = useDispatch()

    const [render, setRender] = useState(<div>
        <button onClick={e => handlelogout()}>Log out</button>
    </div>)

    function handlelogout() {
        dispatch(removeuser())
        setRender(<Navigate to="/" replace={false} />)
    }

    return (
        render
    )
}