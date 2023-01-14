import React, { useState } from "react";
import { PieChart, LineChart, BarChart } from "./DisplayLineChart";
import { Data } from "../Utils/Data";
import StaticChart from "./StaticChart";


import DisplayLineChart from "./DisplayLineChart";
import DisplayPieChart from "./DisplayPieChart";
import DisplayBarChart from "./DisplayBarChart";


import MarketCapList from "./MarketCapList";

import { useSelector, useDispatch } from "react-redux";
import { getCoinsList, getCurrency, getChartType, getCryptoCoinName } from "../Actions/actions";
import { Chart } from "chart.js";

const DashBoardUI = (props) => {

    const list = useSelector((state) => state.fetchAPI.coinsList);
    const currency = useSelector((state) => state.fetchAPI.currency);
    const chart = useSelector((state) => state.fetchAPI.chart);
    const coinData = useSelector((state) => state.fetchAPI.coinData);
    const loadingStatus = useSelector((state) => state.fetchAPI.loadingStatus);
    const chartLoadingStatus = useSelector((state) => state.fetchAPI.chartLoadingStatus);


    console.log("STATUSSSS = " + loadingStatus);

    const dispatch = useDispatch();




    return <>


        <div className="p-8 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 flex-1">

            <div className="flex flex-col gap-y-12 
md:flex-row 
justify-between items-center bg-yellow-300 container mx-auto">
                <div>
                    <img src="" alt="Logo_Img"></img>
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





        <div className="bg-gray-200 py-6 h-screen">

            <div className="flex flex-row gap-x-4 h-full container mx-auto bg-yellow-300">

                <div className="flex flex-col gap-y-4 w-9/12 flex-1">

                    <div id="serachBarLine" className="flex flex-row gap-x-4 bg-purple-500 container mx-auto max-w-4xl">

                        <select className="bg-red-300 py-2 rounded-md text-center font-bold px-3" onChange={(event) => {
                            const getValue = event.target.value;
                            dispatch(getCurrency(getValue));
                        }}>
                            <option selected>Currency</option>
                            <option value="usd">USD</option>
                            <option value="inr">INR</option>
                            <option value="eur">EUR</option>
                            <option value="jpy">JPY</option>
                        </select>

                        <div className="flex flex-row gap-x-3 w-full rounded-md px-2 bg-white items-center">
                            <div className="text-gray-400 text-xl">
                                <i className="fa fa-search"></i>
                            </div>
                            <input type="text" className="w-full h-full" placeholder="Search By Coin Name.."></input>
                        </div>

                    </div>






                    <div className="bg-red-400 h-full flex flex-col gap-y-5 container mx-auto max-w-4xl">


                        <div className="flex flex-col gap-y-6 h-3/5 items-start bg-blue-300 w-full">


                            <div className="flex flex-row justify-between w-full">

                                <div className="flex flex-row gap-x-4">
                                    <button className="bg-blue-500 px-4 py-2 rounded-md">1D</button>
                                    <button className="bg-blue-500 px-4 py-2 rounded-md">1W</button>
                                    <button className="bg-blue-500 px-4 py-2 rounded-md">1M</button>
                                    <button className="bg-blue-500 px-4 py-2 rounded-md">6M</button>
                                    <button className="bg-blue-500 px-4 py-2 rounded-md">1Y</button>
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

                            <div className="bg-green-400 w-full px-8 py-2 h-full flex items-center">

                                {
                                    (chartLoadingStatus) && <div className="flex flex-col items-center w-full">
                                        <img src="/images/LoadingGif.gif" className=" h-12 w-20 rounded-full" />
                                    </div>
                                }

                                {
                                    (!chartLoadingStatus) && (chart === "bar") && <DisplayBarChart/>
                                }

                                {
                                    (!chartLoadingStatus) &&  (chart === "line") && <DisplayLineChart/>
                                        
                                }

                                {
                                    (!chartLoadingStatus) && (chart === "pie") && <DisplayPieChart/>
                                }
                            </div>


                        </div>



                        <div className="h-fit bg-purple-400 flex flex-row gap-x-4 w-full">


                            <div className="flex w-1/2 bg-white rounded-md flex-col px-12 gap-y-8 py-4 flex-1">


                                <div className="flex flex-row justify-between">


                                    <div className="flex flex-col items-center bg-yellow-200 gap-y-4">
                                        <h1 className="font-bold text-lg">Portfolio</h1>
                                        <div className="h-40 w-40 items-center px-4">
                                            {/* <PieChart chartData={props.chartDataStatic} /> */}
                                            <StaticChart/>
                                        </div>
                                    </div>



                                    <div className="flex flex-col gap-y-4">

                                        <h1 className="font-bold"><span className="text-gray-400 font-bold">Total Value:</span> $1000</h1>

                                        <div className="flex flex-col gap-y-4">
                                            <h1>Tether</h1>
                                            <h1>Luna</h1>
                                            <h1>Ethereum</h1>
                                        </div>

                                    </div>

                                </div>

                            </div>







                            <div className="flex w-1/2 bg-white rounded-md flex-col gap-y-8 px-10 py-4 flex-1">

                                <div className="flex flex-row gap-x-4 justify-between">

                                    <div className="flex flex-col gap-y-5">


                                        <h1 className="font-bold text-lg">Exchange Coins</h1>



                                        <div className="flex flex-col gap-y-4">

                                            <div className="flex flex-row gap-x-4 items-center">
                                                <h1 className="text-red-500">Sell</h1>
                                                <select className="px-4 p-2 bg-gray-400 rounded-md">
                                                    <option selected>BitCoins</option>
                                                    <option>One</option>
                                                </select>
                                            </div>

                                            <div className="flex flex-row gap-x-4 items-center">
                                                <h1 className="text-gray-500">Buy</h1>
                                                <select className="px-4 py-2 bg-gray-400 rounded-md">
                                                    <option selected>Eth</option>
                                                    <option>Two</option>
                                                </select>

                                            </div>


                                        </div>

                                    </div>


                                    <div className="flex flex-col gap-y-9 px-4">

                                        <div className="flex flex-col gap-y-2">
                                            <h1 className="text-gray-500">Enter Value</h1>
                                            <input type="text" placeholder="Avl: 0.00234 BTC" className="border-gray-400 py-2 rounded-md px-2 border-2 flex-1"></input>
                                        </div>

                                        <h1 className="text-gray-500 text-md px-4">230000eth</h1>


                                    </div>

                                </div>



                                <div className="flex justify-center">
                                    <button type="button" className="bg-blue-500 text-white font-bold rounded-md px-4 py-2">Exchange</button>
                                </div>

                            </div>

                        </div>



                    </div>


                </div>






                <div className="w-3/12 bg-blue-300 flex flex-col gap-y-8 py-4 overflow-y-scroll">


                    <div className="max-w-xs items-center bg-yellow-300 flex flex-col gap-y-4">
                        <h1 className="text-center font-bold text-lg">CryptoCurrency By Market Cap</h1>
                        <h1 className="font-normal"><span className="text-gray-500 font-bold">Currency =</span> <span className="uppercase">{currency}</span></h1>
                    </div>


                    <div className="flex flex-col">
                        {
                            (loadingStatus) && <div className="flex flex-col items-center">
                                <img src="/images/LoadingGif.gif" className="h-12 w-20 rounded-full"></img>
                            </div>
                        }


                        {
                            (!loadingStatus) && list.map((curValue, index) => {
                                return <>
                                    <MarketCapList key={curValue.current_price} getCoinLogo={curValue.image} getCoinName={curValue.id} getMarketCap={curValue.market_cap} getPercentChange={curValue.market_cap_change_percentage_24h}></MarketCapList>

                                </>
                            })
                        }


                    </div>
                </div>



            </div>



        </div>

    </>



};

export default DashBoardUI;