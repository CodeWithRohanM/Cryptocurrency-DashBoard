import React from "react";

const App = () => {

  return <>

    <div className="p-8 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 flex-1">

      <div className="flex flex-col gap-y-12 
      md:flex-row 
      justify-between items-center bg-yellow-300 container mx-auto">
        <div>
          <img src="" alt="Logo_Img"></img>
        </div>


        <div className="flex flex-col gap-y-3 text-xl font-bold
              md:flex-row md:gap-x-6">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Articles</h1>
          <h1>Conatct Us</h1>
        </div>
      </div>
    </div>





    <div className="bg-gray-200 py-6 h-screen">

      <div className="flex flex-row gap-x-4 h-full container mx-auto bg-yellow-300">

        <div className="flex flex-col gap-y-4 w-9/12 flex-1">

          <div id="serachBarLine" className="flex flex-row gap-x-4 bg-purple-500">
            <select className="bg-red-300 py-2 rounded-md">
              <option selected>CoinsList</option>
              <option>On1</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
            </select>

            <input type="text" className="w-full rounded-md px-2" placeholder="Enter Coin Name.."></input>

          </div>






          <div className="bg-red-400 h-full flex flex-col gap-y-5 container mx-auto max-w-4xl">



            <div className="flex flex-row h-3/5 justify-between items-start bg-blue-300">
              <div className="flex flex-row gap-x-4">
                <button className="bg-blue-500 px-4 py-2 rounded-md">1D</button>
                <button className="bg-blue-500 px-4 py-2 rounded-md">1W</button>
                <button className="bg-blue-500 px-4 py-2 rounded-md">1M</button>
                <button className="bg-blue-500 px-4 py-2 rounded-md">6M</button>
                <button className="bg-blue-500 px-4 py-2 rounded-md">1Y</button>
              </div>

              <div className="flex flex-row gap-x-4">

                <select className="py-2 rounded-md bg-white px-16">
                  <option selected>CryptoCurrency</option>
                  <option>One</option>
                  <option>Two</option>

                </select>

                <select className="py-2 rounded-md bg-white px-4">
                  <option selected>Chart Type</option>
                  <option>Bar Chart</option>
                  <option>Line Chart</option>
                  <option>Pie Chart</option>
                </select>

              </div>
            </div>



            <div className="h-fit bg-purple-400 flex flex-row gap-x-4 w-full">


              <div className="flex w-1/2 bg-white rounded-md flex-col px-12 gap-y-8 py-4 flex-1">


                <div className="flex flex-row justify-between">


                  <div className="flex flex-col items-center bg-yellow-200 gap-y-4">
                    <h1 className="font-bold text-lg">Portfolio</h1>
                    <h1>Pie Chart</h1>
                  </div>



                  <div className="flex flex-col gap-y-4">

                    <h1 className="font-bold"><span className="text-gray-400 font-bold">Total Value:</span> $1000</h1>

                    <div className="flex flex-col gap-y-4">
                      <h1>Tether</h1>
                      <h1>Luna</h1>
                      <h1>Ethereum</h1>
                    </div>

                  </div>

                </div>

              </div>







              <div className="flex w-1/2 bg-white rounded-md flex-col gap-y-8 px-10 py-4 flex-1">

                <div className="flex flex-row gap-x-4 justify-between">

                  <div className="flex flex-col gap-y-5">


                    <h1 className="font-bold text-lg">Exchange Coins</h1>



                    <div className="flex flex-col gap-y-4">

                      <div className="flex flex-row gap-x-4 items-center">
                        <h1 className="text-red-500">Sell</h1>
                        <select className="px-4 p-2 bg-gray-400 rounded-md">
                          <option selected>BitCoins</option>
                          <option>One</option>
                        </select>
                      </div>

                      <div className="flex flex-row gap-x-4 items-center">
                        <h1 className="text-gray-500">Buy</h1>
                        <select className="px-4 py-2 bg-gray-400 rounded-md">
                          <option selected>Eth</option>
                          <option>Two</option>
                        </select>

                      </div>


                    </div>

                  </div>


                  <div className="flex flex-col gap-y-9 px-4">

                    <div className="flex flex-col gap-y-2">
                      <h1 className="text-gray-500">Enter Value</h1>
                      <input type="text" placeholder="Avl: 0.00234 BTC" className="border-gray-400 py-2 rounded-md px-2 border-2 flex-1"></input>
                    </div>

                    <h1 className="text-gray-500 text-md px-4">230000eth</h1>


                  </div>

                </div>



                <div className="bg-yellow-300 flex justify-center">
                  <button type="button" className="bg-blue-500 text-white font-bold rounded-md px-4 py-2">Exchange</button>
                </div>

              </div>

            </div>



          </div>


        </div>






        <div className="w-3/12 bg-blue-300 flex flex-col gap-y-8 py-4">


          <h1 className="text-center">CryptoCurrency By Market Cap</h1>



          <div className="flex flex-col">

            <div className="flex flex-row justify-between bg-white rounded-md p-3 items-center text-sm pb-4 border-b-2 border-black ">

              <div className="flex flex-row gap-x-4 items-center">

              <img src="" alt="coinLogo" className="h-12 w-12"></img>

                <div className="flex flex-col gap-y-4">
                  <h1 className="font-bold">Tether</h1>
                  <h1 className="text-gray-400"><span className="text-gray-500 font-bold">Mark. Cap:</span> 3242947</h1>
                </div>

              </div>


              <h1>2347586</h1>

            </div>





          </div>
        </div>



      </div>



    </div>










  </>
};


export default App;