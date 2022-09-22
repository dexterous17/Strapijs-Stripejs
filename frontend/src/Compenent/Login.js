import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from "./TextField";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { adduser } from "../reducers/rootReducer";
import CheckFilled from "./CheckFilled";


export default function Login({ display }) {

    const dispatch = useDispatch()


    async function fetch(values) {
        console.log(values)
        await axios.post('https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/auth/local', {
            identifier: values.email,
            password: values.password
        }).then((data) => {
            console.log(data.data)
            dispatch(adduser(data.data.jwt, data.data.user.email))
            localStorage.setItem('jwt', data.data.jwt)
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
    })

    return (
        <div className="Login">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    toggle: false
                }}
                validationSchema={validate}
                onSubmit={values => fetch(values)}
            >
                {formik => (
                    <div className={`Login_box ${!display ? null : 'display-deactive'}`}>
                        <h1 className="Login_text">Login</h1>
                        <Form>
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <CheckFilled label="Remember me" name="toggle" type="checkbox" />
                            <div className='Login_buttons'>
                                <button className="btn btn-dark mt-3" type="submit">Login</button>
                                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}