import React from "react";

function OutlineButton() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Outline Buttons</h6>
          <div className="m-n2">
            <button type="button" className="btn btn-outline-primary m-2">
              Primary
            </button>
            <button type="button" className="btn btn-outline-secondary m-2">
              Secondary
            </button>
            <button type="button" className="btn btn-outline-success m-2">
              Success
            </button>
            <button type="button" className="btn btn-outline-danger m-2">
              Danger
            </button>
            <button type="button" className="btn btn-outline-warning m-2">
              Warning
            </button>
            <button type="button" className="btn btn-outline-info m-2">
              Info
            </button>
            <button type="button" className="btn btn-outline-light m-2">
              Light
            </button>
            <button type="button" className="btn btn-outline-dark m-2">
              Dark
            </button>
            <button type="button" className="btn btn-outline-link m-2">
              Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OutlineButton;
