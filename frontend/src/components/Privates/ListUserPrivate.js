import React from 'react'
import { Navigate } from 'react-router-dom'

const ListUserPrivate = ({children}) => {
  var user = JSON.parse(localStorage.getItem('user')); 
  console.log(user.role);
  return (
    <div>
    {localStorage.getItem("token") && user.role=="admin"? children : <Navigate to="/announcelist"/>}
</div>

  )
}

export default ListUserPrivate