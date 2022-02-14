import React from "react";

function RadioButton() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Radio Button Group</h6>
          <div className="btn-group" role="group">
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              checked
            />
            <label className="btn btn-outline-primary" for="btnradio1">
              Radio 1
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" for="btnradio2">
              Radio 2
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" for="btnradio3">
              Radio 3
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default RadioButton;
