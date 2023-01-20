import { React, useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";


const DisplayBarHorizontalChart = ({ chartData }) => {

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  const days = useSelector((state)=> state.callListAPIReducer.days);
  const currency = useSelector((state) => state.callListAPIReducer.currency);
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
    <Bar
      data={chartData}
      options={{
        indexAxis: "y",
        scales: {
          x: {
            title: {
              display: true,
              text: currency.toUpperCase(),
              font: {
                weight: "bold",
                size: 12,
                color: "black",
              }
            }
          },
          y: {
            title: {
              display: true,
              text: duration,
              font: {
                weight: "bold",
                size: 12,
                color: "black",
              }
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