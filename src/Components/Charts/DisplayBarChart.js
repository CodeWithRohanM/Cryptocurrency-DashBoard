import { React, useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";
import { Data } from "../../Utils/Data";

const DisplayBarChart = ({ chartData }) => {

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  const coinData = useSelector((state) => state.fetchAPI.coinData);
  const dispatch = useDispatch();


  // const [chartData, setChartData] = useState({
  //   labels: coinData.filter((curValue, index) => (index > 0 && index % 12 ===0)).map((curValue, index)=> new Date(curValue[0]).getHours()),

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
    <Bar
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


export default DisplayBarChart;