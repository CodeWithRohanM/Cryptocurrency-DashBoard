import React, { useEffect } from "react";
import axios from "axios";

const ExchangeCoins = () =>{


    const fetchExchangeListAPI = async () =>{
        try{
            const getData = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
            const getResponse = await getData.json();
            const arrayData = [getResponse.rates];
            console.log(arrayData[0].bch);

        }catch(err){
            console.log(err);
        }

    };




    useEffect((curValue)=>{
        fetchExchangeListAPI();

    },[]);

    return <>

    
    
    
    </>
};

export default ExchangeCoins;