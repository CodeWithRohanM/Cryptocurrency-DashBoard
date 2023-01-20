import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StaticChart from "../Charts/StaticChart";

const FooterSection = () => {
    const exchangeList = useSelector((state) => state.callListAPIReducer.exchangeList);
    const dispatch = useDispatch();






    const [buyName, setBuyName] = useState("eth");
    const [exchangeRate, setExchangeRate] = useState(13.61);
    const [exchangeNumber, setExchangeNumber] = useState();


    const fetchExchangeAPI = async () => {
        try {
            console.log("Buy = " + buyName);

            const getData = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${buyName}`);

            const getResponse = await getData.json();


            setExchangeRate(`${getResponse.bitcoin[buyName].toFixed(2) * exchangeNumber} ${buyName}`);
            console.log("Exchange = " + exchangeRate);
        } catch (err) {
            console.log(err);
        }

    }












    return <>
        <div className="h-fit md:h-56 flex flex-row gap-x-4 container mx-auto md:max-w-4xl ">


            <div className="flex bg-white rounded-md px-3 items-center md:px-6 md:gap-x-6 md:py-4 flex-1 flex-row justify-between">



                <div className="flex flex-col items-center gap-y-4 bg-red-300">
                    <h1 className="font-bold text-lg tracking-wider">Portfolio</h1>

                    <div className="h-40 w-40 items-center px-4">
                        {/* <PieChart chartData={props.chartDataStatic} /> */}
                        <StaticChart />
                    </div>
                </div>



                <div className="flex flex-col gap-y-4 bg-blue-300 items-center">

                    <h1 className="font-bold tracking-wider"><span className="text-gray-400 font-bold tracking-wider">Total Value:</span> $1000</h1>

                    <div className="flex flex-col gap-y-4">
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







            <div className="flex w-1/2 bg-white rounded-md px-3 flex-col gap-y-5 md:gap-y-5 md:px-5 md:py-4 flex-1 tracking-wider">

                <div className="flex flex-row gap-x-5 justify-between bg-red-300">

                    <div className="flex flex-col gap-y-6 w-1/2 bg-yellow-300 text-center md:text-left">


                        <h1 className="font-bold text-lg ">Exchange Coins</h1>



                        <div className="flex flex-col gap-y-4">

                            <div className="flex flex-row justify-between items-center">
                                <h1 className="text-red-500 font-bold">Sell</h1>
                                <select className="md:w-28 text-center p-2 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 rounded-md">
                                    <option selected>BitCoin</option>

                                </select>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <h1 className="text-gray-500 font-bold">Buy</h1>
                                <select className="md:w-28 text-center py-2 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 rounded-md" onChange={(event) => { setBuyName(event.target.value) }}>
                                    <option selected>Ethereum</option>
                                    {
                                        exchangeList.map((curValue, index) => {
                                            return <>
                                                <option value={curValue}>{curValue.toUpperCase()}</option>

                                            </>
                                        })
                                    }

                                </select>

                            </div>


                        </div>

                    </div>


                    <div className="flex flex-col gap-y-4 w-1/2 ">

                        <div className="flex flex-col gap-y-4 w-full">
                            <h1 className="text-gray-500 text-center">Your Avl. Balances</h1>
                            <input type="text" value={exchangeNumber} placeholder="Enter Amount.." className="border-gray-400 py-2 rounded-md px-2 border-2 font-bold text-md w-full" onChange={(event) => setExchangeNumber(event.target.value)}></input>
                        </div>

                        <input type="text" value={`Avl. ${exchangeRate}`} className="border-gray-400 py-2 rounded-md px-2 border-2 font-bold text-sm"></input>


                    </div>

                </div>



                <div className="flex justify-center">
                    <button type="button" className="bg-blue-500 text-white font-bold rounded-md px-4 py-2 hover:-translate-y-1 hover:scale-110 active:scale-90 duration-300" onClick={fetchExchangeAPI}>Exchange</button>
                </div>

            </div>

        </div>

    </>
};

export default FooterSection;