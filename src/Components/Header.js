import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return <>

        <div className="p-4 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 flex-1 flex items-center shadow-md ">

            <div className="flex flex-col gap-y-12 w-full justify-between items-center container mx-auto md:flex-row text-center antialiased">
                <div className="hover:scale-90 transition ease-in-out duration-300">
                    <a href="/">
                        <img src="/images/alma.png" alt="Logo_Img" className="h-12"></img>
                    </a>
                </div>


                <div className="flex flex-col gap-y-3 text-xl font-bold tracking-wider
                    md:flex-row md:gap-x-6">
                    <NavLink to="/" style={({isActive})=> ({
                        color: isActive? "blue" : "black",
                    })} className="hover:scale-95 transition ease-in-out duration-300">Home</NavLink>


                    <NavLink to="/trending" 
                    style={({isActive}) =>({
                        color: isActive ? "blue" : "black",
                    })}
                    className="hover:scale-95 transition ease-in-out duration-300">Trending Coins</NavLink>


                    <NavLink to="/info" style={({isActive})=>({
                        color: isActive ? "blue" : "black",
                    })}
                    className="hover:scale-95 transition ease-in-out duration-300">Coin Info</NavLink>


                </div>
            </div>
        </div>

    </>
};

export default Header;