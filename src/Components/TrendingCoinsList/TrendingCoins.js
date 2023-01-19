import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trendingListAPI, getTrendingLoader } from "../../Actions/actions";
import ListCard from "./ListCard";
import Header from "../Header";
import { NavLink } from "react-router-dom";

const TrendingCoins = () => {

    const trendingList = useSelector((state) => state.callListAPIReducer.trendingCoinsList);
    const loader = useSelector((state) => state.callListAPIReducer.trendingLoader);
    const dispatch = useDispatch();





    const fetchTrendingCoinsList = async () => {
        try {
            dispatch(getTrendingLoader(true));
            document.getElementById("trendingList").style.display = "block";
            dispatch(trendingListAPI());

            // const getData = await fetch("https://api.coingecko.com/api/v3/search/trending");
            // const getResponse = await getData.json();

            // dispatch(getTrendingCoinsList(getResponse.coins));



        } catch (err) {
            console.log(err);
        }

    }


    return <>

        <Header />

        <div className="flex h-screen flex-col gap-y-20  p-12  bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 overflow-scroll">

            <div className="flex flex-row container mx-auto">


                <button type="button" className="bg-gradient-to-r from-red-200 to-red-600 rounded-md text-white uppercase tracking-wider font-bold text-2xl container mx-auto max-w-lg flex flex-row gap-x-4 items-center justify-center
             py-4 hover:cursor-pointer hover:-translate-y-1 transition ease-in-out duration-300 shadow-2xl active:scale-90 focus:animate-none animate-pulse" onClick={fetchTrendingCoinsList}>
                    <h1>Get Today's Trending Coins</h1>
                    <img src="/images/coinGiff.gif" className="w-8 h-8"></img>
                </button>

                <NavLink to="/" className="bg-gradient-to-r from-red-200 to-red-600 rounded-md text-white uppercase tracking-wider font-bold text-2xl px-4 flex flex-row gap-x-4 items-center justify-center
             py-4 hover:cursor-pointer hover:-translate-y-1 transition ease-in-out duration-300 shadow-2xl active:scale-90" >
                    <h1>🏠</h1>
                </NavLink>
            </div>


            <div id="trendingList" className="hidden max-h-2xl container mx-auto">

                {
                    loader && <div className="flex flex-col items-center ">
                        <img src="/images/LoadingGif.gif" className="h-20 w-32 rounded-xl"></img>
                    </div>
                }
                {
                    !loader && <div className="grid grid-cols-3 gap-x-16 gap-y-20">
                        {
                            trendingList.filter((curValue, index) => index < 6).map((curValue, index) => {

                                return <>

                                    <ListCard key={curValue.item.price_btc} rank={index + 1} coinLogo={curValue.item.large} coinName={curValue.item.name} symbol={curValue.item.symbol}>
                                    </ListCard>

                                </>


                            })
                        }
                    </div>
                }


            </div>

        </div>
    </>
};

export default TrendingCoins;