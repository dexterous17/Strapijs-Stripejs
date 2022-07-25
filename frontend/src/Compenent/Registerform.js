import React, { useState } from "react";
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from "./TextField";

export default function Register({ display }) {

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword,confirmPassword] = useState()



    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
    })

    function handleLogin(e) {
        e.preventDefault();
        setLogin(e.target.value)
        console.log(e.target.value)
    }

    function handlePassword(e) {
        e.preventDefault();
        setPassword(e.target.value)
    }

    async function fetch(e) {
        e.preventDefault();

    }
    return (
        <div className={`Registration ${display?null:'display-deactive'}`}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validate}
                onSubmit={fetch}
            >
                {formik => (
                    <div className='Login_box'>
                        <h1 className="Login_text">Registration</h1>
                        <Form>
                            <TextField label="Email" name="email" type="email" onChange={handleLogin} />
                            <TextField label="Password" name="password" type="password" onChange={handlePassword} />
                            <TextField label="Confirm password" name="password" type="password" onChange={handlePassword} />
                            <div className='Login_buttons'>
                                <button className="btn btn-dark mt-3" type="submit">Register</button>
                                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}