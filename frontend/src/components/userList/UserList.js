import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/actions/userActions';
import AdminNavbar from '../adminNavbar/AdminNavbar';
import Spinner from '../alerts/Spinner';
import User from '../User/User';
import "./UserList.css"



const UserList = () => {

    const dispatch = useDispatch();

    const users = useSelector(state=>state.userReducer.AllUsers)
    console.log(users);

    useEffect(() => {
    dispatch(getAllUsers())
    }, [])

    const loading = useSelector((state) => state.userReducer.loading);

    
  const [filterUser, setFilterUser] = useState("")


  const handleSubmit=(x)=>{
    setFilterUser(x)
  }


  return (
    <> 
       <AdminNavbar handleSubmit={handleSubmit}/> 
   {loading? <Spinner/>: <div className="usList">
       <h1 className='headUser'> Members </h1>  
        {users.filter(el=>el.role !=="admin").filter(user=>user.fullName.toLowerCase().match(filterUser.toLowerCase().trim())).map(user=> <User key={user._id} user={user}/>)}
    </div>}
    </>   

    /* annonce.object.toLowerCase().match(objectUp.toLowerCase().trim()) ||
            annonce.user.fullName.toLowerCase().includes(objectUp.toLowerCase()) */
  )
}

export default UserList  