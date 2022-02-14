import React from "react";

function IconBtnSize() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Icon Buttons Size</h6>
          <div className="m-n2">
            <button
              type="button"
              className="btn btn-lg btn-lg-square btn-primary m-2"
            >
              <i className="fa fa-home"></i>
            </button>
            <button
              type="button"
              className="btn btn-lg btn-lg-square btn-outline-primary m-2"
            >
              <i className="fa fa-home"></i>
            </button>
            <button type="button" className="btn btn-square btn-primary m-2">
              <i className="fa fa-home"></i>
            </button>
            <button
              type="button"
              className="btn btn-square btn-outline-primary m-2"
            >
              <i className="fa fa-home"></i>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-sm-square btn-primary m-2"
            >
              <i className="fa fa-home"></i>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-sm-square btn-outline-primary m-2"
            >
              <i className="fa fa-home"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default IconBtnSize;
