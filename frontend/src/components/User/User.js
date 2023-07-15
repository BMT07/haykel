import React, { useState } from 'react'
import "./User.css"
import { } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { bannedUser, deleteUser } from '../../Redux/actions/userActions';
import { Link } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const User = ({user}) => {


  const dispatch = useDispatch();
const [bann, setBann] = useState("")
const [check, setCheck] = useState(user.isBanned)



  return (
    
<div className="cnn">
  <div className="row bootstrap snippets bootdeys"> 
  </div>
  <div className="member-entry"> 
    <div className="member-img"> 
      <img src={user.image} className="img-rounded"alt=""/> 
      <i className="fa fa-forward" /> 
    </div> 
    <div className="member-details"> 
      <h4>{user.fullName}</h4> 
      <div className="row info-list"> 
        <div className="col-sm-4"> 
          <i className="fa fa-briefcase" />
          <span> {user.role}</span>
        </div> 
        <div className="col-sm-4"> 
          <i className="fa fa-phone" /> 
          <span> {user.phone} </span> 
        </div> 

        <div className="clear" /> 
        <div className="col-sm-4"> 
          <i className="fa fa-location" /> 
          <span> {user.address}</span>
        </div> 
        <div className="col-sm-4"> 
          <i className="fa fa-envelope" /> 
          <span> {user.email}</span> 
        </div> 
      </div> 
    </div>
<div className="btnAction">
  <button onClick={()=>dispatch(deleteUser(user._id))} type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash" /> </button>
  <button onClick={()=>dispatch(bannedUser(user._id, {isBanned:bann}))} type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit" /> </button>
  <Link to="/profile"> <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-eye" /> </button> </Link>
</div>
<input onChange={()=>{setBann(!bann); setCheck(!bann)}} name="isBanned"  style={{fontSize:"30px", marginTop:"1rem", marginLeft:"1rem"}} type="checkbox" id="vehicle1" checked={check} value={bann}/>
<span style={{ color: "blue"}}> IsBanned</span> 
{user.isBanned? <span style={{display:"flex", color: 'red', background: "gray"}}> <IoMdClose/> <span>Banned</span></span>: <span style={{ marginLeft:"1rem", marginBottom:"10px"}}> <FcCheckmark/>  <span style={{color:"green"}}>avtive</span> </span>}
</div> 

</div>



  )
}

export default User