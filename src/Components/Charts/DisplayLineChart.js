import {React, useState} from "react";
import { Pie, Bar, Line} from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";
import { Data } from "../../Utils/Data";

const DisplayLineChart = ({chartData}) =>{

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  const coinData = useSelector((state)=> state.callListAPIReducer.coinData);
  const divisionNumber = useSelector((state)=> state.callListAPIReducer.divisionNumber);
  const currency = useSelector((state)=> state.callListAPIReducer.currency);
  const days = useSelector((state)=> state.callListAPIReducer.days);
  const dispatch = useDispatch();

  let duration = "";

  if(days === 1)
  {
    duration = "HOURLY";
  }

  if(days === 7)
  {
    duration = "DAILY";
  }
  else if(days === 30)
  {
    duration = "WEEKLY";
  }
  else if(days === 90)
  {
    duration = "MONTHLY";
  }
  else if(days === 180)
  {
    duration = "EVERY 3 MONTHS";
  }

  return <>
    <Line
      data={chartData}
      options={{
        scales:{
          x:{
            title:{
              display: true,
              text: duration,
              font:{
                color: "black",
                weight:"bold",
                size: 12
              }
            }
          },
          y:{
            title:{
              display: true,
              text:currency.toUpperCase(),
              font:{
                size: 12,
                color: "black",
                weight: "bold"
              }
            }
          }
        },
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