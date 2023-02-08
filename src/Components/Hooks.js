import React, { useState, useEffect } from "react";

const Hooks = () => {
    const [firstName, setFirstName] = useState("Christiano");
    const [loader, setLoader] = useState(false);
    const [names, setNames] = useState(["Ronaldo", "Messi", "Neymar", "Mbappe", "Zlatan"]);
    const [displayNames, setDisplayNames] = useState([]);
    const [counter, setCounter] = useState(0);



    const showList = () => {

    }


    useEffect(() => {
        let index = 0;
        let getInterval = setInterval(() => {
            if (index === names.length - 1) {
                clearInterval(getInterval);
                return;
            }

            setDisplayNames(prevValue => [...prevValue, names[index]]);
            index += 1;

        }, 1000);
    }, [names]);




    return <>
        <div className="flex flex-col gap-y-12 items-center justify-center bg-cyan-300 container mx-auto rounded-xl p-12 h-screen">
            <button type="button" className="bg-red-400 text-white font-bold text-xl text-center tracking-wider rounded-md shadow-2xl px-4 py-2 hover:scale-110 hover:-translate-y-2 transition ease-in-out duration-300 active:scale-90 " onClick={() => {
                setLoader(true);
                if (firstName === "Christiano") {
                    setTimeout(() => {
                        setFirstName("Ronaldo");
                        setLoader(false);
                    }, 2000);
                }
                else {
                    setTimeout(() => {
                        setFirstName("Christiano")
                        setLoader(false);
                    }, 2000);
                }

            }}>Toggle Click</button>

            {
                loader && <h1 className="items-center text-2xl font-bold text-red-400 tracking-wider">Loading..</h1>
            }
            {
                !loader && <h1 className="text-2xl text-black font-normal tracking-widest">{firstName}</h1>
            }


            <button type="button" className="px-16 py-3 rounded-md bg-blue-400 text-white text-3xl font-bold text-center tracking-wider hover:scale-105 transition ease-in-out duration-200" onClick={showList}>

                Get List</button>

                <div className="grid grid-cols-3 gap-x-4 gap-y-4 ">
                {
                displayNames.map((curValue, index) => {
                    return <h1 className="px-4 py-2 bg-red-400 text-white font-bold tracking-wider rounded-md shadow-xl">{curValue}</h1>
                })
            }


                </div>




        </div>

    </>
};

export default Hooks;