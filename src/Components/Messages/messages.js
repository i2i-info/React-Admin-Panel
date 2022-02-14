import React, { Fragment } from "react";
import { messageData } from "../../utils/constant";
function Messages() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-light rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="mb-0">Messages</h6>
            <a href="">Show All</a>
          </div>
          {messageData.map((data, index) => {
            return (
              <Fragment key={index}>
                <div className="d-flex align-items-center border-bottom py-3">
                  {data.image}
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">{data.name}</h6>
                      <small>{data.time}</small>
                    </div>
                    <span>{data.message}</span>
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

export default Messages;
