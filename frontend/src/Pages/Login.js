import React, { useState } from "react";
import "../Style/Login.css"
import Loginform from "../Compenent/Loginform";
import Register from "../Compenent/Registerform";

export default function Login() {

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
            <div>
                <button onClick={handlechange}>Login</button>
                <button onClick={handlechange}>Registration</button>
            </div>
            <div>
                <Loginform display={display} />
                <Register display={display} />
            </div>
        </div>
    )
}