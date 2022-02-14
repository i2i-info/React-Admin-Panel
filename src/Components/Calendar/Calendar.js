import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

function Calendars() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-light rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Calendar</h6>
            <p>Show All</p>
          </div>
          <Calendar
            className="react-calendar"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </>
  );
}

export default Calendars;
