import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../../Redux/actions/userActions';
import "./EditProfile.css"

const EditProfile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
const user = useSelector(state=>state.userReducer.currentUser)

    const [fullName, setFullName] = useState(user.fullName)
    const [image, setImage] = useState(user.image)
    const [password, setPassword] = useState(user.password)
    const [gender, setGender] = useState(user.gender)  
    const [email, setEmail] = useState(user.email)
    const [address, setAddress] = useState(user.address)  
    const [phone, setPhone] = useState(user.phone)


    const handleUpdate =(event)=>{
        event.preventDefault();
        if (!image) return alert("Please upload your profile picture");
        const data = new FormData();
        data.append("file", image)
        data.append("fullName", fullName)
        data.append("password", password)
        data.append("gender", gender)
        data.append("email", email)
         data.append("address", address)
         data.append("phone",phone)
      
      
        dispatch(editUser(data, navigate))
    }


  return (
  <div className="cont">
<div >
  <div className="row gutters">
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile">
                <div className="signup-profile-pic-container">
       <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="signup-profile-pic" alt="pic"/>
       <label htmlFor="image-upload" className="image-upload-label">
       
       <FaPlusCircle className='icon'/> 
      </label>        
      <input type="file" id="image-upload" hidden accept="image/png, image/jpeg"  onChange={(e)=>setImage(e.target.files[0])}/>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mb-2 text-primary">Personal Details</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter full name" value={fullName}  onChange={(e)=>setFullName(e.target.value)}/>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="eMail">Email</label>
                <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" name="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter phone number" name="phone" value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="website">Address</label>
                <input type="url" className="form-control" id="website" placeholder="Enter your location"  name="address" value={address}  onChange={(e)=>setAddress(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mt-3 mb-2 text-primary">Address</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="Street">Password</label>
                <input type="name" className="form-control" id="Street" placeholder="Enter the new password" name="password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="ciTy">gender</label>
                <input type="text" className="form-control" id="ciTy" placeholder="select your gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
          
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right">
               <Link to='/profile'> <button type="button" id="submit" name="submit" className="btn btn-secondary mt-3 mb-2">Cancel</button></Link>
                <button type="button" id="submit" name="submit" className="btn btn-primary mt-2 mx-2" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>
</div>  

  )
}

export default EditProfile