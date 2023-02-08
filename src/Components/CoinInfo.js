import React, { useState } from "react";

const CoinInfo = () => {

    // Initialising States
    const [inputCoinName, setInputCoinName] = useState("");
    const [displayCoinName, setDisplayCoinName] = useState("");
    const [getLoader, setGetLoader] = useState(false);
    const [statusMessage, setStatusMessage] = useState(true);
    const [getURL, setGetURL] = useState("");
    const [getImage, setGetImage] = useState("");
    const [getRank, setGetRank] = useState(1);
    const [getPrice, setGetPrice] = useState(1);
    const [getName, setGetName] = useState("");
    const [getDetails, setGetDetails] = useState("");


    // Function To Display Coin Name
    const showCoinName = async (event) => {
        if (event.key === "Enter") {

            try {
                setGetLoader(true);
                setStatusMessage(true);

                setDisplayCoinName(inputCoinName);

                document.getElementById("desc").style.display = "block";
                setInputCoinName("");

                const getData = await fetch(`https://api.coingecko.com/api/v3/coins/${inputCoinName}`);
                const getResponse = await getData.json();

                setGetImage(getResponse.image.small);
                setGetName(getResponse.name);
                setGetRank(getResponse.market_cap_rank);
                setGetPrice(getResponse.market_data.current_price.usd);
                setGetDetails(getResponse.description.en);
                setGetURL(getResponse.links.homepage[0]);

                // Delaying The Loader State To Display Loading Icon For User Experience
                setTimeout(() => {
                    setGetLoader(false);
                }, 2000);

            } catch (err) {
                setGetLoader(true);
                // Delaying The StatusMessage State
                setTimeout(() => {
                    setStatusMessage(false);
                }, 2000);
            }

        };

    }


    // Function To Fetch Respective API When User Searches For A Coin
    const fetchSearchAPI = async () => {

        try {
            setGetLoader(true);
            setStatusMessage(true);

            setDisplayCoinName(inputCoinName);
            document.getElementById("desc").style.display = "block";
            setInputCoinName("");

            const getData = await fetch(`https://api.coingecko.com/api/v3/coins/${inputCoinName}`);
            const getResponse = await getData.json();

            setGetImage(getResponse.image.small);
            setGetName(getResponse.name);
            setGetRank(getResponse.market_cap_rank);
            setGetPrice(getResponse.market_data.current_price.usd);
            setGetDetails(getResponse.description.en);
            setGetURL(getResponse.links.homepage[0]);


            // Delaying The Loader State To Display Loading Icon For User Experience
            setTimeout(() => {
                setGetLoader(false);
            }, 2000);

        } catch (err) {
            setGetLoader(true);
            // Delaying The StatusMessage State
            setTimeout(() => {
                setStatusMessage(false);
            }, 2000);
        }


    };




    return <>

        {/* Main Container */}
        <div className="min-w-screen min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 flex items-center p-5 lg:px-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-cyan-50 shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex-col md:space-y-12  text-center md:text-left">

                {/* Search Bar To Take User Input */}
                <div className="flex flex-1 flex-row gap-x-6 w-full container mx-auto md:max-w-xl border-b border-black py-2">
                    <input type="text" id="coinInput" placeholder="Enter Coin Name.." className="focus:outline-none text-gray-400 font-bold px-3 appearance-none border-none bg-transparent flex-1 uppercase" onKeyDown={showCoinName} value={inputCoinName} onChange={(event) => {
                        setInputCoinName(event.target.value);
                    }}></input>
                    <button type="button" className="bg-blue-500 text-white font-bold text-center px-4 py-2 rounded-md hover:-translate-y-1 transition ease-in-out duration-300 active:scale-90" onClick={fetchSearchAPI}>Search</button>
                </div>

                {/* When StatusMessage & Loader State Is True, Execute This Component*/}
                {
                    statusMessage && getLoader && <div className="flex flex-col items-center gap-y-6">
                        <h1 className="text-xl font-normal">Searching for {displayCoinName}....</h1>
                        <img src="/images/LoadingGif.gif" className="h-20 w-32 rounded-xl" />
                    </div>
                }

                {/* When StatusMessage State Is False, Execute This Component*/}
                {
                    !statusMessage && <div className="flex flex-col gap-y-4 items-center">
                        <img src="/images/sorry.png" className="h-28 w-28"></img>
                        <h1 className="text-lg font-semibold text-center">Could Not Find Your Coin..<br></br>Please Try Again..</h1>
                    </div>
                }


                <div id="desc" className="hidden">
                    {/* When The Loader State Is False, Execute This Component*/}

                    {
                        !getLoader && <div className=" flex-col space-y-8 rounded-xl bg-blue-100 px-20 tracking-wider leading-12 text-xl py-4 items-center">


                            <div className="flex flex-row gap-x-4 justify-center items-center border-b border-black w-full py-2">
                                <img src={getImage} className="h-14 w-14 animate-pulse"></img>
                                <h1 className="text-3xl font-bold tracking-wider uppercase">{getName}</h1>

                            </div>

                            <div className="flex flex-row conatiner mx-auto max-w-lg rounded-md shadow-2xl justify-between px-6 py-3 items-center hover:scale-110 transition ease-in-out duration-300">
                                <h1 className="text-red-500 font-bold text-xl">Rank: <span className="text-black font-bold text-3xl animate-pulse">#{getRank}</span></h1>
                                <h1 className="text-red-500 font-bold text-xl">Market Price: <span className="text-3xl text-black font-bold">${getPrice.toFixed(2)}</span></h1>
                            </div>


                            <div className=" p-6 px-8 rounded-xl shadow-2xl w-full text-center flex flex-col gap-y-6 items-center leading-relaxed">

                                <h1>{getDetails.slice(0, 450) + "..."}</h1>
                                <a href={getURL} target="_blank" type="button" className="bg-blue-500 text-white font-bold text-center rounded-md px-5 py-2 hover:-translate-y-1 transition ease-in-out duration-300 active:scale-90 animate-pulse animation-delay-7000">More Info..</a>

                            </div>
                        </div>
                    }

                </div>
            </div>


            <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div className="w-96 h-full bg-blue-200 bg-opacity-30 absolute -bottom-96 left-52 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>
    </>
};


export default CoinInfo;