const getCoinsList = (list) =>{

    return {
        type: "COINS_LIST",
        payLoad: list,
    }

};

const getCurrency = (currency) =>{
    return {
        type: "GET_CURRENCY",
        payLoad: currency,
    }
};

const getChartType = (chart) =>{
    return {
        type: "CHART_TYPE",
        payLoad: chart,
    }
};

const getCryptoCoinName = (coin) =>{
    return {
        type: "COIN_NAME",
        payLoad: coin,
    }
};

const getCoinData = (coinData) => {
    return {
        type: "COIN_DATA",
        payLoad: coinData,
    }
};

const getLoadingStatus = (status)=>{
    return {
        type: "LOADING_STATUS",
        payLoad: status,
    }
}

const getChartLoadingStatus = (status) =>{
    return {
        type: "CHART_LOADING_STATUS",
        payLoad: status,
    }
}


export {getCoinsList, getCurrency, getChartType, getCryptoCoinName, getCoinData, getLoadingStatus, getChartLoadingStatus};