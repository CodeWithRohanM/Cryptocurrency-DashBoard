import { React, useState } from "react";
import StaticChart from "../Charts/StaticChart";

const FooterSection = () => {

    const [buyName, setBuyName] = useState("eth");
    const [exchangeRate, setExchangeRate] = useState(13.61);
    const [exchangeNumber, setExchangeNumber] = useState();

    const [exchangeList, setExchangeList] = useState([]);

    const [loading, setLoading] = useState(false);




    const fetchExchangeCurrencyList = async () => {
        try {

            const getData = await fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");
            const getResponse = await getData.json();

            setExchangeList(getResponse);


        }
        catch (err) {
            console.log(err);
        }
    };




    const fetchExchangeAPI = async () => {
        try {
            setLoading(true);
            console.log("Buy = " + buyName);

            const getData = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${buyName}`);

            const getResponse = await getData.json();


            setTimeout(() => {
                setExchangeRate(`${getResponse.bitcoin[buyName].toFixed(2) * exchangeNumber} ${buyName}`);
                setLoading(false);
            }, 2000);
            console.log("Exchange = " + exchangeRate);
        } catch (err) {
            console.log(err);
        }

    }












    return <>
        <div className="lg:h-56 flex flex-row gap-x-2 lg:gap-x-4 w-full ">


            <div className="flex rounded-md px-3 items-center lg:px-6 gap-x-3 lg:gap-x-6 lg:py-3 
            w-1/2 flex-row justify-between bg-white">



                <div className="flex flex-col items-center gap-y-2 lg:gap-y-4 w-1/2 lg:h-full">
                    <h1 className="font-bold text-lg tracking-wider">Portfolio</h1>

                    <div className="h-32 w-32 lg:h-40 lg:w-40 items-center px-4">
                        {/* <PieChart chartData={props.chartDataStatic} /> */}
                        <StaticChart />
                    </div>
                </div>



                <div className="flex flex-col gap-y-2 lg:gap-y-4 items-center w-1/2 lg:h-full lg:py-3">

                    <h1 className="font-bold tracking-wider w-full text-center text-md lg:text-xl lg:text-left "><span className="text-gray-400 font-bold tracking-wider">Total Value:</span> $1000</h1>

                    <div className="flex flex-col gap-y-2 lg:gap-y-4 w-full ">
                        <div className="flex flex-row gap-x-2 items-center">
                            <img src="/images/red_dot.png" className="h-3 w-3 tracking-wider"></img>
                            <h1>Tether</h1>
                        </div>
                        <div className="flex flex-row gap-x-2 items-center">
                            <img src="/images/yellow_dot.png" className="h-3 w-3 tracking-wider"></img>
                            <h1>Luna</h1>
                        </div>
                        <div className="flex flex-row gap-x-2 items-center">
                            <img src="/images/green_dot.png" className="h-3 w-3 tracking-wider"></img>
                            <h1>Ethereum</h1>
                        </div>
                    </div>

                </div>


            </div>







            <div className="flex w-1/2 rounded-md px-3 pt-2 flex-col gap-y-5 lg:gap-y-5 lg:px-5 lg:py-4 tracking-wider bg-white">

                <div className="flex flex-row gap-x-3 lg:gap-x-5 justify-between">

                    <div className="flex flex-col w-1/2 text-center lg:text-left justify-between">


                        <h1 className="font-bold text-md lg:text-lg text-center">Exchange Coins</h1>



                        <div className="flex flex-col gap-y-4 w-full">

                            <div className="flex flex-row justify-center sm:justify-between items-center w-full flex-wrap sm:flex-nowrap">
                                <h1 className="text-red-500 font-bold text-sm lg:text-lg">Sell</h1>
                                <select className="text-sm lg:text-lg text-center p-1 lg:p-2 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 rounded-md font-semibold text-black">
                                    <option selected>BitCoin</option>

                                </select>
                            </div>

                            <div className="flex flex-row justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap">
                                <h1 className="text-gray-500 text-sm lg:text-lg font-bold">Buy</h1>
                                <select className="text-sm lg:text-lg text-center p-1 lg:p-2 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 rounded-lg font-semibold text-black"
                                    onChange={(event) => {
                                        setBuyName(event.target.value);
                                    }}
                                    onClick={() => fetchExchangeCurrencyList()}>
                                    <option selected>Ethereum</option>
                                    {
                                        exchangeList.map((curValue, index) => {
                                            return <>
                                                <option key={index} value={curValue} >{curValue.toUpperCase()}</option>

                                            </>
                                        })
                                    }

                                </select>

                            </div>


                        </div>

                    </div>


                    <div className="flex flex-col gap-y-4 w-1/2">

                        <div className="flex flex-col gap-y-10 sm:gap-y-4 w-4/5 lg:w-full">
                            <h1 className="text-gray-500 text-center">Your Avl. Balances</h1>
                            <input type="text" value={exchangeNumber} placeholder="Enter Amount.." className="border-gray-400 p-1 lg:p-2 rounded-md border-2 font-bold text-md w-full text-xs sm:text-sm lg:text-md" onChange={(event) => setExchangeNumber(event.target.value)}></input>
                        </div>

                        {
                            loading && <input type="text" value={`Doing Exchanges..`} className="border-gray-400 p-1 lg:p-2 rounded-md border-2 text-gray-700 font-bold text-xs sm:text-sm"></input>
                        }
                        {
                            !loading && <input type="text" value={`Avl. ${exchangeRate}`} className="border-gray-400 p-1 lg:p-2 w-4/5 lg:w-full text-xs rounded-md border-2 font-bold lg:text-sm"></input>

                        }

                    </div>

                </div>



                <div className="flex justify-center">
                    <button type="button" className="bg-blue-500 text-white font-bold rounded-md px-2 lg:px-4 py-2 text-sm lg:text-lg hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={fetchExchangeAPI}>Exchange</button>
                </div>

            </div>

        </div>

    </>
};

export default FooterSection;