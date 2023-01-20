import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDaysCount, getCryptoCoinName, setChartLoaderState, getChartType } from "../../Actions/actions";

import DisplayBarChart from "../Charts/DisplayBarChart";
import DisplayLineChart from "../Charts/DisplayLineChart";
import DisplayPieChart from "../Charts/DisplayPieChart";

const MainChartSection = (props) => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.callListAPIReducer.coinsList);

    const chart = useSelector((state) => state.callListAPIReducer.chart);
    const chartLoadingStatus = useSelector((state) => state.callListAPIReducer.chartLoader);
    const days = useSelector((state) => state.callListAPIReducer.days);
    const coinName = useSelector((state) => state.callListAPIReducer.coinName);


    return <>

        <div className="md:h-3/6 flex flex-col gap-y-10 md:gap-y-6 container mx-auto  md:max-w-4xl">

            <div className="flex flex-row justify-between md:pl-16">

                <div className="flex flex-row gap-x-2 md:gap-x-4 hover:cursor-pointer font-bold">
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110 active:scale-90 focus:scale-70" onClick={() => dispatch(getDaysCount(1))
                    }>1D</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(7))
                    }>1W</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(30))}>1M</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(90))}>3M</button>
                    <button className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={() => dispatch(getDaysCount(180))}>6M</button>
                </div>

                <div className="flex flex-row gap-x-4">

                    <select className="py-2 rounded-md bg-white px-4 text-center font-bold tracking-wider" onChange={(event) => {
                        const getValue = event.target.value;
                        dispatch(getCryptoCoinName(getValue));
                    }}>
                        <option selected>{coinName}</option>
                        {
                            list.map((curValue, index) => {

                                return <>
                                    <option value={curValue.id} className="bg-white py-3 text-black">{curValue.name}</option>

                                </>

                            })
                        }



                    </select>

                    <select className="py-2 rounded-md bg-white px-4 text-center font-bold tracking-wider" onChange={(event) => {
                        dispatch(setChartLoaderState(true));
                        const getValue = event.target.value;
                        setTimeout(() => {
                            dispatch(getChartType(getValue));
                        }, 500);
                    }}>
                        <option selected>Line Chart</option>
                        <option value="bar">Bar Chart</option>
                        <option value="line">Line Chart</option>
                        <option value="pie">Pie Chart</option>
                    </select>

                </div>
            </div>


            <div className="flex flex-row gap-x-4 justify-between items-center bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 container mx-auto max-w-lg py-2 rounded-lg px-4 shadow-2xl">
                <h1><span className="font-bold tracking-wider text-sm">Coin Name =</span> <span className="text-gray-600 font-bold uppercase tracking-wider">{coinName}</span></h1>
                <h1><span className="font-bold tracking-wider text-sm">Data Duration =</span> <span className="text-gray-600 font-bold uppercase tracking-wider">{days} Days</span></h1>
            </div>







            <div id="data" className="flex md:h-4/6 container mx-auto md:max-w-3xl bg-yellow-300  items-center justify-center">


                {
                    (chartLoadingStatus) && <div className="flex flex-col gap-y-4 items-center w-full">
                        <h1 className="text-xl font-bold text-center tracking-wider">Fetching Chart Data..</h1>
                        <img src="/images/LoadingGif.gif" className=" h-12 w-22 rounded-full" />
                    </div>
                }

                {
                    (!chartLoadingStatus) && (chart === "bar") && <DisplayBarChart chartData={props.chartData} />
                }

                {
                    (!chartLoadingStatus) && (chart === "line") && <DisplayLineChart chartData={props.chartData ? props.chartData : window.alert("Could Not Fetch")} />

                }

                {
                    (!chartLoadingStatus) && (chart === "pie") && <DisplayPieChart chartData={props.chartData} />
                }
            </div>

        </div>

    </>
};

export default MainChartSection;