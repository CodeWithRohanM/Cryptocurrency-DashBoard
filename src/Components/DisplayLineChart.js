import {React, useState} from "react";
import { Pie, Bar, Line} from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";
import { Data } from "../Utils/Data";

const DisplayLineChart = ({chartData}) =>{

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  const coinData = useSelector((state)=> state.fetchAPI.coinData);
  const divisionNumber = useSelector((state)=> state.fetchAPI.divisionNumber);



  console.log("CoinData In DisplayLineChart -> ");
  console.log(coinData[0][1]);
  console.log(coinData.filter((curValue, index)=> (index % 12 === 0)).map((curValue, index)=> curValue[1]));
  const dispatch = useDispatch();


  // const [chartData, setChartData] = useState({
  //   labels: coinData.filter((curValue, index)=> (index > 0 && index % 12 === 0)).map((curValue, index)=>
  //     (new Date(curValue[0]).getHours() > 12) ? (new Date(curValue[0]).getHours() - 12 + "PM") : (
  //       (new Date(curValue[0]).getHours() === 0) ? "12 AM" : (new Date(curValue[0]).getHours() + "AM")
  //       )
  //   ),

  //   datasets: [{
  //     label: "Chart Data",
  //     data: coinData.filter((curValue, index)=> (index > 0 && index % 12 === 0)).map((curValue, index)=> curValue[1].toFixed(2)),
  //     backgroundColor: [
  //       "red",
  //       "blue",
  //       "gray",
  //       "yellow",
  //       "pink"
  //     ],
  //     borderWidth: 2,
  //     borderColor: "black",
  //   }
  //   ]
  // });






  return <>
    <Line
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020"
          },
        }
      }}
    />
  
  </>


};


export default DisplayLineChart;