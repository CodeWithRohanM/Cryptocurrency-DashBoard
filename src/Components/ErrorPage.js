import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const ErrorPage = () => {


    return <>
    <Header/>
        <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
        <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:px-20 overflow-hidden relative">
            <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div class="w-full md:w-1/2">

                    <div class="mb-10 md:mb-20 text-gray-600 font-light">
                        <h1 class="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
                        <p>The page you're looking for isn't available.</p>
                        <p>Try searching again or use the Go Back button below.</p>
                    </div>
                    <div class="mb-20 md:mb-0">
                        <NavLink to="/" class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"><i class="mdi mdi-arrow-left mr-2"></i>Go Back</NavLink>
                    </div>
                </div>
                <div class="w-full md:w-1/2 text-center">
                <img src="/images/error.png"></img>
                    <a href="https://www.freepik.com/vectors/business" target="_blank" class="text-xs text-gray-300">Business vector created by pikisuperstar - www.freepik.com</a>
                </div>
            </div>
            <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div class="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>

        <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
                <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                    <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                </a>
            </div>
        </div>

    </>
};

export default ErrorPage;