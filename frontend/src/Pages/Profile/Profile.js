import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate, Navigate } from "react-router-dom";
import { authget, authreceive } from "../../Utils/Requestoptions";
import { Formik, Form } from "formik";
import { TextField } from "../../Compenent/TextField";
import { validatechangepassword } from '../../Utils/Yupvalidation'
import { deleteFromStorage, useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { Button, Card, Spinner } from "@blueprintjs/core";

export default function Profile() {

    const [token] = useLocalStorage('jwt')

    if (token) {
        return (<Main token={token} />)
    } else { return <Navigate to="/" replace={false} /> }
}



export function Main() {
    const [token] = useLocalStorage('jwt')
    const navigate = useNavigate();


    function handlelogout() {
        deleteFromStorage('jwt')
        navigate("/")
    }

    return (
        <Card interactive={false} elevation={2}>
            <div className="Profile  display-flex flex-direction">
                <div className="box_1 display-flex justify-content-space-around">
                    <Profiledata fetch={fetch} token={token} />
                    <Changepassword token={token} />
                </div>
                <div className="box_2 display-flex justify-content">
                    <Button text="Log out" intent="danger" onClick={handlelogout} />
                </div>
            </div>
        </Card>
    )
}

export function Profiledata() {
    const [profiledata, setProfileData] = useState()
    const [token] = useLocalStorage('jwt')

    useEffect(() => {
        async function fetch() {
            await axios.request(authget({ url: '/api/profilefetch', token: token })).then(function (response) {
                setProfileData({
                    Name: response?.data?.Name,
                    MiddleName: response?.data?.MiddleName,
                    LastName: response?.data?.LastName,
                    Address: response?.data?.Address
                })
            })
        }
        fetch()
    }, [])



    return (
        <Card interactive={true} elevation={2}>
            {
                profiledata ? <Profileform profiledata={profiledata} /> : <Spinner intent="primary" />
            }
        </Card>
    )
}



export function Profileform(profiledata) {
    const [disabled, setDisabled] = useState(true)
    const [token] = useLocalStorage('jwt')

    async function fetch(values) {
        await axios.request(authreceive({ token: token, url: '/api/profileupdate', data: { Name: values.Name, MiddleName: values.MiddleName, LastName: values.LastName, Address: values.Address } }))
    }

    function handleClick() {
        setDisabled(!disabled)
    }

    return (
        <Formik
            initialValues={profiledata.profiledata}
            enableReinitialize={true}
            onSubmit={values => fetch(values)}
        >
            {formik => (
                <div>
                    <div className={'display-flex justify-content-space-between align-items'}>
                        <h1 className="Changepassword_text">Profile</h1>
                        <Button text="Edit" onClick={handleClick} />
                    </div>
                    <Form>
                        <TextField className={'display-flex justify-content-space-between'} label="Name" name="Name" type="text" disabled={disabled} />
                        <TextField className={'display-flex justify-content-space-between'} label="Middle Name" name="MiddleName" type="text" disabled={disabled} />
                        <TextField className={'display-flex justify-content-space-between'} label="Last Name" name="LastName" type="text" disabled={disabled} />
                        <TextField className={'display-flex justify-content-space-between'} label="Address" name="Address" type="text" disabled={disabled} />
                        <Button text="Submit" type="submit" disabled={disabled} />
                    </Form>
                </div>
            )
            }
        </Formik >
    )
}


export function Changepassword() {
    const [token] = useLocalStorage('jwt')
    async function fetch(values) {
        await axios.request(authreceive({ token: token, url: "/api/auth/change-password", data: { currentPassword: values.password, password: values.newpassword, passwordConfirmation: values.newpassword } }))
            .then(function (response) {

                writeStorage('jwt', response.data.jwt)
            }).catch(err => console.log(err))
    }

    return (
        <Card interactive={true} elevation={2}>
            <Formik
                initialValues={{
                    password: '',
                    confirmpassword: '',
                    newpassword: '',
                    confirmnewpassword: ''
                }}
                validationSchema={validatechangepassword}
                onSubmit={values => fetch(values)}
            >
                {formik => (
                    <div>
                        <h1 className="Changepassword_text">Change password</h1>
                        <Form>
                            <TextField className={'display-flex justify-content-space-between'} label="Current Password" name="password" type="password" />
                            <TextField className={'display-flex justify-content-space-between'} label="Confirm Password" name="confirmpassword" type="password" />
                            <TextField className={'display-flex justify-content-space-between'} label="New Password" name="newpassword" type="password" />
                            <TextField className={'display-flex justify-content-space-between'} label="Confirm New Password" name="confirmnewpassword" type="password" />
                            <Button text="Submit" type="submit" />
                        </Form>
                    </div>
                )}
            </Formik>
        </Card>
    )
}