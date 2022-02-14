import React from "react";
import { ProgressBar } from "react-bootstrap";

function ProgressBars() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Progress Bar</h6>
          <div className="pg-bar mb-3">
            <ProgressBar striped now={10} />
          </div>
          <div className="pg-bar mb-3">
            <ProgressBar striped variant="success" now={25} />
          </div>
          <div className="pg-bar mb-3">
            <ProgressBar striped variant="info" now={50} />
          </div>
          <div className="pg-bar mb-3">
            <ProgressBar striped variant="warning" now={75} />
          </div>
          <div className="pg-bar mb-0">
            <ProgressBar striped variant="danger" now={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBars;
