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

const labels = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

export const data = {
  labels,
  datasets: [
    {
      label: "Salse",
      fill: false,
      backgroundColor: "rgba(0, 156, 255, .3)",
      data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
    },
  ],
  options: {
    responsive: true,
  },
};

export function SingleLineChart() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Single Line Chart</h6>
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
