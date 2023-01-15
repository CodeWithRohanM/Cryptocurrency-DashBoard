import React, { useEffect, useState } from "react";
import axios from "axios";

const ExchangeCoins = () => {


    // const fetchExchangeListAPI = async () =>{
    //     try{
    //         const getData = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
    //         const getResponse = await getData.json();
    //         const arrayData = [getResponse.rates];
    //         console.log(arrayData[0].bch);

    //     }catch(err){
    //         console.log(err);
    //     }

    // };




    // useEffect((curValue)=>{
    //     fetchExchangeListAPI();

    // },[]);


    const [list, setList] = useState(["Apple", "Balala", "PineAppple"]);


    return <>



















        <div className="flex flex-col items-center pt-20">
            <button id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => {
                document.getElementById("dropdownUsers").style.display = "block";
            }}>Project users <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


            <div id="dropdownUsers" className="hidden z-10 hidden bg-white rounded shadow w-60 dark:bg-gray-700">
                <ul className="h-48 py-1 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton" >
                    {
                        list.map((curValue, index) => {
                            return <>
                                <li id={index} onClick={(event) => {
                                    console.log(event.target.id);
                                }} className="bg-yellow-300 rounded-md font-bold tracking-wider flex flex-row">

                                    <img className="w-6 h-6 mr-2 rounded-full" src="/images/green_dot.png" alt="Jese image" />
                                    {curValue}
                                </li>
                            </>
                        })
                    }


                </ul>
            </div>



        </div>

    </>

};

export default ExchangeCoins;