const initialStates = {
    coinsList: [],
};


const callListAPIReducer = (state = initialStates, action) =>{
    switch(action.type)
    {
        case "COINS_LIST":{

            return {
                coinsList: action.payLoad,
            }
        };

        case "CLEAR_ARRAY":{
            return {
                ...state,
                coinsList: [],
            }
        }

        default: return state;
    }

};

export default callListAPIReducer;