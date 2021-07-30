import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { ErrorContext } from '../context/errorContext'
import { useAuth } from '../context/authContext'
const UserForm = () => {
    const authContext = useAuth();
    const { setError, setShow } = useContext(ErrorContext);
    const [userData, setUserData] = useState({
        email: `${authContext.user.email}`,
        name: `${authContext.user.displayName}`,
        phone: "",
        pincode: "",
        address: "",
        city: "",
        state: ""
    });

    console.log(authContext.user.displayName)

    useEffect(async () => {
        const res = await axios({
            method: 'post',
            url: 'https://https://arrow-level-raptor.glitch.me/query',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                query: `{
                    user(email:"${authContext.user.email}"){
                        phone
                        pincode
                        address
                        city
                        state
                    }
                    }`,
                variables: {}
            })
        })
        console.log(res)
        if (res.data.data.user) {
            setUserData({
                ...res.data.data.user,
                email: `${authContext.user.email}`,
                name: `${authContext.user.displayName}`
            })
        } else {
            setError(JSON.stringify("Please update all your details."));
            setShow(true);
        }
    }, [])

    const inputHandler = (e) => {
        const newData = { ...userData };
        newData[e.target.name] = e.target.value;
        setUserData(newData);
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(userData)
        console.log(localStorage.getItem("_token"))

        const res = await axios({
            method: 'post',
            url: 'https://https://arrow-level-raptor.glitch.me/mutation',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("_token")
            },
            withCredentials: true,
            data: JSON.stringify({
                query: `mutation{
                createUser(data:{
                    email: "${userData.email}",
                    name: "${userData.name}",
                    phone: "${userData.phone}",
                    pincode: "${userData.pincode}",
                    address: "${userData.address}",
                    city: "${userData.city}",
                    state: "${userData.state}",
                    role: "${"USER"}"
                }){
                error
                msg
                }
            }`,
                variables: {}
            })
        })
        setError(JSON.stringify(res.data.data));
        setShow(true);
    }

    return (
        <>
            <form>
                <div className="div">
                    <label>Name</label>
                    <input name="name" value={userData.name} disabled={true} onChange={inputHandler} />
                </div >
                <div className="div">
                    <label>Email</label>
                    <input name="email" value={userData.email} disabled={true} onChange={inputHandler} />
                </div>
                <div className="div">
                    <label>Phone</label>
                    <input name="phone" value={userData.phone} onChange={inputHandler} />
                </div>
                <div className="div">
                    <label>Pincode</label>
                    <input name="pincode" value={userData.pincode} onChange={inputHandler} />
                </div>
                <div className="div">
                    <label>Address</label>
                    <input name="address" value={userData.address} onChange={inputHandler} />
                </div>
                <div className="div">
                    <label>City</label>
                    <input name="city" value={userData.city} onChange={inputHandler} />
                </div>
                <div className="div">
                    <label>State</label>
                    <input name="state" value={userData.state} onChange={inputHandler} />
                </div>
                <div className="div">
                    <button type="button" onClick={formSubmit} >Submit</button>
                </div>
            </form>
        </>
    )
}

export default UserForm