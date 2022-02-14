import React from "react";

function BackgroundColors() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Background Colors</h6>
          <div className="p-2 mb-2 bg-primary text-white">.bg-primary</div>
          <div className="p-2 mb-2 bg-secondary text-white">.bg-secondary</div>
          <div className="p-2 mb-2 bg-success text-white">.bg-success</div>
          <div className="p-2 mb-2 bg-danger text-white">.bg-danger</div>
          <div className="p-2 mb-2 bg-warning text-dark">.bg-warning</div>
          <div className="p-2 mb-2 bg-info text-dark">.bg-info</div>
          <div className="p-2 mb-2 bg-light text-dark">.bg-light</div>
          <div className="p-2 mb-2 bg-dark text-white">.bg-dark</div>
          <div className="p-2 mb-2 bg-body text-dark">.bg-body</div>
          <div className="p-2 mb-2 bg-white text-dark">.bg-white</div>
          <div className="p-2 mb-0 bg-transparent text-dark">
            .bg-transparent
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundColors;
