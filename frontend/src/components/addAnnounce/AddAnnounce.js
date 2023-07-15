import React, { useState } from 'react'
import "./AddAnnounce.css"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addAnnounce } from '../../Redux/actions/AnnouncementActions'

const AddAnnounce = () => {
    const dispatch = useDispatch()  
    const navigate = useNavigate()

    const [image, setImage] = useState("")
    const [object, setObject] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")  
    const [phone, setPhone] = useState("")

    const handleUpdate =(event)=>{
        event.preventDefault();
        if (!image) return alert("Please upload image");
        const data = new FormData();
        data.append("file", image)
        data.append("object", object)
        data.append("address", address)
         data.append("description", description)
         data.append("phone",phone)
      
      
        dispatch(addAnnounce(data, navigate))
    }






  return (
    
<div id="registration-form">
  <div className="fieldset">
    <legend>Add new Announce!</legend>
    <form onSubmit={handleUpdate}>
      <div className="row">
        <label htmlFor="firstname">Object</label>
        <input type="text" placeholder="set the object here" name="object" id="object" data-error-message="the object is required" onChange={(e)=>setObject(e.target.value)}/>
      </div>
      <div className="row">
        <label htmlFor="email">Address</label>
        <input type="text" placeholder="Adress" name="address" data-error-message="the adsress is required" onChange={(e)=>setAddress(e.target.value)} />
      </div>
      <div className="row">
        <label htmlFor="cemail">Phone</label>
        <input type="text" placeholder="phone or telephone" name="phone"  data-error-message="Your phone number please" onChange={(e)=>setPhone(e.target.value)} />
      </div>
      <div className="row">
        <label htmlFor="cemail">Description</label>
        <textarea type="text" placeholder="Description" name="description" onChange={(e)=>setDescription(e.target.value)}/>
      </div>
      <div className='dragPhoto'>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Upload.svg/616px-Upload.svg.png" className="signup-profile-pic" alt="pic" />
       <label htmlFor="image-upload" className="image-upload-label">
      </label>        
    </div>
    <input type="file" id="image-upload" accept="image/png, image/jpeg, , image/jpg" onChange={(e)=>setImage(e.target.files[0])}/>
    <div style={{display: "flex", gap:"1rem"}}>
      <input type="submit" defaultValue="Add Announce" />
      <Link to="/announcelist"> <button >Cancel</button> </Link>
      </div> 
    </form>
  </div>
</div>


  )
}

export default AddAnnounce