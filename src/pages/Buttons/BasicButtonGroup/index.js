import React from "react";

function BasicButtonGroup() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Basic Button Group</h6>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
              Left
            </button>
            <button type="button" className="btn btn-primary">
              Middle
            </button>
            <button type="button" className="btn btn-primary">
              Right
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicButtonGroup;
