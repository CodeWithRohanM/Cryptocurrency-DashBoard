import React from "react";


// Function To Display Individual Component Containig Coin Market Cap And Other Details
const MarketCapList = (props) => {

    return <>

        {/* Main Container */}
        <div className={`flex flex-row  ${props.getColor} rounded-md p-2 lg:p-3 items-center text-sm border-b border-black container mx-auto max-w-md`}>

            <div className="flex flex-row gap-x-4 items-center w-4/5">

                <img src={props.getCoinLogo} alt="coinLogo" className="w-6 h-6 lg:h-8 lg:w-8 animate-pulse"></img>

                <div className="flex flex-col gap-y-2 w-full text-left">
                    <h1 className="font-bold text-xs lg:text-md">{props.getCoinName}</h1>

                    <h1 className="text-gray-400 text-xs lg:text-md"><span className="text-gray-500 font-bold text-xs lg:text-md">Mark. Cap:</span> {props.getMarketCap}</h1>
                </div>

            </div>


            <div className="flex flex-row gap-x-1 lg:gap-x-2 items-center justify-center lg:justify-start w-1/5 flex-wrap">
                {
                    props.getPercentChange < 0 ? <i className="fa fa-sort-down" style={{ fontSize: "24px", color: "red" }}></i> : <i className="fa fa-sort-up" style={{ fontSize: "24px" }}></i>
                }
                <h1 className="text-xs lg:text-md">{props.getPercentChange.toFixed(2)}</h1>
            </div>

        </div>
    </>
};

export default MarketCapList;