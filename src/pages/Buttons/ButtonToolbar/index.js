import React from "react";

function ButtonToolbar() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Button Toolbar</h6>
          <div className="btn-toolbar" role="toolbar">
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-primary">
                1
              </button>
              <button type="button" className="btn btn-primary">
                2
              </button>
              <button type="button" className="btn btn-primary">
                3
              </button>
              <button type="button" className="btn btn-primary">
                4
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-secondary">
                5
              </button>
              <button type="button" className="btn btn-secondary">
                6
              </button>
              <button type="button" className="btn btn-secondary">
                7
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-info">
                8
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonToolbar;
