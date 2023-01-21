import {combineReducers} from "redux";

import callListAPIReducer from "./callListAPI";
import whatsLoadingReducer from "./WhatsLoading";

const rootReducer = combineReducers({
    callListAPIReducer,
    whatsLoadingReducer,
});

export default rootReducer;