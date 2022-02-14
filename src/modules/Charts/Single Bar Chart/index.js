import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Italy", "France", "Spain", "USA", "Argentina"];

export const data = {
  labels,
  datasets: [
    {
      backgroundColor: [
        "rgba(0, 156, 255, .7)",
        "rgba(0, 156, 255, .6)",
        "rgba(0, 156, 255, .5)",
        "rgba(0, 156, 255, .4)",
        "rgba(0, 156, 255, .3)",
      ],
      data: [55, 49, 44, 24, 15],
    },
  ],
  options: {
    responsive: true,
  },
  
};

export function SingleBarChart() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Single Bar Chart</h6>
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
}
