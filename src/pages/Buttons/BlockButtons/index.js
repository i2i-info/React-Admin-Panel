import React from "react";

function BlockButton() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Block Buttons</h6>
          <div className="m-n2">
            <button className="btn btn-primary w-100 m-2" type="button">
              Button
            </button>
            <button className="btn btn-outline-primary w-100 m-2" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlockButton;
