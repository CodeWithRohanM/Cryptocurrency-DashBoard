import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import TrendingCoins from "./Components/TrendingCoinsList/TrendingCoins";
import ErrorPage from "./Components/ErrorPage";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";



// import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale } from "chart.js";

import DashBoardUI from "./Components/DashBoardUI";
import { Data } from "./Utils/Data";


import { useSelector, useDispatch } from "react-redux";
import { getCoinData, getCoinsList, getCurrency, getLoadingStatus, getChartLoadingStatus, getDivisionNumber, getDaysCount, getTrendingCoinsList,fetchList, fetchGraph, getClearArray } from "./Actions/actions";

const App = () => {

  const currency = useSelector((state) => state.fetchAPI.currency);
  const coinName = useSelector((state) => state.fetchAPI.coinName);
  const coinData = useSelector((state) => state.fetchAPI.coinData);
  const divisionNumber = useSelector((state) => state.fetchAPI.divisionNumber);
  const days = useSelector((state) => state.fetchAPI.days);


  const dispatch = useDispatch();

  // Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale);

  const [loading, setLoading] = useState(true);
  // const [chartData, setChartData] = useState({});





  // if (days === 1) {

  //   setChartData({
  //     labels: coinData.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) =>
  //       (new Date(curValue[0]).getHours() > 12) ? (new Date(curValue[0]).getHours() - 12 + "PM") : (
  //         (new Date(curValue[0]).getHours() === 0) ? "12 AM" : (new Date(curValue[0]).getHours() + "AM")
  //       )
  //     ),

  //     datasets: [{
  //       label: "Chart Data",
  //       data: coinData.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) => curValue[1]),
  //       backgroundColor: [
  //         "red",
  //         "blue",
  //         "gray",
  //         "yellow",
  //         "pink"
  //       ],
  //       borderWidth: 2,
  //       borderColor: "black",
  //     }
  //     ]
  //   });
  // }
  // else if (days === 7) {
  //   setChartData({
  //     labels: coinData.filter((curValue, index) => (index > 0 && index % 24 === 0)).map((curValue, index) => new Date(curValue[0]).getDate() + "/" + (new Date(curValue[0]).getMonth() === 111 ? 11 : new Date(curValue[0]).getMonth() + 1) + "/" + new Date(curValue[0]).getFullYear()),

  //     datasets: [{
  //       label: "Chart Data",
  //       data: coinData.filter((curValue, index) => (index > 0 && index % 24 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
  //       backgroundColor: [
  //         "red",
  //         "blue",
  //         "gray",
  //         "yellow",
  //         "pink"
  //       ],
  //       borderWidth: 2,
  //       borderColor: "black",
  //     }
  //     ]
  //   });

  // }
  // else if (days === 30) {
  //   setChartData({
  //     labels: coinData.filter((curValue, index) => (index > 0 && index % 168 === 0)).map((curValue, index) => new Date(curValue[0]).getDate() + "/" + (new Date(curValue[0]).getMonth() === 111 ? "11" : new Date(curValue[0]).getMonth() + 1) + "/" + new Date(curValue[0]).getFullYear()),

  //     datasets: [{
  //       label: "Chart Data",
  //       data: coinData.filter((curValue, index) => (index > 0 && index % 168 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
  //       backgroundColor: [
  //         "red",
  //         "blue",
  //         "gray",
  //         "yellow",
  //         "pink"
  //       ],
  //       borderWidth: 2,
  //       borderColor: "black",
  //     }
  //     ]
  //   });

  // }
  // else if (days === 90) {


  //   setChartData({
  //     labels: coinData.filter((curValue, index) => (index > 0 && index % 672 === 0)).map((curValue, index) => new Date(curValue[0]).getDate() + "/" + new Date(curValue[0]).getMonth() + 1 + "/" + new Date(curValue[0]).getFullYear()),

  //     datasets: [{
  //       label: "Chart Data",
  //       data: coinData.filter((curValue, index) => (index > 0 && index % 24 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
  //       backgroundColor: [
  //         "red",
  //         "blue",
  //         "gray",
  //         "yellow",
  //         "pink"
  //       ],
  //       borderWidth: 2,
  //       borderColor: "black",
  //     }
  //     ]
  //   });

  // }





  const fetchCoinNameGraph = async () => {

    try {

      const getData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=${days}`);


      console.log("First Response ->");
      console.log(getData.data.prices[0][1]);

      console.log("Second Response ->");
      console.log(getData.data.prices[0][1]);

      dispatch(getChartLoadingStatus(false));



      return getData.data.prices;




    } catch (err) {
      console.log(err);
    }

  }







  const fetchCoinsListAPI = async () => {
    try {

      const getData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);


      const getResponse = await getData.json();
      console.log("NAMEEEEEEE = "+getResponse[0].id);

      // dispatch(getClearArray());

      dispatch(getCoinsList(getResponse));
      dispatch(getLoadingStatus(false));


    } catch (err) {
      console.log(err);
    }

  };



  // const fetchList = async () =>{
  //   try{
  //     dispatch(getCoinsList(await fetchCoinsListAPI()));

  //   }catch(err){
  //     console.log(err);
  //   }

  // };

  const fetchCoinGraph = async () =>{
    try{
       dispatch(getCoinData(await fetchCoinNameGraph()));

    }catch(err){
      console.log(err);
    }
  }





  useEffect((curValue) => {
    // dispatch(fetchList(currency));

    // dispatch(fetchGraph(coinName, currency, days));
  //   fetchCoinGraph();
    fetchCoinsListAPI();
  //   // fetchCoinNameGraph();

  }, [currency, coinName, days]);









  return <>

    <Routes>
      <Route exact path="/" element={<DashBoardUI />}></Route>
      <Route exact path="/trending" element={<TrendingCoins />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>




  </>
};


export default App;