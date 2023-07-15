import React from 'react'
import { 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaAddressBook,
  FaPlusCircle,
  FaPowerOff,
  FaSlidersH
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {logoutUser } from '../../../Redux/actions/userActions'

import SidebarItem from '../SidebarItem'
import { Container, Content } from './style'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
  const dispatch = useDispatch()
const navigate = useNavigate()

 const currentUser =useSelector(state=>state.userReducer.currentUser)

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
       <Link to="/announcelist" style={{textDecoration:"none"}}> <SidebarItem Icon={FaHome} Text="Home" /></Link>
       <Link to="/profile" style={{textDecoration:"none"}}> <SidebarItem Icon={FaUserAlt} Text="Profile" /></Link>
       <Link to="/announcelist" style={{textDecoration:"none"}}><SidebarItem Icon={FaPlusCircle} Text="Announcements" /></Link> 
        <Link to= "/contact" style={{textDecoration:"none"}}> <SidebarItem Icon={FaAddressBook} Text="Contact" /></Link>
       {localStorage.getItem("token") && currentUser.role==="admin" && <Link to= "/userlist" style={{textDecoration:"none"}}> <SidebarItem Icon={FaAddressBook} Text="Accounts" /></Link>}
       {!localStorage.getItem("token")&& <Link to="/signin" style={{textDecoration:"none"}}> <SidebarItem Icon={FaSlidersH} Text="Login" /></Link>}
      {localStorage.getItem("token")&&<button style={{ backgroundColor: "#171923"}} onClick={()=>dispatch(logoutUser(navigate))} ><SidebarItem Icon={FaPowerOff} Text="Logout"/></button> }
      </Content>
    </Container>
  )
}

export default Sidebar