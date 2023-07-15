
import "./Announce.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLikes, deleteAnnounce, deleteOneAnnounce, removeLikes } from '../../Redux/actions/AnnouncementActions';
const Announce = ({el, setQuery}) => {
  const dispatch = useDispatch()


const currentUser = useSelector(state=>state.userReducer.currentUser)

  return (

    <div className="boxProduct">
  <div className="cardprod">
    <div className="card-header">
      <img src={el.image} alt="rover" />
    </div>
    <div className="cards-body">
      <span className={el.object.toUpperCase()==="MISSING ANNOUNCEMENT"? "tag tag-pink" : "tag tag-teal"}>{el.object}</span>
      <h4 className='heading'>
  {el.description}
      </h4>
     
      <p>
      {el.address}
      </p>
      <div className="user">
        <img src={el.user.image} alt="user" />
        <div className="user-info">
          <h5>{el.user.fullName}</h5>
          <small>{el.createdOn.slice(0,10)}</small>
        </div>
      </div>
    </div>

{localStorage.getItem("token")?
<div className='btnIcon'>
  <div className='actions'> 
  {currentUser.role==="admin"?
     <i id="iconB" className="fa-solid fa-trash-can trash" onClick={()=>dispatch(deleteAnnounce(el._id))}></i>:
    currentUser._id == el.user._id? <i id="iconB" className="fa-solid fa-trash-can trash" onClick={()=>dispatch(deleteOneAnnounce(el._id))}></i>: null}
{currentUser._id == el.user._id?<Link to={`/editannounce/${el._id}`}><i id="iconB" className="fa-solid fa-pen-to-square"></i></Link>: currentUser.role=="admin"?
<Link to={`/editannounce/${el._id}`}><i id="iconB" className="fa-solid fa-pen-to-square"></i></Link>: null}
 <Link to ={`/addannounce`}> <i id="iconB" className="fa-solid fa-circle-plus"></i></Link>
 </div>
 <div className='reaction'>
  <div style={{display:"flex",gap:10}}>   
<Link to={`/details/${el._id}`}> <i  id="iconB" className="fa-solid fa-comment"></i></Link>
<span className='comment-count'>{el.comments.length}</span>
</div>
<div style={{display:"flex",gap:10}}>
<i  id="iconB"  className="fa-solid fa-thumbs-up"  onClick={()=>dispatch(addLikes(el._id))}></i>
<span>{el.likes.length > 0 && <span>{el.likes.length}</span>}</span>
</div> 
<i  id="iconB"  className="fa-solid fa-thumbs-down" onClick={()=>dispatch(removeLikes(el._id))}></i>

</div>
</div>: <Link to="/signin" style={{textDecoration:"none", float:"right", margin:"0px 20px 10px 0px"}}> see comments </Link>} 
</div>   
</div>


)}

export default Announce