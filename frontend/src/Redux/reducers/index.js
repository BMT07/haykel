import {userReducer} from "./userReducer"
import {AnnounceReducer} from "./AnnouncementReducer"

import { combineReducers } from "redux";
export const rootReducer = combineReducers({userReducer, AnnounceReducer})