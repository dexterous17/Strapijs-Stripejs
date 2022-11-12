import React, { useState } from "react";
import "../Style/Auth.css"
import Login from "../Compenent/Login/Login";
import Register from "../Compenent/Register";
import { Navigate } from "react-router-dom";
import token from "../Utils/Token";
export default function Auth() {
    const [display, setDisplay] = useState(false);


    function handlechange() {
        if (!display) {
            setDisplay(!display)
        } else {
            setDisplay(!display)
        }
    }

    if (token) {
        return <Navigate to="/Profile" replace={false} />
    } else {
        return (
            <div className="Login_Registration">
                <div className="">
                    <div className="Auth-form-buttons">
                        <button onClick={handlechange}>Login</button>
                        <button onClick={handlechange}>Registration</button>
                    </div>
                    <div>
                        <Login display={display} />
                        <Register display={display} />
                    </div>
                </div>
            </div>
        )
    }
}