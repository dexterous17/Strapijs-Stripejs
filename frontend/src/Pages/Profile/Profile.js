import React, { useEffect, useState } from "react";
import { changebox, changedata } from "./Profilefunctions";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { removeuser } from "../../reducers/rootReducer";
import MoonLoader from "react-spinners/MoonLoader";
import { token } from "../../Utils/Token";

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
        let headersList = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        let reqOptions = {
            url: "https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/profilefetch",
            method: "POST",
            headers: headersList
        }
        await axios.request(reqOptions).then(function (response) {
            changedata(setData, response)
        })
    }

    useEffect(() => {
        fetch()
        console.log(data)
    }, [])

    if (!data) {
        return (<MoonLoader color="#008cff" cssOverride={{}} loading size={100} speedMultiplier={1} />)
    } else {
        return (
            <div className="Profile">
                {!edit ? <Profiledata edit={edit} setEdit={setEdit} fetch={fetch} data={data} /> : <Changepassword edit={edit} setEdit={setEdit} fetch={fetch} data={data} setData={setData} />}
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

export function Changepassword({ edit, setEdit, setData, data }) {



    async function send({ name, middlename, lastname, address }) {
        setData({ Name: name, MiddleName: middlename, LastName: lastname, Address: address })
        await axios.get('https://dexterous17-strapijs-stripejs-7xx49gjw2wqr4-1338.githubpreview.dev/api/products?populate=*')
    }

    return (
        <div className="Profiledata">
            <input type="button" onClick={() => changebox(edit, setEdit)} label="Edit" value="Edit" />
            <div>
                <div><div>Name</div><input name='text' value={data?.Name} /></div>
                <div><div>Middle Name</div><input type='text' value={data?.MiddleName} /></div>
                <div><div>Last Name</div><input type='text' value={data?.LastName} /></div>
                <div><div>Address</div><input type='text' value={data?.Address} /></div>
                <button onClick={send}>Save edit</button>
            </div>
        </div>
    )
}