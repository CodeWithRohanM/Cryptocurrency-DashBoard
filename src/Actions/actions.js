import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


const fetchList = (currency) => {

    return async (dispatch) => {
        const getData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

        const getResponse = await getData.json();

        setTimeout(() => {
            dispatch(getCoinsList(getResponse));
        }, 500);

    }

};


const fetchGraph = (coinName, currency, days) => {

    return async (dispatch) => {
        const getData = await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=${days}`);

        const getResponse = await getData.json();

        dispatch(getCoinData(getResponse.prices));

    }
};


const trendingListAPI = () => {
    return async (dispatch) => {
        const getData = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const getResponse = await getData.json();

        setTimeout(() => {
            dispatch(getTrendingCoinsList(getResponse.coins));
        }, 1500);

    }
};


const fetchCoinInfoAPI = (name) => {
    return async (dispatch) => {
        const getData = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`);
        const getResponse = await getData.json();
        console.log("ID = " + getResponse.id);
        setTimeout(() => {
            dispatch(setCoinInfo(getResponse));

        }, 2000);
    }
};


const fetchExchangeCurrencyList = () => {
    return async (dispatch) => {
        const getData = await fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");
        const getResponse = await getData.json();

        dispatch(setExchangeList(getResponse));


    }
};


const setImageURL = (coinName) => {
    return async (dispatch) => {
        const getData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinName}&order=market_cap_desc&per_page=10&page=1&sparkline=false`);

        const getResponse = await getData.json();

        dispatch(getImageURL(getResponse[0].image));


    }
}





// ACTUAL ACTION TAKERS

const getImageURL = (url) =>{
    return {
        type: "IMAGE_URL",
        payLoad: url,
    }
};

const setExchangeList = (list) => {
    return {
        type: "EXCHANGE_LIST",
        payLoad: list,
    }
};

const setCoinInfo = (details) => {
    return {
        type: "COIN_INFO",
        payLoad: details,
    }
};

const getTrendingLoader = (status) => {
    return {
        type: "TRENDING_LOADER",
        payLoad: status,
    }
};

const getCoinInfoLoader = (status) => {
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



export { getCoinsList, getCurrency, getCryptoCoinName, getCoinData, getLoadingStatus, getChartLoadingStatus, getDivisionNumber, getDaysCount, getTrendingCoinsList, fetchList, setLoaderState, setChartLoaderState, trendingListAPI, getTrendingLoader, fetchCoinInfoAPI, getCoinInfoLoader, fetchGraph, fetchExchangeCurrencyList, setImageURL };