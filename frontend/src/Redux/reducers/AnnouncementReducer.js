import { ADD_ANNOUNCE_FAIL, ADD_COMMENT, DELETE_ANNOUNCE_FAIL, DELETE_ONE_ANNOUNCE_FAIL, FILTER_ANNOUNCE_FAIL, FILTER_ANNOUNCE_LOADING, FILTER_ANNOUNCE_SUCCESS, GET_ANNOUNCE_FAIL, GET_ANNOUNCE_LOADING, GET_ANNOUNCE_SUCCESS, GET_ONE_ANNOUNCE_FAIL, GET_ONE_ANNOUNCE_SUCCESS, POST_ERROR, REMOVE_COMMENT, UPDATE_LIKES, UPDATE_ONE_ANNOUNCE_FAIL} from "../contants/AnnounecementTypes";

const initialState={
    loading: false,
    Announces:[],
    errors:null,
    oneAnnounce:{},
    likes:[]
    }

    export const AnnounceReducer =(state= initialState, {type, payload})=>{
        switch (type) {
            //get all Announcements
            case GET_ANNOUNCE_LOADING: return{...state, loading: true }
            case GET_ANNOUNCE_SUCCESS: return{...state,Announces:payload , loading: false }
            case GET_ANNOUNCE_FAIL: return{...state, errors:payload , loading: false }
            
            //add new announcement
            case ADD_ANNOUNCE_FAIL: return{...state, errors:payload}

            //get one announce
            case GET_ONE_ANNOUNCE_SUCCESS:return{...state,oneAnnounce:payload}
            case GET_ONE_ANNOUNCE_FAIL: return {...state, errors: payload}

             //edit new announcement
             case UPDATE_ONE_ANNOUNCE_FAIL: return{...state, errors:payload}
                
             //delete announcement
             case DELETE_ANNOUNCE_FAIL: return {...state, errors: payload}
            
             //delete oneAnnouncement
             case DELETE_ONE_ANNOUNCE_FAIL: return {...state, errors: payload}

    //like and unlike announcement
    case UPDATE_LIKES:return{...state,Announces: state.Announces.map(el=>el._id==payload.id?{...el, likes:payload.likes}: el)}
    case POST_ERROR: return {...state, errors: payload}
//ad comment case
case ADD_COMMENT: return{...state, oneAnnounce:{...state.oneAnnounce,comments:payload.comments}} 
case REMOVE_COMMENT:
    return {
      ...state,
      oneAnnounce: {
        ...state.oneAnnounce,
        comments: state.oneAnnounce.comments.filter(
          comment => comment._id !== payload
        )
    }, loading:false};



    default: return state;
               
        }

    }

