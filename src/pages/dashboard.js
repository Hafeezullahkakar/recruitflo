
import React from 'react'
import Filter from '../components/filter'
import Navbar from '../components/navbar'
import Table from '../components/table'
function dashboard() {
    return (
        <div style={{width:'80vw',overflow:"hidden",margin:'20px',marginLeft:'260px'}}>
           <Navbar/>
            <div className='flex justify-between items-center  p-8 ' style ={{borderRadius:'20px',color:'white',background:"#444854",margin:'20px',width:'75vw',height:'300px',overflow:'hidden'}}>
                <h3 style ={{fontFamily:"Poppins",fontWeight:'500px',fontSize:'45px',lineHeight:'67px'}}>
                    Logo will go here
                </h3>
                <div>
                <h2  style ={{fontFamily:'Playfair Display', fontWeight:'500px',fontSize:'46px',lineHeight:'67px'}}>
                   Hi Ken Harnden
                </h2>
                <p  style ={{fontFamily:"Poppins",fontWeight:'500px',fontSize:'19px'}}>
                Welcome to RecruitFlo! Browse your dashboard and use filters to <br/> view students that
                 have indicated interest, as well as to discover <br/> new talent.   
                </p>
                </div>
                
            </div>
            <Filter/>
            <Table/>
        </div>
    )
}

export default dashboard
