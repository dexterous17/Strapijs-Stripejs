import React, { useState } from "react";
import "../Style/Auth.css"
import Login from "../Compenent/Login";
import Register from "../Compenent/Register";

export default function Auth() {

    const [display, setDisplay] = useState(false);


    function handlechange() {
        if (!display) {
            setDisplay(!display)
        } else {
            setDisplay(!display)
        }
    }

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