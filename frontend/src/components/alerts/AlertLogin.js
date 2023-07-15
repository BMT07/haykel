import React from 'react'
import swal from 'sweetalert';


const AlertLogin = () => {
    const seetAlertClick=()=>{
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
    }
  return (
    
<div className="container">
    <h1> sweet alert</h1>
    <button onClick={seetAlertClick} type="button" className='w3-button w3-blue'>  try me</button>
</div>


  )
}

export default AlertLogin