import axios from "axios";



const fetchList = (currency) => {

    return async (dispatch) => {
        const getData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

        const getResponse = await getData.json();

        setTimeout(() => {
            dispatch(getCoinsList(getResponse));
        }, 500);

    }

};


const trendingListAPI = () =>{
    return async(dispatch) =>{
        const getData = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const getResponse = await getData.json();

        setTimeout(()=>{
            dispatch(getTrendingCoinsList(getResponse.coins));
        }, 1500);

    }
};


const fetchCoinInfoAPI = (name) =>{
    return async (dispatch) =>{
        const getData = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`);
        const getResponse = await getData.json();
        console.log("ID = "+getResponse.id);
        setTimeout(()=>{
            dispatch(setCoinInfo(getResponse));

        }, 1500);
    }
}



const setCoinInfo = (details)=>{
    return {
        type: "COIN_INFO",
        payLoad: details,
    }
};




const getTrendingLoader = (status) =>{
    return {
        type: "TRENDING_LOADER",
        payLoad: status,
    }
};







const getCoinInfoLoader = (status) =>{
    return {
        type: "COIN_LOADER",
        payLoad: status,
    }
}










const setLoaderState = (loaderState) => {
    return {
        type: "WHATS_LOADING",
        payLoad: loaderState,
    }
};

const setChartLoaderState = (loaderState) => {
    return {
        type: "WHATS_CHART_LOADING",
        payLoad: loaderState,
    }
};

const getCryptoCoinName = (coin) => {
    return {
        type: "COIN_NAME",
        payLoad: coin,
    }
};

const getCoinsList = (list) => {

    return {
        type: "COINS_LIST",
        payLoad: list,
    }

};


const getCurrency = (currency) => {
    return {
        type: "GET_CURRENCY",
        payLoad: currency,
    }
};

const getChartType = (chart) => {
    return {
        type: "CHART_TYPE",
        payLoad: chart,
    }
};

const getCoinData = (coinData) => {
    return {
        type: "COIN_DATA",
        payLoad: coinData,
    }
};

const getLoadingStatus = (status) => {
    return {
        type: "LOADING_STATUS",
        payLoad: status,
    }
};

const getChartLoadingStatus = (status) => {
    return {
        type: "CHART_LOADING_STATUS",
        payLoad: status,
    }
};

const getDivisionNumber = (number) => {
    return {
        type: "DIVISION_NUMBER",
        payLoad: number,
    }
};

const getDaysCount = (days) => {
    return {
        type: "DAYS",
        payLoad: days,
    }
};

const getTrendingCoinsList = (trending) => {
    return {
        type: "TRENDING_COINS",
        payLoad: trending,
    }
};





export { getCoinsList, getCurrency, getChartType, getCryptoCoinName, getCoinData, getLoadingStatus, getChartLoadingStatus, getDivisionNumber, getDaysCount, getTrendingCoinsList, fetchList, setLoaderState, setChartLoaderState, trendingListAPI, getTrendingLoader, fetchCoinInfoAPI, getCoinInfoLoader };