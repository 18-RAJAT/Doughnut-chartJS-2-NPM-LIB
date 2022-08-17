import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], //X
    datasets: [
      {
        label: "Sales for 2021 (M)",
        data: [3, 5, 2, 1, 4],
        backgroundColor: [
          "rgba(255, 99, 102, 1)",
          "rgba(255, 205, 88, 1)",
          "rgba(54, 162, 233, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
      //   {
      //     label: "Sales for 2020 (M)",
      //     data: [1, 2, 4, 3, 5],
      //     backgroundColor: [
      //       "rgba(255, 40, 174, 1)",
      //       "rgba(205, 190, 110, 1)",
      //       "rgba(60, 96, 255, 1)",
      //       "rgba(200, 80, 140, 1)",
      //       "rgba(220, 100, 74, 1)",
      //     ],
      //   },
    ],
  };

  // for yAxes step size and title
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;