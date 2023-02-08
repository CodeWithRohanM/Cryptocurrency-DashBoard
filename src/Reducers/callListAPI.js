// Initial State For The Store
const initialStates = {
    coinsList: [],
    currency: "usd",
    coinName: "bitcoin",
    days: 1,
    coinData: [],
    chartLoader: false,
    loader: true,
    divisionNumber: 12,
    exchangeList: [],
    imageURL: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    statusMessage: true,
};

// Reducer Function To Update The Respective Store State
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

        case "EXCHANGE_LIST": {
            return {
                ...state,
                exchangeList: action.payLoad,
            }
        };

        case "IMAGE_URL":{
            return {
                ...state,
                imageURL: action.payLoad,
            }
        };

        case "STATUS_MESSAGE":{
            return {
                ...state,
                statusMessage: action.payLoad,
            }
        }

        default: return state;
    }

};

export default callListAPIReducer;