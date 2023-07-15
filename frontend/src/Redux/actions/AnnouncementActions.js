import axios from "axios"
import {ADD_ANNOUNCE_FAIL, ADD_ANNOUNCE_SUCCESS, ADD_COMMENT, DELETE_ANNOUNCE_FAIL, DELETE_ANNOUNCE_SUCCESS, DELETE_ONE_ANNOUNCE_FAIL, DELETE_ONE_ANNOUNCE_SUCCESS, GET_ANNOUNCE_FAIL, GET_ANNOUNCE_LOADING, GET_ANNOUNCE_SUCCESS, GET_ONE_ANNOUNCE_FAIL, GET_ONE_ANNOUNCE_SUCCESS, LIKE_ANNOUNCE_FAIL, LIKE_ANNOUNCE_SUCCESS, POST_ERROR, REMOVE_COMMENT, UNLIKE_ANNOUNCE_FAIL, UNLIKE_ANNOUNCE_SUCCESS, UPDATE_LIKES, UPDATE_ONE_ANNOUNCE_FAIL, UPDATE_ONE_ANNOUNCE_SUCCESS} from "../contants/AnnounecementTypes"


export const getAllAnnounces = (query)=> async dispatch=>{
    dispatch({type:GET_ANNOUNCE_LOADING})
    try {
        const response=await axios.get(`http://localhost:5000/announcements/?${query}`)
        dispatch({type: GET_ANNOUNCE_SUCCESS, payload:response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: GET_ANNOUNCE_FAIL, payload: error})
    }

}

// add announcement
export const addAnnounce = (newAnnounce, navigate)=> async dispatch=>{
    console.log(newAnnounce)
    const token=localStorage.getItem("token")
      try {
           const response=await axios.post("http://localhost:5000/announcements/addAnnouncement", newAnnounce,{ headers: { Authorization: `Bearer ${token}` } })
           dispatch({type:ADD_ANNOUNCE_SUCCESS})
           dispatch(getAllAnnounces())
           navigate("/announcelist")
          } catch (error) {
              console.log(error);
              dispatch({type:ADD_ANNOUNCE_FAIL, payload:error})
              alert(error.response.data)
           }
  }

  export const getOneAnnounce=(id) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/announcements/oneAnnounce/${id}`
      );
      dispatch({type:GET_ONE_ANNOUNCE_SUCCESS,payload:response.data.oneAnnounce})
    } catch (error) {
      console.log(error);
      dispatch({type:GET_ONE_ANNOUNCE_FAIL,payload:error})
    }
  };



  export const editAnnounce=(id,newAnnounce,navigate) => async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/announcements/${id}`,newAnnounce
      );
      dispatch({type:UPDATE_ONE_ANNOUNCE_SUCCESS})
      dispatch(getAllAnnounces())
      navigate("/announcelist")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_ANNOUNCE_FAIL,payload:error})
    }
  };

  export const deleteAnnounce = (id)=> async dispatch=>{
    const token = localStorage.getItem('token')
    try {
         const response=await axios.delete(`http://localhost:5000/announcements/${id}`, { headers: { Authorization: `Bearer ${token}` } })
         dispatch({type:DELETE_ANNOUNCE_SUCCESS})
         dispatch(getAllAnnounces())
        } catch (error) {
            console.log(error);
            dispatch({type:DELETE_ANNOUNCE_FAIL , payload:error})
         }

}
//Lile and unlike announcement

export const addLikes = (id)=> async dispatch=>{    
  const token=localStorage.getItem("token")
  try {
    const response = await axios.put(`http://localhost:5000/announcements/like/${id}`,"" ,{ headers: { Authorization: `Bearer ${token}` } });
    dispatch({type: UPDATE_LIKES, payload:{id, likes: response.data}})
  } catch (error) {
    console.log(error.message)
    dispatch({type: POST_ERROR, payload:error})
  } 
}


  export const removeLikes = (id)=> async dispatch=>{
    const token=localStorage.getItem("token")
    try {
      const response = await axios.put(`http://localhost:5000/announcements/unlike/${id}`,"",{ headers: { Authorization: `Bearer ${token}` } });
      dispatch({type: UPDATE_LIKES, payload:{id, likes: response.data}})
    } catch (error) {
      console.log(error.message)
      dispatch({type: POST_ERROR, payload:error})
    }
  
  }



export const addComment = (id, text)=>async dispatch=>{
  const token = localStorage.getItem("token")
try {
  console.log(text);
 const response = await axios.post(`http://localhost:5000/announcements/comment/${id}`,text,{ headers: { Authorization: `Bearer ${token}` } });
 console.log(response);
 dispatch({type:ADD_COMMENT, payload:{id, comments: response.data }})
} catch (error) {
  console.log(error.message)
  dispatch({type: POST_ERROR, payload:error})
}
}


// Delete comment
export const deleteComment = (AnnounceId, commentId) => async dispatch => {  
  const token = localStorage.getItem("token")
  try {
    await axios.delete(`http://localhost:5000/announcements/comment/${AnnounceId}/${commentId}`, { headers: { Authorization: `Bearer ${token}`} });

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error
    });
  }
};



//remove  oneAnnouncement
export const deleteOneAnnounce = (id)=> async dispatch=>{
  const token = localStorage.getItem('token')
  try {
       const response=await axios.delete(`http://localhost:5000/announcements/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
       dispatch({type:DELETE_ONE_ANNOUNCE_SUCCESS})
       dispatch(getAllAnnounces())
      } catch (error) {
          console.log(error);
          dispatch({type:DELETE_ONE_ANNOUNCE_FAIL , payload:error})
       }

}