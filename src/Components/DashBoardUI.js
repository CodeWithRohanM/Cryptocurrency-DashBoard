import React, { useState } from "react";

import { PieChart, LineChart, BarChart } from "./DisplayLineChart";
import { Data } from "../Utils/Data";
import StaticChart from "./StaticChart";


import DisplayLineChart from "./DisplayLineChart";
import DisplayPieChart from "./DisplayPieChart";
import DisplayBarChart from "./DisplayBarChart";


import MarketCapList from "./MarketCapList";

import { useSelector, useDispatch } from "react-redux";
import { getCoinsList, getCurrency, getChartType, getCryptoCoinName, getDivisionNumber, getDaysCount } from "../Actions/actions";
import { Chart } from "chart.js";

const DashBoardUI = (props) => {

    const list = useSelector((state) => state.fetchAPI.coinsList);
    const currency = useSelector((state) => state.fetchAPI.currency);
    const chart = useSelector((state) => state.fetchAPI.chart);
    const coinData = useSelector((state) => state.fetchAPI.coinData);
    const loadingStatus = useSelector((state) => state.fetchAPI.loadingStatus);
    const chartLoadingStatus = useSelector((state) => state.fetchAPI.chartLoadingStatus);
    const divisionNumber = useSelector((state) => state.fetchAPI.divisionNumber);
    const days = useSelector((state) => state.fetchAPI.days);
    const coinName = useSelector((state) => state.fetchAPI.coinName);



    const [backColor, setBackColor] = useState("");
    const [exchangeRate, setExchangeRate] = useState(13.445);
    const [exchangeName, setExchangeName] = useState("ETH");
    const [selectedExchangeValue, setSelectedExchangeValue] = useState("");
    const [storeCoinName, setStoreCoinName] = useState("");



    const sendCoinNameData = (event) =>{
        if(event.key === "Enter")
        {
            dispatch(getCryptoCoinName(storeCoinName.toLowerCase()));
            // console.log(storeCoinName.toLowerCase());
            setStoreCoinName("");
        }

    }




    // const input = document.getElementById("myInput");

    // input.addEventListener("keypress", function (event) {
    //     if (event.key === "Enter") {
    //         console.log("Coin Name = "+storeCoinName);
    //         // dispatch(getCryptoCoinName(storeCoinName));
    //     }
    // });


    console.log("STATUSSSS = " + loadingStatus);

    const dispatch = useDispatch();




    const exchangeCoins = () => {

        if (selectedExchangeValue === "tether") {
            setExchangeRate(20626.04);
            setExchangeName("TETH");
        }
        else if (selectedExchangeValue == "binance") {
            setExchangeRate(68.01)
            setExchangeName("BNS");
        }
        else if (selectedExchangeValue === "xrp") {
            setExchangeRate(52811.44);
            setExchangeName("RPP");
        }
    }










    return <>


        <div className="bg-gray-200 h-screen">


            <div className="h-20 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 flex-1 flex items-center mb-6">

                <div className="flex flex-col gap-y-12 
                md:flex-row 
                justify-between items-center bg-yellow-300 container mx-auto">
                    <div>
                        <img src="/images/alma.png" alt="Logo_Img" className="h-12"></img>
                    </div>


                    <div className="flex flex-col gap-y-3 text-xl font-bold
                md:flex-row md:gap-x-6">
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Articles</h1>
                        <h1>Conatct Us</h1>
                    </div>
                </div>
            </div>








            <div className="flex flex-row h-full container mx-auto bg-yellow-300">

                <div className="flex flex-col gap-y-4 w-9/12 flex-1">

                    <div id="serachBarLine" className="flex flex-row gap-x-4 bg-purple-500 container mx-auto max-w-4xl">

                        <select className="bg-red-300 py-3 rounded-md text-center font-bold px-3" onChange={(event) => {
                            const getValue = event.target.value;
                            dispatch(getCurrency(getValue));
                        }}>
                            <option selected>Currency</option>
                            <option value="usd">USD</option>
                            <option value="inr">INR</option>
                            <option value="eur">EUR</option>
                            <option value="jpy">JPY</option>
                        </select>

                        <div className="flex flex-row gap-x-3 w-full rounded-md px-4 bg-white items-center">
                            <div className="text-gray-400 text-xl text-center">
                                <i className="fa fa-search"></i>
                            </div>
                            <input id="myInput" type="text" className="w-full h-full px-3 text-gray-400 font-bold focus:outline-none" placeholder="Search By Coin Name.." value={storeCoinName} onChange={(event) => {
                                setStoreCoinName(event.target.value);
                            }} onKeyDown={sendCoinNameData}></input>
                        </div>

                    </div>






                    <div className="bg-red-400 h-3/6 flex flex-col gap-y-6 container mx-auto max-w-4xl">


                        <div className="flex flex-row justify-between bg-pink-400 pl-16">

                            <div className="flex flex-row gap-x-4 hover:cursor-pointer">
                                <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-purple-800 " onClick={() => dispatch(getDaysCount(1))}>1D</button>
                                <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-purple-800" onClick={() => dispatch(getDaysCount(7))}>1W</button>
                                <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-purple-800" onClick={() => dispatch(getDaysCount(30))}>1M</button>
                                <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-purple-800" onClick={() => dispatch(getDaysCount(90))}>3M</button>
                                <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-purple-800" onClick={() => dispatch(getDaysCount(180))}>6M</button>
                            </div>

                            <div className="flex flex-row gap-x-4">

                                <select className="py-2 rounded-md bg-white px-4 text-center font-bold" onChange={(event) => {
                                    const getValue = event.target.value;
                                    dispatch(getCryptoCoinName(getValue));

                                }}>
                                    <option selected>CryptoCurrency</option>
                                    {
                                        list.map((curValue, index) => {
                                            return <>

                                                <option value={curValue.id}>{curValue.name}</option>

                                            </>
                                        })
                                    }


                                </select>

                                <select className="py-2 rounded-md bg-white px-4 text-center font-bold" onChange={(event) => {
                                    const getValue = event.target.value;
                                    dispatch(getChartType(getValue));

                                }}>
                                    <option selected>Chart Type</option>
                                    <option value="bar">Bar Chart</option>
                                    <option value="line">Line Chart</option>
                                    <option value="pie">Pie Chart</option>
                                </select>

                            </div>
                        </div>


                        <div className="flex flex-row gap-x-4 justify-between items-center bg-purple-400 container mx-auto max-w-md py-2 rounded-lg px-3 shadow-2xl">
                            <h1><span className="font-bold">Coin Name =</span> <span className="text-gray-600 font-bold uppercase">{coinName}</span></h1>
                            <h1><span className="font-bold">Data Duration =</span> <span className="text-gray-600 font-bold uppercase">{days} Days</span></h1>
                        </div>

                        <div className="bg-green-400 h-4/6 container mx-auto max-w-3xl py-2 flex items-center justify-center">

                            {
                                (chartLoadingStatus) && <div className="flex flex-col items-center w-full">
                                    <img src="/images/LoadingGif.gif" className=" h-12 w-20 rounded-full" />
                                </div>
                            }

                            {
                                (!chartLoadingStatus) && (chart === "bar") && <DisplayBarChart chartData={props.chartData} />
                            }

                            {
                                (!chartLoadingStatus) && (chart === "line") && <DisplayLineChart chartData={props.chartData} />

                            }

                            {
                                (!chartLoadingStatus) && (chart === "pie") && <DisplayPieChart chartData={props.chartData} />
                            }
                        </div>

                    </div>



                    <div className="h-56 bg-purple-400 flex flex-row gap-x-4 container mx-auto max-w-4xl">


                        <div className="flex w-1/2 bg-white rounded-md px-12 gap-x-6 py-4 flex-1 flex-row justify-between">



                            <div className="flex flex-col items-center bg-yellow-200 gap-y-4">
                                <h1 className="font-bold text-lg">Portfolio</h1>

                                <div className="h-40 w-40 items-center px-4">
                                    {/* <PieChart chartData={props.chartDataStatic} /> */}
                                    <StaticChart />
                                </div>
                            </div>



                            <div className="flex flex-col gap-y-4">

                                <h1 className="font-bold"><span className="text-gray-400 font-bold">Total Value:</span> $1000</h1>

                                <div className="flex flex-col gap-y-4">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <img src="/images/red_dot.png" className="h-3 w-3"></img>
                                        <h1>Tether</h1>
                                    </div>
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <img src="/images/yellow_dot.png" className="h-3 w-3"></img>
                                        <h1>Luna</h1>
                                    </div>
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <img src="/images/green_dot.png" className="h-3 w-3"></img>
                                        <h1>Ethereum</h1>
                                    </div>
                                </div>

                            </div>


                        </div>







                        <div className="flex w-1/2 bg-white rounded-md flex-col gap-y-7 px-10 py-4 flex-1">

                            <div className="flex flex-row gap-x-5 justify-between">

                                <div className="flex flex-col gap-y-6 w-1/2">


                                    <h1 className="font-bold text-lg">Exchange Coins</h1>



                                    <div className="flex flex-col gap-y-4">

                                        <div className="flex flex-row gap-x-4 items-center">
                                            <h1 className="text-red-500 font-bold">Sell</h1>
                                            <select className="px-4 p-2 bg-gray-400 rounded-md">
                                                <option selected>BitCoins</option>
                                            </select>
                                        </div>

                                        <div className="flex flex-row gap-x-4 items-center">
                                            <h1 className="text-gray-500 font-bold">Buy</h1>
                                            <select className="px-4 py-2 bg-gray-400 rounded-md" onChange={(event) => {
                                                setSelectedExchangeValue(event.target.value);

                                            }}>
                                                <option selected>Ethereum</option>
                                                <option value="tether">Tether</option>
                                                <option value="binance">Binance Coin</option>
                                                <option value="xrp">Ripple Coin</option>
                                            </select>

                                        </div>


                                    </div>

                                </div>


                                <div className="flex flex-col gap-y-9 px-4 w-1/2">

                                    <div className="flex flex-col gap-y-4">
                                        <h1 className="text-gray-500">Your Avl. Balances</h1>
                                        <input type="text" value={`Avl:  ${exchangeRate} ${exchangeName}`} className="border-gray-400 py-2 rounded-md px-2 border-2 font-bold text-sm"></input>
                                    </div>

                                    <h1 className="text-gray-500 text-md px-4">230000eth</h1>


                                </div>

                            </div>



                            <div className="flex justify-center">
                                <button type="button" className="bg-blue-500 text-white font-bold rounded-md px-4 py-2" onClick={exchangeCoins}>Exchange</button>
                            </div>

                        </div>

                    </div>



                </div>









                <div className="w-96 flex flex-col gap-y-8 pt-4 overflow-y-scroll bg-sky-400">


                    <div className="bg-red-300 flex flex-col gap-y-4 py-4 container mx-auto items-center max-w-xs rounded-md">
                        <h1 className="text-center font-bold text-xl">CryptoCurrency By Market Cap</h1>
                        <h1 className="font-normal"><span className="text-gray-500 font-bold">Currency =</span> <span className="uppercase font-bold">{currency}</span></h1>
                    </div>


                    <div className="flex flex-col px-4">
                        {
                            (loadingStatus) && <div className="flex flex-col items-center">
                                <img src="/images/LoadingGif.gif" className="h-12 w-20 rounded-full"></img>
                            </div>
                        }


                        {
                            (!loadingStatus) && list.map((curValue, index) => {
                                return index % 2 === 0 ?
                                    <MarketCapList key={curValue.current_price} getCoinLogo={curValue.image} getCoinName={curValue.id} getMarketCap={curValue.market_cap} getPercentChange={curValue.market_cap_change_percentage_24h} bgColors='white'></MarketCapList>
                                    :
                                    <MarketCapList key={curValue.current_price} getCoinLogo={curValue.image} getCoinName={curValue.id} getMarketCap={curValue.market_cap} getPercentChange={curValue.market_cap_change_percentage_24h} bgColors='sky-300'></MarketCapList>

                            })
                        }


                    </div>
                </div>



            </div>



        </div>

    </>



};

export default DashBoardUI;