import React from "react";

function ButtonSize() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Buttons Size</h6>
          <div className="m-n2">
            <button type="button" className="btn btn-lg btn-primary m-2">
              Large Button (btn-lg)
            </button>
            <button type="button" className="btn btn-lg btn-secondary m-2">
              Large Button (btn-lg)
            </button>
            <button type="button" className="btn btn-sm btn-primary m-2">
              Small Button (btn-sm)
            </button>
            <button type="button" className="btn btn-sm btn-secondary m-2">
              Small Button (btn-sm)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonSize;
