import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinInfoAPI, getCoinInfoLoader } from "../Actions/actions";

const CoinInfo = () => {
    const dispatch = useDispatch();
    const getName = useSelector((state) => state.CoinInfoReducer.coinInfo.name);
    const getDetails = useSelector((state) => state.CoinInfoReducer.details);
    const getLoader = useSelector((state) => state.CoinInfoReducer.coinInfoLoader);
    const getURL = useSelector((state)=> state.CoinInfoReducer.url);
    const getImage = useSelector((state)=> state.CoinInfoReducer.image);
    // const getImage = useState((state) => state.CoinInfoReducer.coinInfoImage);
    // const getDetails = useState((state) => state.CoinInfoReducer.coinInfoDetails);


    const [inputCoinName, setInputCoinName] = useState("");

    const [displayCoinName, setDisplayCoinName] = useState("");



    const showCoinName = (event) => {
        if (event.key === "Enter") {
            document.getElementById("desc").style.display = "block";
            dispatch(getCoinInfoLoader(true));
    
            dispatch(fetchCoinInfoAPI(inputCoinName.toLowerCase()));
            setInputCoinName("");
        }
    }


    const fetchSearchAPI = () => {
        document.getElementById("desc").style.display = "block";
        dispatch(getCoinInfoLoader(true));

        dispatch(fetchCoinInfoAPI(inputCoinName.toLowerCase()));
        setInputCoinName("");


    }



    return <>


        <Header />

        <div class="min-w-screen min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 flex  items-center p-5 lg:px-20 overflow-hidden relative">
            <div class="flex-1 min-h-full min-w-full rounded-3xl bg-cyan-50 shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex-col md:space-y-12  text-center md:text-left">

                <div className="flex flex-row gap-x-6 w-full container mx-auto max-w-xl border-b border-black py-2">
                    <input type="text" id="coinInput" placeholder="Enter Coin Name.." className="focus:outline-none text-gray-400 font-bold px-3 appearance-none border-none bg-transparent flex-1 uppercase" onKeyDown={showCoinName} value={inputCoinName} onChange={(event) => {
                        setInputCoinName(event.target.value);

                    }}></input>
                    <button type="button" className="bg-blue-500 text-white font-bold text-center px-4 py-2 rounded-md hover:-translate-y-1 transition ease-in-out duration-300" onClick={fetchSearchAPI}>Search</button>
                </div>





                {
                    getLoader && <div className="flex flex-col items-center">
                        <img src="/images/LoadingGif.gif" className="h-20 w-32 rounded-xl"/>
                        </div>
                }

                <div id="desc" className="hidden">

                    {
                        !getLoader && <div className=" flex-col space-y-8 rounded-xl bg-blue-100 px-20 tracking-wider leading-12 text-xl py-4 items-center">





                            <div className="flex flex-row gap-x-4 justify-center items-center border-b border-black w-full py-2">
                                <img src={getImage} className="h-12 w-12"></img>
                                <h1 className="text-3xl font-bold tracking-wider uppercase">{getName}</h1>

                            </div>



                            <div className=" p-6 px-8 rounded-xl shadow-2xl w-full text-center flex flex-col gap-y-6 items-center leading-relaxed">


                                <h1>{getDetails.slice(0, 450) + "..."}</h1>
                                <a href={getURL} target="_blank" type="button" className="bg-blue-500 text-white font-bold text-center rounded-md px-5 py-2 hover:-translate-y-1 transition ease-in-out duration-300 active:scale-90">More Info..</a>

                            </div>
                        </div>
                    }

                </div>
            </div>


            <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div class="w-96 h-full bg-blue-200 bg-opacity-30 absolute -bottom-96 left-52 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>
    </>
};


export default CoinInfo;