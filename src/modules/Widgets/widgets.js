/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import Messages from "../../Components/Messages/messages";
import Calendar from "../../Components/Calendar/Calendar";
import ToDoList from "../../Components/To Do List/ToDoList";
import Client1 from "../../assets/image/testimonial-1.jpg";
import Client2 from "../../assets/image/testimonial-2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Widgets() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <Messages />
          <Calendar />
          <ToDoList />
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Testimonial</h6>

              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner ">
                  <div
                    className="carousel-item active text-center"
                    data-bs-interval="500"
                  >
                    <img
                      src={Client1}
                      className="img-fluid rounded-circle mx-auto mb-4 "
                      alt="Client1"
                    />
                    <h5 className="mb-1">Client Name</h5>
                    <p>Profession</p>
                    <p className="mb-0">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </p>
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={Client2}
                      className="img-fluid rounded-circle mx-auto mb-4"
                      alt="Client1"
                    />
                    <h5 className="mb-1">Client Name</h5>
                    <p>Profession</p>
                    <p className="mb-0">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <iframe
                style={{ height: "100%", width: "100%" }}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20York+(My%20Business%20Name)&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/golf-gps/">golf gps watch</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Widgets;
