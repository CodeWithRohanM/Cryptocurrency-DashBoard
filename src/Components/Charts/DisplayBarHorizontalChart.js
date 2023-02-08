import { React, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";


const DisplayBarHorizontalChart = ({ chartData }) => {

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  // Fetching Store States
  const days = useSelector((state) => state.callListAPIReducer.days);
  const currency = useSelector((state) => state.callListAPIReducer.currency);

  // Default Duration Text
  let duration = "";


  // Conditions As Per The User Selection Of Days Duration Buttons (1Day, 7Days, 30Days, etc.)
  if (days === 1) {
    duration = "HOURLY";
  }

  if (days === 7) {
    duration = "DAILY";
  }
  else if (days === 30) {
    duration = "WEEKLY";
  }
  else if (days === 90) {
    duration = "MONTHLY";
  }
  else if (days === 180) {
    duration = "EVERY 3 MONTHS";
  }


  // Displaying Vertical Bar Chart
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