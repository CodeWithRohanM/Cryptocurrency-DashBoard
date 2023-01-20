import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MarketCapList from "./MarketCapList";



const MarketCapListSection = () => {
    const currency = useSelector((state)=> state.callListAPIReducer.currency);
    const loadingStatus = useSelector((state)=> state.callListAPIReducer.loader);
    const list = useSelector((state)=> state.callListAPIReducer.coinsList);

    let currencyIcon = "$";

    if(currency === "inr")
    {
        currencyIcon = "₹";
    }
    else if(currency === "eur")
    {
        currencyIcon = "€";
    }
    else if(currency === "jpy")
    {
        currencyIcon = "¥"
    }

    const dispatch = useDispatch();

    return <>
        <div className="h-96 md:h-full container mx-auto md:w-96 flex flex-col gap-y-8  overflow-y-scroll scroll-smooth">


            <div className="bg-gradient-to-t from-blue-400 via-cyan-300 to-purple-400 flex flex-col gap-y-4 py-4 container mx-auto items-center max-w-xs rounded-md shadow-xl ">
                <h1 className="text-center font-bold text-xl tracking-widest">Cryptocurrency By Market Cap</h1>
                <h1 className="font-normal"><span className="text-gray-500 font-bold tracking-wider">Currency =</span> <span className="uppercase font-bold text-xl">{currencyIcon} {currency}</span></h1>
            </div>


            <div className="flex flex-col px-4">
                {
                    (loadingStatus) && <div className="flex flex-col items-center">
                        <img src="/images/LoadingGif.gif" className="h-12 w-20 rounded-full"></img>
                    </div>
                }


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