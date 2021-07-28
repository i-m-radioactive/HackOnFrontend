import React, { useState, useEffect } from 'react'
import styleLogin from '../styles/login.module.scss'
import { Button, ButtonGroup } from "@chakra-ui/react"
import styleDashboard from '../styles/dashboard.module.scss'
import ViewRequest from '../components/ViewRequest'
import ViewPost from '../components/ViewPost'
import ManageProfile from '../components/ManageProfile'
import VPostForm from '../components/VPostForm'
import URequestForm from '../components/URequestForm'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    RadioGroup,
    HStack,
    Radio,
    Select
} from "@chakra-ui/react"

const Dashboard = (props) => {
    const [view, setView] = useState("CR");

    useEffect(() => {
        if (!props.user) {
            window.localStorage.setItem("view", "MP")
        }
        if (window.localStorage.getItem("view")) {
            setView(window.localStorage.getItem("view"))
        }

    }, [])

    const saveView = () => {
        console.log(view);
        localStorage.setItem("view", view);
    }

    let xyz = "null";
    if (view == "CR") {
        if (props.user.role === "VLT") {
            xyz = <VPostForm />
        } else if (props.user.role === "USER") {
            xyz = <URequestForm />
        }


    } else if (view == "VR") {


        xyz = <ViewRequest />
    } else {
        // profile edit 

        xyz = <ManageProfile />
    }



    return (



        <div className={styleDashboard.Dashboard}>


            <div className={styleDashboard.container2} >
                <Button onClick={() => { setView("CR"); localStorage.setItem("view", "CR"); }}> Create Resource </Button>
                <Button onClick={() => { setView("VR"); localStorage.setItem("view", "VR"); }}> View Request</Button>
                <Button onClick={() => { setView("MP"); localStorage.setItem("view", "MP"); }}> Manage profile</Button>
            </div>
            <div className={styleDashboard.container1}>
                {xyz}

            </div>
        </div>
    )
}

export default Dashboard;
