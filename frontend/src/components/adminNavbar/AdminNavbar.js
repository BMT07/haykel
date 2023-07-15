import React from 'react'
import { useSelector } from 'react-redux'
import './AdminNavbar.css'   
import { CgProfile } from "react-icons/cg";
import { FaAddressBook, FaPhone, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AdminNavbar = ({handleSubmit}) => {

    const admin = useSelector(state=>state.userReducer.currentUser)
  return (
    
<nav className="navbar d-flex">
    <div style={{display: "flex", gap: "2rem"}}>
      <div>
      <img  className='imgAdmin' src={admin.image} alt="" /> 
<span className='spanh'> {admin.fullName}</span>
      </div>
<div className='putInisde' style={{marginTop:"15px", display:"flex", gap:"0.3rem"}}>   
<CgProfile style={{fontSize:"30px", color: "white"}}/> 
<span style={{fontSize:"15px"}}>{admin.role}</span> 
</div>
<div  className='putInisde' style={{marginTop:"15px", display:"flex", gap:"0.3rem"}}>   
<FaAddressBook style={{fontSize:"30px", color: "white"}}/> 
<span style={{fontSize:"15px"}}>{admin.address}</span> 
</div>

<div  className='putInisde' style={{marginTop:"15px", display:"flex", gap:"0.3rem"}}>   
<FaPhone style={{fontSize:"30px", color: "white"}}/> 
<span style={{fontSize:"15px"}}>{admin.phone}</span> 
</div>



    </div>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e)=> handleSubmit(e.target.value)}/>
  </form>
  <Link to="/announcelist"> <FaHome style={{fontSize:"30px", color: "blue", marginRight:"20px"}}/> </Link>
</nav>





  )
}



export default AdminNavbar