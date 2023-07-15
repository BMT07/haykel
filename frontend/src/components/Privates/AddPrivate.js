import React from 'react'
import { Navigate } from 'react-router-dom'

const AddPrivate = ({children}) => {
  return ( <div>
    {localStorage.getItem("token")? children : <Navigate to="/signin"/>}
</div>
  )
}

export default AddPrivate