import React from "react";

const ListCard = (props) => {

    return <>
        <div className="rounded-xl flex flex-col gap-y-6 shadow-xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 p-4 tracking-wider relative z-10">

            <div className="p-3 text-center rounded-t-xl border-b border-black">
                <h1 className="font-bold text-red-600">RANK : <span className="font-bold text-2xl text-black">#{props.rank}</span></h1>
            </div>


            <div className="flex flex-row justify-around text-xl items-center rounded-b-xl">

                <div className="flex flex-col gap-y-2 items-center font-bold">
                    <img src={props.coinLogo} className="w-14 h-14"></img>
                    <h1>{props.coinName}</h1>
                </div>

                <div className="flex flex-col gap-y-3 items-center">
                    <h1>Symbol ⬇️</h1>
                    <h1 className="font-bold">{props.symbol}</h1>
                </div>

            </div>
        </div>

    </>
};

export default ListCard;