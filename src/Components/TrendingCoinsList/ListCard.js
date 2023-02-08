import React from "react";

// Function To Display Individual Card Containig The Trending Coin Details
const ListCard = (props) => {

    return <>
        {/* Main Container */}
        <div className="rounded-xl flex flex-col gap-y-6 shadow-xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 p-4 tracking-wider relative hover:scale-110 transition ease-in-out duration-300 hover:rotate-2 antialiased">

            <div className="p-3 text-center rounded-t-xl border-b border-black">
                <h1 className="font-bold text-red-600">RANK : <span className="font-bold text-2xl text-black">#{props.rank}</span></h1>
            </div>

            <div className="flex flex-row justify-around text-xl items-center rounded-b-xl w-full">

                <div className="flex flex-col gap-y-2 items-center font-bold w-1/2 flex-wrap">
                    <img src={props.coinLogo} className="w-10 h-10 lg:w-14 lg:h-14"></img>
                    <h1 className="text-xs sm:text-sm lg:text-xl text-center w-full ">{props.coinName}</h1>
                </div>

                <div className="flex flex-col gap-y-3 items-center w-1/2 flex-wrap">
                    <h1 className="text-xs sm:text-sm lg:text-xl  w-full text-center">Symbol ⬇️</h1>
                    <h1 className="font-bold text-xs sm:text-sm lg:text-xl w-full text-center">{props.symbol}</h1>
                </div>

            </div>
        </div>

    </>
};

export default ListCard;