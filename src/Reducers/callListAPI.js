const initialStates = {
    coinsList: [],
    currency: "usd",
    coinName: "bitcoin",
    days: 1,
    coinData: [],
    chartLoader: false,
    loader: true,
    // chart: "line",
    divisionNumber: 12,
    trendingCoinsList: [],
    trendingLoader: true,
    exchangeList: [],
};


const callListAPIReducer = (state = initialStates, action) => {
    switch (action.type) {
        case "GET_CURRENCY": {
            return {
                ...state,
                currency: action.payLoad,
            }
        };
        case "COIN_NAME": {
            return {
                ...state,
                coinName: action.payLoad,
            }
        };

        case "DAYS": {
            return {
                ...state,
                days: action.payLoad,
            }
        };
        case "COINS_LIST": {
            return {
                ...state,
                coinsList: action.payLoad,
                loader: false,
            }
        };

        case "WHATS_LOADING": {
            return {
                ...state,
                loader: action.payLoad,
            }
        };

        case "WHATS_CHART_LOADING": {
            return {
                ...state,
                chartLoader: action.payLoad,
            }
        };

        case "COIN_DATA": {
            return {
                ...state,
                coinData: action.payLoad,
                chartLoader: false,
            }
        };

        case "LOADING_STATUS": {
            return {
                ...state,
                loadingStatus: action.payLoad,
            }
        };

        case "CHART_LOADING_STATUS": {
            return {
                ...state,
                chartLoadingStatus: action.payLoad,
            }
        };

        case "DIVISION_NUMBER": {
            return {
                ...state,
                divisionNumber: action.payLoad,
            }
        };


        case "TRENDING_COINS": {
            return {
                ...state,
                trendingCoinsList: action.payLoad,
                trendingLoader: false,
            }
        };

        case "TRENDING_LOADER": {
            return {
                ...state,
                trendingLoader: action.payLoad,
            }
        };

        case "EXCHANGE_LIST": {
            return {
                ...state,
                exchangeList: action.payLoad,
            }
        }

        default: return state;
    }

};

export default callListAPIReducer;