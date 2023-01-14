import React, { useEffect, useState } from "react";
import axios from "axios";



// import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale } from "chart.js";

import DashBoardUI from "./Components/DashBoardUI";
import { Data } from "./Utils/Data";


import { useSelector, useDispatch } from "react-redux";
import { getCoinData, getCoinsList, getCurrency, getLoadingStatus, getChartLoadingStatus } from "./Actions/actions";

const App = () => {

  const list = useSelector((state) => state.fetchAPI.coinsList);
  const currency = useSelector((state) => state.fetchAPI.currency);
  const coinName = useSelector((state) => state.fetchAPI.coinName);
  const coinData = useSelector((state) => state.fetchAPI.coinData);
  const dispatch = useDispatch();

  // Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale);

  const [loading, setLoading] = useState(true);




  console.log("Coin Selected = " + coinData.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) => new Date(curValue[0]).getHours()));

  console.log("Coin Data Length = " + coinData.length);


  console.log("Coin Selected = " + coinData.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) => curValue[1].toFixed(2)));




  const fetchCoinNameGraph = async () => {

    try {
      const getData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=1`);

      // const getResponse = await getData.json();

      console.log("First Response ->");
      console.log(getData.data.prices[0][1]);

      console.log("Second Response ->");
      console.log(getData.data.prices[0][1]);


      dispatch(getCoinData(getData.data.prices));

      dispatch(getChartLoadingStatus(false));



    } catch (err) {
      console.log(err);
    }

  }




  const fetchCoinsListAPI = async () => {
    try {
      const getData = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

      // const getData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

      // const getResponse = await getData.json();
      // console.log(getResponse);
      dispatch(getCoinsList(getData.data));

      dispatch(getLoadingStatus(false));


    } catch (err) {
      console.log(err);
    }

  };







  useEffect((curValue) => {
    fetchCoinsListAPI();
    fetchCoinNameGraph();

  }, [currency]);









  return <>

    <DashBoardUI />



  </>
};


export default App;