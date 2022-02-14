import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Italy", "France", "Spain", "USA", "Argentina"],
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

export function DoughnutChart() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Doughnut Chart</h6>
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
}
