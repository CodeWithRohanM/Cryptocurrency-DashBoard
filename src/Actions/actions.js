import axios from "axios";

// const fetchList = (currency) =>{
//     return  async(dispatch) =>{
//         const getData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

//         const getResponse = await getData.json();

//         dispatch(getCoinsList(getResponse));
//         dispatch(getLoadingStatus(false));
//     }
// };


// const fetchGraph = (coinName, currency, days) =>{
//     return async function(dispatch){
//         const getData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=${days}`);

//         dispatch(getCoinData(getData.data.prices));
//         dispatch(getChartLoadingStatus(false));
//     }
// }





const getCoinsList = (list) =>{

    return {
        type: "COINS_LIST",
        payLoad: list,
    }

};

const getClearArray = ()=>{
    return {
        type:"CLEAR_ARRAY",
    }
}

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
};

const getChartLoadingStatus = (status) =>{
    return {
        type: "CHART_LOADING_STATUS",
        payLoad: status,
    }
};


const getDivisionNumber = (number) =>{
    return {
        type: "DIVISION_NUMBER",
        payLoad: number,
    }
};

const getDaysCount = (days) =>{
    return {
        type: "DAYS",
        payLoad: days,
    }
};

const getTrendingCoinsList = (trending) =>{
    return {
        type: "TRENDING_COINS",
        payLoad: trending,
    }
};





export {getCoinsList, getCurrency, getChartType, getCryptoCoinName, getCoinData, getLoadingStatus, getChartLoadingStatus, getDivisionNumber, getDaysCount, getTrendingCoinsList, getClearArray};