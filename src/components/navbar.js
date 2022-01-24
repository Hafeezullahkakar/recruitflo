import React from 'react'
import { NotificationAdd, Notifications } from '@mui/icons-material'
import { Avatar } from '@mui/material'

function navbar() {
    return (
        <nav className="flex flex-row items-center justify-between" >
        <p style ={{fontSize:"30px",fontFamily:"Poppins",fontWeight:'500px',marginLeft:'20px'}}>
            Dashboard
        </p>
        <div className='flex justify-center items-center p-2'>
            <div className='mr-2'>

            <Notifications style={{width:'30px',height:'30px'}} />
            </div>
            <div className="mx-4">
                <h1 style ={{fontSize:"15px",lineHeight:'22px',color:'black',fontFamily:"Poppins",fontWeight:'500px'}}>
                Ken Harnden
                </h1>
                <p style ={{fontSize:"13px",lineHeight:'19px',color:'#5C6B91',fontFamily:"Poppins",fontWeight:'400px'}}>
                University of Tennessee
                </p>
            </div>
            <div>

            <Avatar/>
            </div>
        </div>
    </nav>
    )
}

export default navbar
