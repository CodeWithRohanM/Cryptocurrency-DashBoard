import { React, useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";
import { Data } from "../../Utils/Data";

const DisplayBarChart = ({ chartData }) => {

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  const coinData = useSelector((state) => state.callListAPIReducer.coinData);
  const currency = useSelector((state) => state.callListAPIReducer.currency);
  const dispatch = useDispatch();









  return <>
    <Bar
      data={chartData}
      options={{
        scales:{
          x:{
            title:{
              display: true,
              text:"DURATION",
              font:{
                size: 12,
                weight:"bold",
                color: "black",
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
            text: "Price"
          },
        }
      }}
    />

  </>


};


export default DisplayBarChart;