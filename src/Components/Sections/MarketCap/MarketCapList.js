import React from "react";

const MarketCapList = (props) => {

    return <>

        <div className={`flex flex-row  ${props.getColor} rounded-md p-3 items-center text-sm pb-4 border-b border-black`}>

            <div className="flex flex-row gap-x-4 items-center w-4/5">

                <img src={props.getCoinLogo} alt="coinLogo" className="h-8 w-8 animate-pulse"></img>

                <div className="flex flex-col gap-y-2">
                    <h1 className="font-bold">{props.getCoinName}</h1>

                    <h1 className="text-gray-400"><span className="text-gray-500 font-bold">Mark. Cap:</span> {props.getMarketCap}</h1>
                </div>

            </div>


            <div className="flex flex-row gap-x-2 items-center justify-start w-1/5">
                {
                    props.getPercentChange < 0 ? <i className="fa fa-sort-down" style={{fontSize : "24px", color: "red"}}></i> : <i className="fa fa-sort-up" style={{fontSize:"24px"}}></i>
                }
                <h1>{props.getPercentChange.toFixed(2)}</h1>
            </div>

        </div>
    </>
};

export default MarketCapList;