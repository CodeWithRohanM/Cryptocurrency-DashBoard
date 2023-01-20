import {React, useState} from "react";
import { Chart, ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale } from "chart.js";
import { Pie} from "react-chartjs-2";
import { Data } from "../../Utils/Data";
import ChartDataLabels from 'chartjs-plugin-datalabels';


const StaticChart = () => {

    Chart.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, Tooltip, LinearScale);

    const [chartDataStatic, setChartDataStatic] = useState({
        labels: "",

        datasets: [{
            label: "Amount",
            data: Data.map((curValue, index) => curValue.userLost),
            backgroundColor: [
                "red",
                "yellow",
                "green",
            ],
            borderWidth: 2,
            borderColor: "black",
        }
        ]
    });

    return <>

            <Pie
                plugins={[ChartDataLabels]}
                data={chartDataStatic}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Portfolio"
                        },
                        legend: {
                            display: false,
                          },

                          datalabels: { // This code is used to display data values
                            display:true,
                            color: "black",
                            // anchor: 'end',
                            // align: 'top',
                            // formatter: Math.round,
                            font: {
                                weight: 'bold',
                                size: 16
                            }
                        }

                    }
                }}
            />


    </>
};

export default StaticChart;


