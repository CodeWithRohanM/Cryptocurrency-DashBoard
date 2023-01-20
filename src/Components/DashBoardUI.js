import React, { useState } from "react";
import Header from "./Header";


import SearchBarSection from "./Sections/SearchBarSection";
import MainChartSection from "./Sections/MainChartSection";
import FooterSection from "./Sections/FooterSection";
import MarketCapListSection from "./Sections/MarketCap/MarketCapListSection";

import { useSelector, useDispatch } from "react-redux";




const DashBoardUI = (props) => {



    //USE SELECTOR HOOKS

    const coinData = useSelector((state) => state.callListAPIReducer.coinData);
    const chartLoadingStatus = useSelector((state) => state.callListAPIReducer.chartLoader);

    const dispatch = useDispatch();




    console.log("Coin Data is");
    console.log(coinData);
    console.log("Chart Loader = " + chartLoadingStatus);


    //USESTATE HOOKS
    const [backColor, setBackColor] = useState("");




    return <>

        <Header />

        <div className="bg-cyan-300">
            <div className="bg-cyan-100 h-screen pt-6 container mx-auto rounded-xl">

                <div className="flex flex-col gap-y-8 container mx-auto md:flex-row h-full md:gap-x-4">

                    <div className="flex flex-col gap-y-8 md:gap-y-5 md:w-9/12 flex-1 items-center bg-green-300">

                        <SearchBarSection />


                        <MainChartSection chartData={props.chartData} />


                        <FooterSection />

                    </div>


                <div className="flex flex-1 bg-red-300">
                    <MarketCapListSection />
                </div>
                </div>

            </div>
        </div>

    </>



};

export default DashBoardUI;