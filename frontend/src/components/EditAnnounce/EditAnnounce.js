import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editAnnounce, getOneAnnounce } from '../../Redux/actions/AnnouncementActions';
import "./EditAnnounce.css"
const EditAnnounce = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

const oneAnnounce = useSelector(state=>state.AnnounceReducer.oneAnnounce)

    useEffect(() => {
        dispatch(getOneAnnounce(id));
      }, []);

   
useEffect(() => {
  setObject(oneAnnounce.object)
  setAddress(oneAnnounce.address)
  setDescription(oneAnnounce.description)
  setPhone(oneAnnounce.phone)
}, [oneAnnounce])

      const [image, setImage] = useState("")
      const [object, setObject] = useState(oneAnnounce.object)
      const [address, setAddress] = useState(oneAnnounce.address)
      const [description, setDescription] = useState(oneAnnounce.description)  
      const [phone, setPhone] = useState(oneAnnounce.phone)
  
      const handleUpdate =(event)=>{
          event.preventDefault();
          const data = new FormData();
          data.append("file", image)
          data.append("object", object)
          data.append("address", address)
           data.append("description", description)
           data.append("phone",phone)
        
        
          dispatch(editAnnounce(id, data, navigate))
      }
  


  return (

  <div className="edit">
  <div className="text">Edit Announcement</div>
  <form onSubmit={handleUpdate}>
    <div className="form-row">
      <div className="input-data">
        <input type="text"   name="object"   value={object} onChange={(e)=>setObject(e.target.value)}/>
        <div className="underline" />
        <label>Object</label>
      </div>
      <div className="input-data">
        <input type="text"  value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)}/>
        <div className="underline" />
        <label >Phone</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="text"  value={address} name="address" onChange={(e)=>setAddress(e.target.value)}/>
        <div className="underline" />
        <label >Address</label>
      </div>
      <div className="input-data">
        <input type="file"  name="image" onChange={(e)=>setImage(e.target.files[0])}/>
        <div className="underline" />
      </div>
    </div>
    <div className="form-row">
      <div className="input-data textarea">
        <textarea rows={8} cols={80}  value={description} name="description" onChange={(e)=>setDescription(e.target.value)}/>
        <br />
        <div className="underline" />
        <label>Write your message</label>
        <br />
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner" />
            <input type="submit" defaultValue="submit" />
          </div>
         <Link to="/announcelist">  <button className='cancel'>Cancel</button></Link> 
        </div>
      </div>
    </div>


  </form>
</div>
  )
}

export default EditAnnounce