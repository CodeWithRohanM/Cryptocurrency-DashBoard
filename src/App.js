import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import TrendingCoins from "./Components/TrendingCoinsList/TrendingCoins";
import ErrorPage from "./Components/ErrorPage";
import CoinInfo from "./Components/CoinInfo";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";



// import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale } from "chart.js";

import DashBoardUI from "./Components/DashBoardUI";
import { Data } from "./Utils/Data";


import { useSelector, useDispatch } from "react-redux";
import { getCoinData, getCoinsList, getCurrency, getLoadingStatus, getChartLoadingStatus, getDivisionNumber, getDaysCount, getTrendingCoinsList, fetchList, fetchGraph, getClearArray, setLoaderState, setChartLoaderState, fetchExchangeCurrencyList } from "./Actions/actions";

const App = () => {

  const currency = useSelector((state) => state.callListAPIReducer.currency);
  const coinName = useSelector((state) => state.callListAPIReducer.coinName);
  const chartLoader = useSelector((state) => state.callListAPIReducer.chartLoader);
  const coinData = useSelector((state) => state.callListAPIReducer.coinData);

  console.log(coinData);

  const divisionNumber = useSelector((state) => state.callListAPIReducer.divisionNumber);
  const days = useSelector((state) => state.callListAPIReducer.days);

  console.log("Days = " + days);


  const dispatch = useDispatch();

  // Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale);



  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],

  });










const fetchCoinNameGraph = async () => {

  try {



    const getData = await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=${days}`);

    const getResponse = await getData.json();

    console.log("First Response ->");
    console.log(coinData[0]);

    console.log("Second Response ->");
    console.log(coinData[1]);

    // dispatch(getCoinData(getResponse.prices));




    if (days === 1) {
      setChartData({
        labels: getResponse.prices.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) =>
          (new Date(curValue[0]).getHours() > 12) ? (new Date(curValue[0]).getHours() - 12 + "PM") : (
            (new Date(curValue[0]).getHours() === 0) ? "12 AM" : (new Date(curValue[0]).getHours() + "AM")
          )
        ),

        datasets: [{
          label: "Chart Data",
          data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) => curValue[1]),
          backgroundColor: [
            "red",
            "blue",
            "gray",
            "yellow",
            "pink"
          ],
          borderWidth: 2,
          borderColor: "black",
        }
        ]
      });
    }
    else if (days === 7) {
      setChartData({
        labels: getResponse.prices.filter((curValue, index) => (index > 0 && index % 24 === 0)).map((curValue, index) => new Date(curValue[0]).getDate() + "/" + (new Date(curValue[0]).getMonth() === 111 ? 11 : new Date(curValue[0]).getMonth() + 1) + "/" + new Date(curValue[0]).getFullYear()),

        datasets: [{
          label: "Chart Data",
          data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 24 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
          backgroundColor: [
            "red",
            "blue",
            "gray",
            "yellow",
            "pink"
          ],
          borderWidth: 2,
          borderColor: "black",
        }
        ]
      });

    }
    else if (days === 30) {
      setChartData({
        labels: getResponse.prices.filter((curValue, index) => (index > 0 && index % 168 === 0)).map((curValue, index) => new Date(curValue[0]).getDate() + "/" + (new Date(curValue[0]).getMonth() === 111 ? "11" : new Date(curValue[0]).getMonth() + 1) + "/" + new Date(curValue[0]).getFullYear()),

        datasets: [{
          label: "Chart Data",
          data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 168 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
          backgroundColor: [
            "red",
            "blue",
            "gray",
            "yellow",
            "pink"
          ],
          borderWidth: 2,
          borderColor: "black",
        }
        ]
      });

    }
    else if (days === 90) {


      setChartData({
        labels: getResponse.prices.filter((curValue, index) => (index > 0 && index % 672 === 0)).map((curValue, index) => new Date(curValue[0]).getDate() + "/" + new Date(curValue[0]).getMonth() + 1 + "/" + new Date(curValue[0]).getFullYear()),

        datasets: [{
          label: "Chart Data",
          data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 24 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
          backgroundColor: [
            "red",
            "blue",
            "gray",
            "yellow",
            "pink"
          ],
          borderWidth: 2,
          borderColor: "black",
        }
        ]
      });

    }

    
    setTimeout(()=>{
      dispatch(setChartLoaderState(false));

    }, 1500);




  } catch (err) {
    console.log(err);
  }

}







// const fetchCoinsListAPI = async () => {
//   try {

//     const getData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);


//     const getResponse = await getData.json();
//     console.log("NAMEEEEEEE = " + getResponse[0].id);

//     // dispatch(getClearArray());

//     dispatch(getCoinsList(getResponse));
//     // dispatch(getLoadingStatus(false));


//   } catch (err) {
//     console.log(err);
//   }

// };


// const fetchCoinGraph = async () => {
//   try {
//     dispatch(getCoinData(await fetchCoinNameGraph()));

//   } catch (err) {
//     console.log(err);
//   }
// }





useEffect((curValue) => {
  //setting Loading States
  dispatch(setLoaderState(true));
  dispatch(setChartLoaderState(true));


  //Calling API's
  dispatch(fetchList(currency));
  // dispatch(fetchGraph(coinName, currency, days));
  dispatch(fetchExchangeCurrencyList());

  fetchCoinNameGraph();




}, [coinName, currency, days]);


// useEffect(()=>{
//   dispatch(fetchGraph(coinName, currency, days));

// },[]);












return <>

  <Routes>
    <Route exact path="/" element={<DashBoardUI chartData={chartData} />}></Route>
    <Route exact path="/trending" element={<TrendingCoins />}></Route>
    <Route exact path="/info" element={<CoinInfo />}></Route>
    <Route path="*" element={<ErrorPage />}></Route>
  </Routes>




</>
};


export default App;