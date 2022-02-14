/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light rounded-top p-4">
          <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-start">
              &copy; <a href="#">React Admin Panel</a>, All Right Reserved.
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-end">
              Distributed By{" "}
              <a className="border-bottom" href="https://www.i2i-info.com/">
                I2I-Infotech
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
