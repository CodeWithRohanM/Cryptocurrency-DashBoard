const initialState = {
    loadingState: true,
    chartLoadingState: true,
};

const whatsLoadingReducer = (state = initialState, action) => {

    switch (action.type) {
        case "WHATS_LOADING": {
            return {
                ...state,
                loadingState: action.payLoad,
            }
        };

        // case "WHATS_CHART_LOADING":{
        //     return {
        //         ...state,
        //         chartLoadingState: action.payLoad,
        //     }
        // }

        default: return state;
    }
};

export default whatsLoadingReducer;