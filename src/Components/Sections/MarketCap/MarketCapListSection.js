import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MarketCapList from "./MarketCapList";



const MarketCapListSection = () => {

    // Fetchig Store States
    const currency = useSelector((state) => state.callListAPIReducer.currency);
    const loadingStatus = useSelector((state) => state.callListAPIReducer.loader);
    const list = useSelector((state) => state.callListAPIReducer.coinsList);

    // Default Currency Icon To Display
    let currencyIcon = "$";

    // Conditions To Display Diiferent Currency Icons As Per User Selection
    if (currency === "inr") {
        currencyIcon = "₹";
    }
    else if (currency === "eur") {
        currencyIcon = "€";
    }
    else if (currency === "jpy") {
        currencyIcon = "¥"
    }


    return <>
        {/* Main Container */}
        <div className="h-96 md:h-full container mx-auto flex flex-col gap-y-8 overflow-y-scroll scroll-smooth">

            <div className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 flex flex-col 
            gap-y-2 lg:gap-y-4 py-4 container mx-auto items-center sm:max-w-xs rounded-md shadow-xl ">

                <h1 className="text-center font-bold sm:text-sm lg:text-xl tracking-widest">Cryptocurrency By Market Cap</h1>
                <h1 className="font-normal"><span className="text-gray-500 font-bold sm:text-sm lg:text-xl tracking-wider">Currency =</span> <span className="uppercase font-bold sm:text-md lg:text-xl">{currencyIcon} {currency}</span></h1>
            </div>


            <div className="flex flex-col lg:px-0">

                {/* When LoadingStatus State is True, Execute This Component */}
                {
                    (loadingStatus) && <div className="flex flex-col items-center">
                        <img src="/images/LoadingGif.gif" className="h-12 w-20 rounded-full"></img>
                    </div>
                }


                {/* When LoadingStatus State Is False, Execute This Component */}
                {
                    (!loadingStatus) && list.map((curValue, index) => {
                        return index % 2 === 0 ?
                            <MarketCapList key={curValue.current_price} getCoinLogo={curValue.image} getCoinName={curValue.id} getMarketCap={curValue.market_cap} getPercentChange={curValue.market_cap_change_percentage_24h} getColor="bg-white"></MarketCapList>
                            :
                            <MarketCapList key={curValue.current_price} getCoinLogo={curValue.image} getCoinName={curValue.id} getMarketCap={curValue.market_cap} getPercentChange={curValue.market_cap_change_percentage_24h} getColor="bg-gray-200"></MarketCapList>

                    })
                }

            </div>
        </div>
    </>
};

export default MarketCapListSection;