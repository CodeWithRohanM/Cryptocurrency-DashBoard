import {React, useState} from "react";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale } from "chart.js";
import { Pie} from "react-chartjs-2";
import { Data } from "../../Utils/Data";


const StaticChart = () => {

    Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale);

    const [chartDataStatic, setChartDataStatic] = useState({
        labels: Data.map((curValue, index) => curValue.userGain),

        datasets: [{
            label: "Chart Data",
            data: Data.map((curValue, index) => curValue.userLost),
            backgroundColor: [
                "red",
                "yellow",
                "green",
            ],
            datalabels:{
                text:"$252",
            },
            borderWidth: 2,
            borderColor: "black",
        }
        ]
    });

    return <>

            <Pie
                data={chartDataStatic}
                options={{
                    plugins: {
                        datalabels:{
                            display:true
                        },
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        },
                        legend: {
                            display: false,
                          }
                    }
                }}
            />


    </>
};

export default StaticChart;


