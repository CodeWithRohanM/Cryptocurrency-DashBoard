import {combineReducers} from "redux";

import fetchAPI from "./reducers";
import callListAPIReducer from "./callListAPI";


const rootReducer = combineReducers({
    fetchAPI,
    callListAPIReducer,
});

export default rootReducer;