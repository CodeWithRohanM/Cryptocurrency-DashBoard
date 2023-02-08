import React, { useState } from "react";

// Importing Components From Sections Folder
import SearchBarSection from "./Sections/SearchBarSection";
import MainChartSection from "./Sections/MainChartSection";
import FooterSection from "./Sections/FooterSection";
import MarketCapListSection from "./Sections/MarketCap/MarketCapListSection";

const DashBoardUI = (props) => {

    return <>

        {/* Main Container */}
        <div className="bg-cyan-200 w-screen overflow-y-auto h-screen">

            <div className="bg-cyan-100 md:h-full w-full pt-6 container mx-auto rounded-xl antialiased flex-1">
                <div className="flex flex-col gap-y-8  md:flex-row h-full md:gap-x-4">
                    <div className="flex flex-col gap-y-8 md:gap-y-5 md:w-9/12 items-center lg:h-full ">
                        <SearchBarSection />
                        <MainChartSection chartData={props.chartData} />
                        <FooterSection />
                    </div>
                    <div className="md:w-3/12 ">
                        <MarketCapListSection />
                    </div>
                </div>
            </div>
        </div>

    </>



};

export default DashBoardUI;