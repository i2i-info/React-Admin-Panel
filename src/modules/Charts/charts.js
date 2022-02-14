import React from "react";
import { SingleLineChart } from "./Single Line Chart";
import { RevenueChart } from "../../Components/Salse&Revenue chart/Revenuechart";
import { SingleBarChart } from "./Single Bar Chart";
import { Worldwide } from "../../Components/worldwidechart/worldwide";
import { PieChart } from "./Pie Chart";
import { DoughnutChart } from "./Doughnut Chart";

function Charts() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <SingleLineChart />
          <div className="col-sm-12 col-md-6 col-xl-4">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Multiple Line Chart</h6>
              <RevenueChart />
            </div>
          </div>
          <SingleBarChart />
          <div className="col-sm-12 col-md-6 col-xl-4">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Multiple Bar Chart</h6>
              <Worldwide />
            </div>
          </div>
          <PieChart />
          <DoughnutChart />
        </div>
      </div>
    </>
  );
}

export default Charts;
