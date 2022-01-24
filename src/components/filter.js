import React from 'react'
import TextField from '@mui/material/TextField';

function filter() {
    return (
        <div className='grid grid-cols-3 gap-2 p-4 bg-white ' style ={{margin:'20px',width:'95%',padding:'40px',paddingbottom:'50px'}}>
           <div className='flex flex-row'>
               <p style={{marginRight:'10px',marginTop:'10px'}}>First Name</p>
               <TextField id="standard-basic" variant="standard"  />
           </div>
           <div className='flex flex-row'>
               <p style={{marginRight:'10px',marginTop:'10px'}}>Last Name</p>
               <TextField id="standard-basic" variant="standard" />
           </div>
           <div className='flex flex-row'>
               <p style={{marginRight:'10px',marginTop:'10px'}}>GPA</p>
               <TextField id="standard-basic" variant="standard" style ={{marginLeft:'40px'}}/>
           </div>
           <div className='flex flex-row'>
               <p style={{marginTop:'10px'}}>State</p>
               <TextField id="standard-basic" variant="standard" style ={{marginLeft:'50px'}}/>
           </div>
           <div className='flex flex-row'>
               <p style={{marginTop:'10px'}}>Gender</p>
               <TextField id="standard-basic" variant="standard"style ={{marginLeft:'30px'}} />
           </div>
           <div className='flex flex-row'>
               <p style={{marginTop:'10px'}}>SAT Score</p>
               <TextField id="standard-basic" variant="standard" style ={{marginLeft:'10px'}}/>
           </div>
           <div className='flex flex-row'>
               <p style={{marginTop:'10px'}}>Grade Year</p>
               <TextField id="standard-basic" variant="standard" style ={{marginLeft:'10px'}}/>
           </div>
           <div className='flex flex-row'>
               <p style={{marginTop:'10px'}}>Events</p>
               <TextField id="standard-basic" variant="standard" style ={{marginLeft:'35px'}}/>
           </div>
           <div className='flex flex-row'>
               <p style={{marginTop:'10px'}}>ACT Score</p>
               <TextField id="standard-basic" variant="standard" style ={{marginLeft:'1s0px'}}/>
           </div>
           
        </div>
    )
}

export default filter
