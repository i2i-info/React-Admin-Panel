import React from "react";

function BasicButton() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Basic Buttons</h6>
          <div className="m-n2">
            <button type="button" className="btn btn-primary m-2">
              Primary
            </button>
            <button type="button" className="btn btn-secondary m-2">
              Secondary
            </button>
            <button type="button" className="btn btn-success m-2">
              Success
            </button>
            <button type="button" className="btn btn-danger m-2">
              Danger
            </button>
            <button type="button" className="btn btn-warning m-2">
              Warning
            </button>
            <button type="button" className="btn btn-info m-2">
              Info
            </button>
            <button type="button" className="btn btn-light m-2">
              Light
            </button>
            <button type="button" className="btn btn-dark m-2">
              Dark
            </button>
            <button type="button" className="btn btn-link m-2">
              Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicButton;
