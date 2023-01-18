import {combineReducers} from "redux";

import fetchAPI from "./reducers";
import callListAPIReducer from "./callListAPI";
import whatsLoadingReducer from "./WhatsLoading";
import CoinInfoReducer from "./CoinInfoReducer";

const rootReducer = combineReducers({
    fetchAPI,
    callListAPIReducer,
    whatsLoadingReducer,
    CoinInfoReducer,
});

export default rootReducer;