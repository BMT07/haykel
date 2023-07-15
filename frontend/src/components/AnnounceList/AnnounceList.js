import React, { useEffect, useState } from "react";
import "./AnnounceList.css";

import { useDispatch, useSelector } from "react-redux";
import Announce from "../Announce/Announce";
import Search from "../searchAnnounce/Search";
import Footer from "../footer/Footer";
import Spinner from "../alerts/Spinner";
import { getAllAnnounces } from "../../Redux/actions/AnnouncementActions";


const AnnounceList = () => {

  
useEffect(() => {
  dispatch(getAllAnnounces());
  }, [])

  const dispatch= useDispatch()

  const Announces = useSelector((state) => state.AnnounceReducer.Announces);

  const loading = useSelector((state) => state.AnnounceReducer.loading);


  const [objectUp, setObjectUp] = useState("")


  const handleSubmit=(x)=>{
    setObjectUp(x)
  }

  return (
    <> 
    {loading? <Spinner/>:  
   <div>
   
      <div>
        
        <Search handleSubmit={handleSubmit}/>
      </div>
      <div className="list">
        {Announces.filter(annonce=> annonce.object.toLowerCase().match(objectUp.toLowerCase().trim()) ||
            annonce.user.fullName.toLowerCase().includes(objectUp.toLowerCase())).map((el) => (
          <Announce key={el._id} el={el} />
        ))}
      </div>
      <Footer className="footer-Page"/> 
    </div>}
    </> 
  );
};

export default AnnounceList;
