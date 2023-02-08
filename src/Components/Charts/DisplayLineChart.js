import { React, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";

const DisplayLineChart = ({ chartData }) => {

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);

  // Fetching Store States
  const currency = useSelector((state) => state.callListAPIReducer.currency);
  const days = useSelector((state) => state.callListAPIReducer.days);

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


  // Displaying Line Chart
  return <>
    <Line
      data={chartData}
      options={{
        scales: {
          x: {
            title: {
              display: true,
              text: duration,
              font: {
                color: "black",
                weight: "bold",
                size: 12
              }
            }
          },
          y: {
            title: {
              display: true,
              text: currency.toUpperCase(),
              font: {
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
            text: "Price"
          },
        }
      }}
    />

  </>


};


export default DisplayLineChart;