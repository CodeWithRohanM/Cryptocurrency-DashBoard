import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDaysCount, getCryptoCoinName, setChartLoaderState, setImageURL } from "../../Actions/actions";

import DisplayBarChart from "../Charts/DisplayBarChart";
import DisplayLineChart from "../Charts/DisplayLineChart";
import DisplayBarHorizontalChart from "../Charts/DisplayBarHorizontalChart";


const MainChartSection = (props) => {
    const dispatch = useDispatch();

    // FETCHING STORE DATA
    const list = useSelector((state) => state.callListAPIReducer.coinsList);
    const chartLoadingStatus = useSelector((state) => state.callListAPIReducer.chartLoader);
    const days = useSelector((state) => state.callListAPIReducer.days);
    const coinName = useSelector((state) => state.callListAPIReducer.coinName);
    const imageURL = useSelector((state) => state.callListAPIReducer.imageURL);
    const statusMessage = useSelector((state) => state.callListAPIReducer.statusMessage);

    // USING USE STATE HOOK
    const [chartType, setChartType] = useState("line");
    let chartImage = "";
    let padding = ""

    if (chartType === "line") {
        chartImage = "📈";
        padding = "8";
    }
    if (chartType === "bar") {
        chartImage = "📊";
        padding = "1";
    }



    return <>

        <div className="md:h-3/6 flex flex-col gap-y-10 md:gap-y-6 container mx-auto w-full md:max-w-4xl antialiased">

            <div className="flex flex-row justify-between md:pl-16 container mx-auto">
                <div className="flex flex-row gap-x-2 md:gap-x-4 hover:cursor-pointer font-bold">
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110 active:scale-90 focus:scale-70" onClick={() => dispatch(getDaysCount(1))
                        // dispatch(setChartLoaderState(true));
                    }>1D</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(7))
                    }>1W</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(30))}>1M</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(90))}>3M</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(180))}>6M</button>
                </div>

                <div className="flex flex-row gap-x-2 md:gap-x-4 relative">
                    <div className="absolute z-10 px-3 py-1.5">
                        {
                            statusMessage ? <img src={imageURL} className="w-7 h-7 rounded-full"></img> : <img src="images/warning.png" className="w-7 h-7 rounded-full"></img>
                        }
                        
                    </div>
                    <select className="py-2 shadow-xl rounded-md bg-white md:px-4 text-center font-bold tracking-wider" onChange={(event) => {
                        const getValue = event.target.value;
                        dispatch(getCryptoCoinName(getValue));
                        dispatch(setImageURL(getValue));
                    }}>
                        {/* <img src={image} className="w-8 h-8 absolute"></img> */}
                        <option selected>{coinName}</option>
                        {
                            list.map((curValue, index) => {

                                return <>
                                    <option key={curValue.market_cap} value={curValue.id} className="bg-white py-3 text-black">{curValue.name}</option>

                                </>

                            })
                        }



                    </select>


                    <div className="flex relative">
                        <div className={`absolute z-10 px-${padding} py-2`}>
                            <h1 className="w-7 h-7">{chartImage}</h1>
                        </div>
                        <select className="py-2 shadow-xl rounded-md bg-white md:px-4 text-center font-bold tracking-wider" onChange={(event) => {
                            dispatch(setChartLoaderState(true));
                            const getValue = event.target.value;
                            setChartType(getValue);
                            setTimeout(() => {
                                dispatch(setChartLoaderState(false));
                            }, 1000);
                        }}>

                            <option value="bar">Bar Chart Vertical</option>
                            <option value="line" selected>Line Chart</option>
                            <option value="bar_horizontal">Bar Chart Horizontal</option>
                        </select>
                    </div>

                </div>
            </div>


            <div className="flex flex-row gap-x-4 justify-between items-center bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 container mx-auto max-w-lg py-2 rounded-lg px-4 shadow-2xl">
                <h1><span className="font-bold tracking-wider text-sm">Coin Name =</span> <span className="text-gray-600 font-bold uppercase tracking-wider">{coinName}</span></h1>
                <h1><span className="font-bold tracking-wider text-sm">Data Duration =</span> <span className="text-gray-600 font-bold uppercase tracking-wider">{days} Days</span></h1>
            </div>







            <div id="data" className="flex md:h-4/6 container mx-auto md:max-w-3xl  items-center justify-center">


                {
                    statusMessage && (chartLoadingStatus) && <div className="flex flex-col gap-y-4 items-center w-full">
                        <h1 className="text-xl font-bold text-center tracking-wider">Fetching Chart Data..</h1>
                        <img src="/images/LoadingGif.gif" className=" h-12 w-22 rounded-full" />
                    </div>
                }

                {
                    !statusMessage && <div className="flex flex-col gap-y-4 items-center">
                        <img src="/images/sorry.png" className="h-28 w-28"></img>
                        <h1 className="text-xl font-semibold text-center">Could Not Find Your Coin..<br></br>Please Try Again..</h1>
                        </div>
                }



                {
                    (!chartLoadingStatus) && (chartType === "bar") && statusMessage && <DisplayBarChart chartData={props.chartData} />
                }

                {
                    (!chartLoadingStatus) && (chartType === "line") && statusMessage && <DisplayLineChart chartData={props.chartData ? props.chartData : window.alert("Could Not Fetch")} />

                }

                {
                    (!chartLoadingStatus) && (chartType === "bar_horizontal") && statusMessage &&<DisplayBarHorizontalChart chartData={props.chartData} />
                }
            </div>

        </div>

    </>
};

export default MainChartSection;