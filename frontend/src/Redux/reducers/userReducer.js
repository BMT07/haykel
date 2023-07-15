import { BANNED_USER_FAIL, BANNED_USER_SUCCESS, DELETE_USER_FAIL, GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS, GET_ONE_USER_FAIL, GET_ONE_USER_SUCCESS, GET_USERS_FAIL, GET_USERS_LOADING, GET_USERS_SUCCESS, LOGOUT, SIGNIN_USER_FAIL, SIGNIN_USER_SUCCESS, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS, UPDATE_ONE_USER_FAIL } from "../contants/userTypes"
const initialState={
  loading: false,
  errors :null,
  oneUser:{},
  AllUsers:[],
  currentUser: {},
}

export const userReducer = (state= initialState, {type, payload})=>{
switch (type) {

    //signUp case
    case SIGNUP_USER_SUCCESS: return {...state, currentUser: payload}
    case SIGNUP_USER_FAIL: return {...state, errors: payload}
   //signIn case
   case SIGNIN_USER_SUCCESS:
    localStorage.setItem("token", payload.token)
    let user_data_str = JSON.stringify(payload.user);
    localStorage.setItem("user",user_data_str)

    return {...state,AllUsers:[], currentUser: payload.user };
  case SIGNIN_USER_FAIL:
    return { ...state, errors: payload };

//currentUser case
case GET_CURRENT_USER_SUCCESS: return {...state, currentUser: payload}
case GET_CURRENT_USER_FAIL: return {...state, errors: payload}

//upadteUser
case UPDATE_ONE_USER_FAIL:  return {...state, errors: payload}
//get oneUser
case GET_ONE_USER_SUCCESS: return {...state, oneUser: payload}



 //get all Users
 case GET_USERS_LOADING: return{...state, loading: true }
 case GET_USERS_SUCCESS: return{...state,AllUsers:payload , loading: false }
 case GET_USERS_FAIL: return{...state, errors:payload , loading: false }

//delete user
case DELETE_USER_FAIL: return {...state, errors: payload}

//Banned user

case BANNED_USER_SUCCESS: return {...state, AllUsers:state.AllUsers.map(el=>el._id==payload.id?{...el, isBanned:payload.banned}: el)}
case BANNED_USER_FAIL: return {...state, errors: payload}
                 

//logout case
case LOGOUT:
  localStorage.removeItem("token");
  return {
    loading: false,
    currentUser: {},
    errors: null,
  };

    default: return state;

}

}