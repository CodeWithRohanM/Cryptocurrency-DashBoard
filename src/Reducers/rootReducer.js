import {combineReducers} from "redux";

import fetchAPI from "./reducers";

const rootReducer = combineReducers({
    fetchAPI,
});

export default rootReducer;