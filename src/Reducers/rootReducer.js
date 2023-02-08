import {combineReducers} from "redux";

import callListAPIReducer from "./callListAPI";

const rootReducer = combineReducers({
    callListAPIReducer,
});

export default rootReducer;