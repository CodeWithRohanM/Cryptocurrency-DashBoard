import {React, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCryptoCoinName, getCurrency, setLoaderState, fetchList, setStatusMessage, setImageURL } from "../../Actions/actions";

const SearchBarSection = () => {
    const dispatch = useDispatch();

    const currency = useSelector((state)=> state.callListAPIReducer.currency);


    const [storeCoinName, setStoreCoinName] = useState("");

    //FUNCTIONS() 
    const sendCoinNameData = (event) => {
        if (event.key === "Enter") {
            dispatch(setStatusMessage(true));

            dispatch(getCryptoCoinName(storeCoinName.toLowerCase()));
            dispatch(setImageURL(storeCoinName.toLowerCase()));
            setStoreCoinName("");
        }

    }

    return <>

        <div id="serachBarLine" className="flex flex-row gap-x-4 w-full md:container md:mx-auto md:max-w-4xl">


            <select className="py-3 rounded-md text-center font-bold px-3 tracking-wider" onChange={(event) => {
                const getValue = event.target.value;
                dispatch(getCurrency(getValue));
                // dispatch(setLoaderState(true));
                // dispatch(fetchList(currency));
            }}>
                <option value="usd" selected>USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>

            <div className="flex flex-row gap-x-3 w-full rounded-md px-4 bg-white items-center">
                <div className="text-gray-400 text-xl text-center">
                    <i className="fa fa-search"></i>
                </div>
                <input id="myInput" type="text" className="w-full h-full px-3 text-gray-400 font-bold focus:outline-none tracking-wider" placeholder="Search By Coin Name.." value={storeCoinName} onChange={(event) => {
                    setStoreCoinName(event.target.value);
                }} onKeyDown={sendCoinNameData}></input>
            </div>

        </div>


    </>
};

export default SearchBarSection;