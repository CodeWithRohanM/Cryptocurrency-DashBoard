const initialState = {
    currency: "usd",
    chart: "line",
    coinName: "bitcoin",
    coinData: [],
    loadingStatus: true,
    chartLoadingStatus: true,
    divisionNumber: 12,
    days: 1,
    trendingCoinsList: [],
};





const fetchAPI = (state = initialState, action) =>{

    switch(action.type)
    {

        case "GET_CURRENCY":{
            return {
                ...state,
                currency: action.payLoad,
            }
        };

        case "CHART_TYPE":{
            return {
                ...state,
                chart: action.payLoad,
            }
        };

        case "COIN_NAME":{
            return {
                ...state,
                coinName: action.payLoad,
            }
        };

        case "COIN_DATA":{
            return {
                ...state,
                coinData: action.payLoad,
            }
        };

        case "LOADING_STATUS":{
            return {
                ...state,
                loadingStatus: action.payLoad,
            }
        };

        case "CHART_LOADING_STATUS":{
            return {
                ...state,
                chartLoadingStatus: action.payLoad,
            }
        };

        case "DIVISION_NUMBER":{
            return {
                ...state,
                divisionNumber: action.payLoad,
            }
        };

        case "DAYS":{
            return {
                ...state,
                days: action.payLoad,
            }
        };

        case "TRENDING_COINS":{
            return {
                ...state,
                trendingCoinsList: action.payLoad,
            }
        };


        default: return initialState;

    }
};

export default fetchAPI;
