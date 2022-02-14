import React from "react";

function CheckButton() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Checkbox Button Group</h6>
          <div className="btn-group" role="group">
            <input
              type="checkbox"
              className="btn-check"
              id="btncheck1"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" for="btncheck1">
              Checkbox 1
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" for="btncheck2">
              Checkbox 2
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" for="btncheck3">
              Checkbox 3
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckButton;
