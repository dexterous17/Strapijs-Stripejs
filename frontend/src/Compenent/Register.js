import React, { useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from "./TextField";
import axios from "axios";

export default function Register({ display }) {

    async function fetch(values) {
        await axios.post('https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/auth/local/register', {
            username: values.email,
            email: values.email,
            password: values.password
        }).then((data) => {
            console.log(data)
        }
        ).catch(err => {
            console.error(err)
        })
    }


    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })

    return (
        <div className={`Registration ${display ? null : 'display-deactive'}`}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword:''
                }}
                validationSchema={validate}
                onSubmit={values => fetch(values)}
            >
                {formik => (
                    <div className='Login_box'>
                        <h1 className="Login_text">Registration</h1>
                        <Form>
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <TextField label="Confirm Password" name="confirmPassword" type="password"/>
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