import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return <>

        <div className="h-20 bg-gradient-to-t from-blue-300 via-cyan-300 to-purple-300 flex-1 flex items-center shadow-md">

            <div className="flex flex-col gap-y-12 
md:flex-row 
justify-between items-center container mx-auto">
                <div>
                    <NavLink to="/">
                        <img src="/images/alma.png" alt="Logo_Img" className="h-12"></img>
                    </NavLink>
                </div>


                <div className="flex flex-col gap-y-3 text-xl font-bold tracking-wider
md:flex-row md:gap-x-6">
                    <NavLink to="/"><h1>Home</h1></NavLink>
                    <NavLink to="/trending"> <h1>Trending Coins</h1></NavLink>
                    <h1>Articles</h1>
                    <h1>Conatct Us</h1>
                </div>
            </div>
        </div>

    </>
};

export default Header;