import React from "react";

function RoundedButton() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Rounded Buttons</h6>
          <div className="m-n2">
            <button type="button" className="btn btn-primary rounded-pill m-2">
              Primary
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded-pill m-2"
            >
              Secondary
            </button>
            <button type="button" className="btn btn-success rounded-pill m-2">
              Success
            </button>
            <button type="button" className="btn btn-danger rounded-pill m-2">
              Danger
            </button>
            <button type="button" className="btn btn-warning rounded-pill m-2">
              Warning
            </button>
            <button type="button" className="btn btn-info rounded-pill m-2">
              Info
            </button>
            <button type="button" className="btn btn-light rounded-pill m-2">
              Light
            </button>
            <button type="button" className="btn btn-dark rounded-pill m-2">
              Dark
            </button>
            <button type="button" className="btn btn-link rounded-pill m-2">
              Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoundedButton;
