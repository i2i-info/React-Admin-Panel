import React, { Fragment } from "react";
import { todoList } from "../../utils/constant";
function ToDoList() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-light rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">To Do List</h6>
            <a href="">Show All</a>
          </div>
          <div className="d-flex mb-2">
            <input
              className="form-control bg-transparent"
              type="text"
              placeholder="Enter task"
            />
            <button type="button" className="btn btn-primary ms-2">
              Add
            </button>
          </div>
          {todoList.map((data, index) => {
            return (
              <Fragment key={index}>
                <div className="d-flex align-items-center border-bottom py-2">
                  {data.checkbox}
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>{data.task}</span>
                      <button className="btn btn-sm">{data.icon}</button>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToDoList;
