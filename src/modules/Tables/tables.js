import React, { Fragment } from "react";
import { tableHeading, tableBody, tableData } from "../../utils/constant";

function Tables() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          {tableData.map((data, index) => {
            return (
              <>
                <div className="col-sm-12 col-xl-6" key={index}>
                  <div className="bg-light rounded h-100 p-4">
                    <h6 className="mb-4">{data.tableName}</h6>
                    <table className={data.className}>
                      <thead>
                        <tr>
                          <th scope="col">{data.hash}</th>
                          <th scope="col">{data.fname}</th>
                          <th scope="col">{data.lname}</th>
                          <th scope="col">{data.idType}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.no}</th>
                          <td>{data.firstname}</td>
                          <td>{data.lastname}</td>
                          <td>{data.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">{data.no}</th>
                          <td>{data.firstname}</td>
                          <td>{data.lastname}</td>
                          <td>{data.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">{data.no}</th>
                          <td>{data.firstname}</td>
                          <td>{data.lastname}</td>
                          <td>{data.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            );
          })}

          <div className="col-12">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Responsive Table</h6>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      {tableHeading.map((data, index) => {
                        return (
                          <Fragment key={index}>
                            <th scope="col">{data}</th>
                          </Fragment>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tableBody.map((data, index) => {
                      return (
                        <Fragment key={index}>
                          <tr>
                            <th scope="row">{data.no}</th>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.email}</td>
                          </tr>
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;
