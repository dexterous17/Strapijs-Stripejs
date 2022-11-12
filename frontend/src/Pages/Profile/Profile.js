import React, { useEffect, useState } from "react";
import { changebox, changedata } from "./Profilefunctions";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { removeuser } from "../../reducers/rootReducer";
import MoonLoader from "react-spinners/MoonLoader";
import token from "../../Utils/Token";
import { authget, authreceive } from "../../Utils/Requestoptions";
import { Formik, Form } from "formik";
import { TextField } from "../../Compenent/TextField";
import { validatechangepassword } from '../../Compenent/Login/Yupvalidation'


export default function Profile() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    function handlelogout() {
        dispatch(removeuser())
        navigate("/")
    }

    if (token) {
        return (<Main handlelogout={handlelogout} />)
    } else { return (<Navigate to="/" replace={false} />) }
}



export function Main({ handlelogout }) {
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState()

    async function fetch() {
        await axios.request(authget('/api/profilefetch')).then(function (response) {
            changedata(setData, response)
        })
    }

    useEffect(() => {
        fetch()
    }, [])

    if (!data) {
        return (<MoonLoader color="#008cff" cssOverride={{}} loading size={100} speedMultiplier={1} />)
    } else {
        return (
            <div className="Profile">
                {!edit ? <Profiledata edit={edit} setEdit={setEdit} fetch={fetch} data={data} /> : <Editprofile edit={edit} setEdit={setEdit} fetch={fetch} data={data} setData={setData} />}
                <Changepassword />
                <div>
                    <button onClick={handlelogout}>Log out</button>
                </div>
            </div>
        )
    }
}

export function Profiledata({ edit, setEdit, data }) {

    function changebox(edit) {
        setEdit(!edit)
        console.log(edit)
    }

    return (
        <div className="Profiledata">
            <input type="button" onClick={() => changebox(edit, setEdit)} name="Edit" value="Edit" />
            <div>
                <div><div>Name</div><input type='text' disabled value={data?.Name} readOnly /></div>
                <div><div>Middle Name</div><input type='text' disabled value={data?.MiddleName} readOnly /></div>
                <div><div>Last Name</div><input type='text' disabled value={data?.LastName} readOnly /></div>
                <div><div>Address</div><input type='text' disabled value={data?.Address} readOnly /></div>
            </div>
        </div>
    )
}

export function Editprofile({ edit, setEdit, setData, data }) {

    const [name, setname] = useState(data?.Name);
    const [middlename, setmiddlename] = useState(data?.MiddleName);
    const [lastname, setlastname] = useState(data?.LastName);
    const [address, setaddress] = useState(data?.Address);

    async function send() {
        await axios.request(authreceive({ url: '/api/profileupdate', data: { Name: name, MiddleName: middlename, LastName: lastname, Address: address } })).then(function (response) {
            changedata(setData, response)
        })
    }

    return (
        <div className="Profiledata">
            <input type="button" onClick={() => changebox(edit, setEdit)} label="Edit" value="Edit" />
            <div>
                <div><div>Name</div><input name='text' value={name} onChange={(e) => setname(e.target.value)} /></div>
                <div><div>Middle Name</div><input type='text' value={middlename} onChange={(e) => setmiddlename(e.target.value)} /></div>
                <div><div>Last Name</div><input type='text' value={lastname} onChange={(e) => setlastname(e.target.value)} /></div>
                <div><div>Address</div><input type='text' value={address} onChange={(e) => setaddress(e.target.value)} /></div>
                <button onClick={send}>Save edit</button>
            </div>
        </div>
    )
}


export function Changepassword() {

    async function fetch(values) {
        await axios.request(authreceive({ url: "/api/auth/change-password", data: { currentPassword: values.password, password: values.newpassword, passwordConfirmation: values.newpassword } }))
            .then(function (response) {
                localStorage.setItem('jwt', response.data.jwt)
            })
    }

    return (
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
                        <TextField className={'display-flex'} label="Current Password" name="password" type="password" />
                        <TextField className={'display-flex'} label="Confirm Password" name="confirmpassword" type="password" />
                        <TextField className={'display-flex'} label="New Password" name="newpassword" type="password" />
                        <TextField className={'display-flex'} label="Confirm New Password" name="confirmnewpassword" type="password" />
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}