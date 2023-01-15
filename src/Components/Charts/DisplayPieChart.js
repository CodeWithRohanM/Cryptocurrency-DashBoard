import {React, useState} from "react";
import { Pie, Bar, Line} from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend } from "chart.js";

const DisplayPieChart = ({chartData}) =>{

  Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale, Legend);


  const coinData = useSelector((state)=> state.fetchAPI.coinData);
  const dispatch = useDispatch();


  // const [chartData, setChartData] = useState({
  //   labels: Data.map((curValue, index)=> curValue.userGain),

  //   datasets: [{
  //     label: "Chart Data",
  //     data: Data.map((curValue, index)=> curValue.userLost),
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
    <Pie
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


export default DisplayPieChart;