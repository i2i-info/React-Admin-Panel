/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import Calendar from "../../Components/Calendar/Calendar";
import Messages from "../../Components/Messages/messages";
import { RevenueChart } from "../../Components/Salse&Revenue chart/Revenuechart";
import ToDoList from "../../Components/To Do List/ToDoList";
import { Worldwide } from "../../Components/worldwidechart/worldwide";
import { saleData, recentSalesData } from "../../utils/constant";

function Dashbord() {
  return (
    <>
      {/* <!-- Sale & Revenue Start --> */}
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          {saleData.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="col-sm-6 col-xl-3">
                  <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                    {item.icon}
                    <div className="ms-3">
                      <p className="mb-2">{item.days}</p>
                      <h6 className="mb-0">{item.rate}</h6>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      {/* <!-- Sale & Revenue End --> */}

      {/* <!-- Sales Chart Start --> */}
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Worldwide Sales</h6>
                <a href="#">Show All</a>
              </div>
              <Worldwide />
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Salse & Revenue</h6>
                <a href="#">Show All</a>
              </div>
              <RevenueChart />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sales Chart End --> */}

      {/* <!-- Recent Sales Start --> */}
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Recent Salse</h6>
            <a href="">Show All</a>
          </div>
          <div className="table-responsive">
            <table className="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr className="text-dark">
                  <th scope="col">
                    <input className="form-check-input" type="checkbox" />
                  </th>
                  <th scope="col">Date</th>
                  <th scope="col">Invoice</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentSalesData.map((data, index) => {
                  return (
                    <Fragment key={index}>
                      <tr>
                        <td>{data.checkbox}</td>
                        <td>{data.date}</td>
                        <td>{data.invoice}</td>
                        <td>{data.customer}</td>
                        <td>{data.amount}</td>
                        <td>{data.status}</td>
                        <td>
                          <a className="btn btn-sm btn-primary" href="">
                            {data.action}
                          </a>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Recent Sales End --> */}

      {/* <!-- Widgets Start --> */}
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <Messages />
          <Calendar />
          <ToDoList />
        </div>
      </div>
      {/* <!-- Widgets End --> */}
    </>
  );
}

export default Dashbord;
