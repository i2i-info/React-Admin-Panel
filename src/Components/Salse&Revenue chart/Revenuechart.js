import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

export const data = {
  labels,
  datasets: [
    {
      label: "Salse",
      data: [15, 30, 55, 45, 70, 65, 85],
      backgroundColor: "rgba(0, 156, 255, .5)",
      fill: true,
    },
    {
      label: "Revenue",
      data: [99, 135, 170, 130, 190, 180, 270],
      backgroundColor: "rgba(0, 156, 255, .3)",
      fill: true,
    },
  ],
  options: {
    responsive: true,
  },
};

export function RevenueChart() {
  return <Line options={options} data={data} />;
}
