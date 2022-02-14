import React from "react";

function MixedButtonGroup() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Mixed Button Group</h6>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-danger">
              Left
            </button>
            <button type="button" className="btn btn-warning">
              Middle
            </button>
            <button type="button" className="btn btn-success">
              Right
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MixedButtonGroup;
