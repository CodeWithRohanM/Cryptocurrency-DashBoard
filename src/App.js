import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Different Components
import TrendingCoins from "./Components/TrendingCoinsList/TrendingCoins";
import ErrorPage from "./Components/ErrorPage";
import CoinInfo from "./Components/CoinInfo";
import Header from "./Components/Header";
import DashBoardUI from "./Components/DashBoardUI";
import { Data } from "./Utils/Data";

//Importing Action Methods
import { useSelector, useDispatch } from "react-redux";
import { setChartLoaderState, setStatusMessage, setLoaderState, fetchList } from "./Actions/actions";

const App = () => {

  const dispatch = useDispatch();

  // Using The Store To Get Respective Values
  const currency = useSelector((state) => state.callListAPIReducer.currency);
  const coinName = useSelector((state) => state.callListAPIReducer.coinName);
  const days = useSelector((state) => state.callListAPIReducer.days);


  // Initial Chart State
  // const [chartData, setChartData] = useState({
  //   labels: [],
  //   datasets: [],

  // });


  const [chartData, setChartData] = useState({
    labels: Data.map((curValue, index)=> curValue.userGain),

    datasets: [{
      label: "Chart Data",
      data: Data.map((curValue, index)=> curValue.userLost),
      backgroundColor: [
        "#0000FF",
              ],
      borderWidth: 2,
      borderColor: "black",
    }
    ]
  });









  // Function To Fetch Diifferent API's As Per The User Selection Of Duration (1Day, 7Days, 30Days, etc)
  const fetchCoinNameGraph = async () => {

    try {

      // Fetching API with changing coinName, Currency & Days 
      const getData = await fetch(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=${days}`);

      // Getting Back Response in Json Format
      const getResponse = await getData.json();

      // Applying Conditions With Respect To User Days Selection
      if (days === 1) {
        // Setting The Chart Labels And Data To Be Displayed
        setChartData({
          labels: getResponse.prices.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) =>
            (new Date(curValue[0]).getHours() > 12) ? (new Date(curValue[0]).getHours() - 12 + "PM") : (
              (new Date(curValue[0]).getHours() === 0) ? "12 AM" : (new Date(curValue[0]).getHours() + "AM")
            )
          ),

          datasets: [{
            label: "Each Hour",
            data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 12 === 0)).map((curValue, index) => curValue[1]),
            backgroundColor: [
              "#1E90FF"
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
            label: "Each Day",
            data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 24 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
            backgroundColor: [
              "#1E90FF"
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
            label: "Each Week",
            data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 168 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
            backgroundColor: [
              "#1E90FF"
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
            label: "Each Month",
            data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 672 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
            backgroundColor: [
              "#1E90FF"
            ],
            borderWidth: 2,
            borderColor: "black",
          }
          ]
        });

      }
      else if (days === 180) {
        setChartData({
          labels: getResponse.prices.filter((curValue, index) => (index > 0 && index % 672 === 0)).map((curValue, index) => new Date(curValue[0]).getDate() + "/" + new Date(curValue[0]).getMonth() + 1 + "/" + new Date(curValue[0]).getFullYear()),

          datasets: [{
            label: "Every Month",
            data: getResponse.prices.filter((curValue, index) => (index > 0 && index % 672 === 0)).map((curValue, index) => curValue[1].toFixed(2)),
            backgroundColor: [
              "#1E90FF"
            ],
            borderWidth: 2,
            borderColor: "black",
          }
          ]
        });

      }


      // Delaying The Loader State To Display Loading Icon
      // Also, Setting The Status State To Be True To Verify The Result Received
      setTimeout(() => {
        dispatch(setChartLoaderState(false));
        dispatch(setStatusMessage(true));
      }, 1500);



      // Catching Any Errors If Any
      // Also Delaying The Error Catching To Dispaly A Loader And 
      // Finally Display The Error Text Message To The User
    } catch (err) {
      setTimeout(() => {
        dispatch(setStatusMessage(false));

      }, 1500);
      console.log("ERR =" + err);
    }

  }



  // useEffect((curValue) => {
  //   //Setting Loading States
  //   dispatch(setLoaderState(true));
  //   dispatch(setChartLoaderState(true));


  //   //Calling API's
  //   dispatch(fetchList(currency));
  //   fetchCoinNameGraph();

  // }, [currency]);


  // useEffect((curValue) => {
  //   //Setting Loading States
  //   dispatch(setChartLoaderState(true));

  //   //Calling API's
  //   fetchCoinNameGraph();

  // }, [days, coinName]);



  return <>

    <Header />

    {/* Using Routes To Route The User On Diiferent Pages*/}
    <Routes>
      <Route exact path="/" element={<DashBoardUI chartData={chartData} />}></Route>
      <Route exact path="/trending" element={<TrendingCoins />}></Route>
      <Route exact path="/info" element={<CoinInfo />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>




  </>
};


export default App;