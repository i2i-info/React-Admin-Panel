import React from "react";

function IconTextButton() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Icon & Text Buttons</h6>
          <div className="m-n2">
            <button type="button" className="btn btn-primary m-2">
              <i className="fa fa-home me-2"></i>Icon Left
            </button>
            <button type="button" className="btn btn-outline-primary m-2">
              <i className="fa fa-home me-2"></i>Icon Left
            </button>
            <button type="button" className="btn btn-primary m-2">
              Icon Right<i className="fa fa-home ms-2"></i>
            </button>
            <button type="button" className="btn btn-outline-primary m-2">
              Icon Right<i className="fa fa-home ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconTextButton;
