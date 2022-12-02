import React, { useState } from "react";
import "../Style/Auth.css"
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../Utils/Requestoptions";
import { TextField } from "../Compenent/TextField";
import { validatelogin } from "../Utils/Yupvalidation";
import { Form, Formik } from "formik";
import CheckFilled from "../Compenent/CheckFilled";
import { writeStorage, useLocalStorage } from '@rehooks/local-storage';
import { validateregister } from "../Utils/Yupvalidation";
import { Button, Card } from "@blueprintjs/core";

export default function Auth() {
    const [display, setDisplay] = useState({
        name: "login",
        initialValues: {
            email: '',
            password: '',
            toggle: false
        }, validate: validatelogin
    });

    const navigate = useNavigate()
    const [token] = useLocalStorage('jwt')

    function handlechange() {
        if (display.name === "register") {
            setDisplay(
                {
                    name: "login",
                    initialValues: {
                        email: '',
                        password: '',
                        toggle: false
                    }, validate: validatelogin
                }
            )
        }
        if (display.name === "login") {
            setDisplay({
                name: "register",
                initialValues: {
                    email: '',
                    password: '',
                    confirmPassword: ''
                }, validate: validateregister
            })
        }
    }


    async function fetch(values, display) {
        let data = null;
        try {
            if (display === 'login') {
                data = await axios.request(auth({
                    url: '/api/auth/local', data: {
                        identifier: values.email,
                        password: values.password
                    }
                }))
            }

            if (display === 'register') {
                data = await axios.post('https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/auth/local/register', {
                    username: values.email,
                    email: values.email,
                    password: values.password
                })
            }
            writeStorage('jwt', data.data.jwt)
            navigate('/Profile')
        } catch (error) {
            console.error(error)
        }
    }


    if (token) {
        return <Navigate to="/Profile" replace={false} />
    } else {
        return (
            <div className="Login_Registration">
                <Card className="">
                    <div style={{ width: "100%", display: "flex" }}>
                        <Button onClick={handlechange} style={{ width: "100%" }} disabled={display.name === 'login' ? true : false} >Login</Button>
                        <Button onClick={handlechange} style={{ width: "100%" }} disabled={display.name === 'register' ? true : false} >Registration</Button>
                    </div>
                    <div>
                        <div className="Login">
                            <Formik
                                initialValues={display.initialValues}
                                validationSchema={display.validate}
                                onSubmit={values => fetch(values, display.name)}
                            >
                                {formik => (
                                    display.name === "login" ? <Login /> : <Register />
                                )}
                            </Formik>
                        </div>


                    </div>
                </Card >
            </div >
        )
    }
}

export function Login() {
    return (
        <div>
            <h1 className="Login_text">Login</h1>
            <Form>
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <CheckFilled className="display-flex justify-content-space-between" label="Remember me" name="toggle" type="checkbox" />
                <div className='Login_buttons'>
                    <Button type="submit">Login</Button>
                    <Button type="reset">Reset</Button>
                </div>
            </Form>
        </div>
    )
}

export function Register() {
    return (
        <div className='Login_box'>
            <h1 className="Login_text">Registration</h1>
            <Form>
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <TextField label="Confirm Password" name="confirmPassword" type="password" />
                <div className='Login_buttons'>
                    <Button type="submit">Register</Button>
                    <Button type="reset">Reset</Button>
                </div>
            </Form>
        </div>
    )
}