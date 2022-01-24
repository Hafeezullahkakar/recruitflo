import React from 'react'
import { Avatar, Dialog } from '@mui/material'
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { BiBasketball } from 'react-icons/bi'
function Popup({state,data}) {
    return (
        <Dialog
            open={state?true:false}
        >
            <div>
                <Avatar/>
                <strong>Tanveer Hussain</strong>
                <p>Comsats islamabad</p>
                <span>
                    <p>GPA: </p>
                    <p>SAT: </p>
                    <p>ACT: </p>
                </span>
                <h1>200:24</h1>
            </div>
            <div className="flex">
                <Twitter/>
                <BiBasketball/>
                <Instagram/>
                <LinkedIn/>
                <GitHub/>
            </div>

        </Dialog>
    )
}

export default Popup
