import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./Details.css"
import {addComment, deleteComment, getOneAnnounce} from "../../Redux/actions/AnnouncementActions"
import {  getOneUser } from '../../Redux/actions/userActions';
import {FaFileExport, FaPeriscope, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();
    const dispatch=useDispatch()

    const [text, setText] = useState('');

    const handleComment =(e)=>{
     e.preventDefault();
     dispatch(addComment(id, { text }));
             setText('');
   }

    const oneAnnounce=useSelector(state=>state.AnnounceReducer.oneAnnounce)
    const currentUser=useSelector(state=>state.userReducer.currentUser)
  

  

    useEffect(() => {
        dispatch(getOneAnnounce(id));
     //loading && dispatch(getOneUser(oneAnnounce.user))
      }, []);

/*
      useEffect(() => {
        loading && dispatch(getOneUser(oneAnnounce.user))
      }, [oneAnnounce]);

*/
 const [showResults, setShowResults] = React.useState(false)
 const onClick = () => setShowResults(!showResults)

  return (
    
<div>
<div className="wrapper" style={{display:"flex", flexDirection:"column"}}>
    <div>
  <div className="product-img">
    <img src={oneAnnounce&&oneAnnounce.image} height={400} width={327} alt=""/>
  </div>
  <div className="product-info">
    <div className="product-text">
    <div className='imgUser'>
    <img style={{borderRadius: "50%"}} src={oneAnnounce&&oneAnnounce.user&&oneAnnounce.user.image} height={60} width={60} alt=""/>
      <span > <h1 style={{fontSize:"20px"}}>{oneAnnounce&&oneAnnounce.user&&oneAnnounce.user.fullName}</h1></span> 
    </div>
    <h2>{oneAnnounce&&oneAnnounce.object}</h2>
    <div className='devision'>
      <p>{oneAnnounce&&oneAnnounce.description}</p>
      <span className='iconDesc'> <FaFileExport/> </span>
      <p>{oneAnnounce&&oneAnnounce.address}</p>
      <span className='iconAdd'> <FaPeriscope/> </span>
      <p>{oneAnnounce&&oneAnnounce.phone}</p>
      <span className='iconPh'> <FaPhoneAlt/> </span>
      </div> 
    </div>
    <div className="product-price-btn">
      <button  className="button-30" type="button" onClick={onClick}> {showResults? "Hide Comments":"Add Comments" } </button>
    </div>

  
  </div>
  </div>

 


</div>

{showResults? <div className="contComent mt-5">
  <div className="d-flex justify-content-center row">
    <div className="col-md-8">
      <div className="d-flex flex-column comment-section">
{oneAnnounce&&oneAnnounce.comments.map((el,i)=>

        <div key={i} className='boxBorder'> 
        <div className="bg-white p-2">
          <div className="d-flex flex-row user-info"><img className="round" src={el.image} width={40} alt=""/>
            <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">{el.name}</span><span className="date text-black-50">Shared publicly - {el.date}</span></div>
          </div>
          <div className="mt-2">
            <p className="comment-text">{el.text}</p>
          </div>
        </div>
        <div className="bg-white">
          <div className="d-flex flex-row fs-12">
            <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up" /><span className="ml-1">Like</span></div>
            <div className="like p-2 cursor"><i className="fa fa-commenting-o" /><span className="ml-1">Comment</span></div>
            <div className="like p-2 cursor"><i className="fa fa-trash"  onClick={()=>dispatch(deleteComment(id, el._id.toString()))}/><span className="ml-1">delete</span></div>
          </div>
        </div> </div> )}
        <div className="bg-light p-2">
          <form onSubmit={handleComment}>
          <div className="d-flex flex-row align-items-start"><img className="round" src={currentUser.image} width={40} alt=""/><textarea name="text" className="form-control ml-1 shadow-none textarea" value={text} onChange={(e)=>setText(e.target.value)}/></div>
          <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type="submit" >Post comment</button> <Link to="/announcelist"> <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></Link></div>
          </form> 
        </div>
      </div>
    </div>
  </div>
</div>:null}

</div> 


  )
}

export default Details