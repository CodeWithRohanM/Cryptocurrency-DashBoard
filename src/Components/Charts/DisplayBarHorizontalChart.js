import {React, useState} from "react";
import { Pie, Bar, Line} from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";

const DisplayBarHorizontalChart = ({chartData}) =>{

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  const coinData = useSelector((state)=> state.callListAPIReducer.coinData);
  const currency = useSelector((state)=> state.callListAPIReducer.currency);
  const dispatch = useDispatch();




  return <>
    <Bar
      data={chartData}
      options={{
        indexAxis: "y",
        x:{
          title:{
            display: true,
            text: currency,
            font:{
              weight: "bold",
              size: 12,
              color: "black",
            }
          }
        },
        y:{
          title:{
            display:true,
            text:"Datas",
            font:{
              weight: "bold",
              size: 12,
              color: "black",
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: "Price"
          },
        }
      }}
    />
  
  </>


};


export default DisplayBarHorizontalChart;