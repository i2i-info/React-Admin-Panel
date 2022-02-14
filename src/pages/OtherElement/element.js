import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicAlerts from "./Basic Alerts";
import IconsAlerts from "./Icons & Dismissing Alerts";
import BasicAccordion from "./Basic Accordion";
import FlushAccordion from "./Flush Accordion";
import BasicNavsTabs from "./Basic Navs & Tabs";
import PillsNavsTabs from "./Pills Navs & Tabs";
import ProgressBar from "./Progress Bar";

function Element() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <BasicAlerts />
          <IconsAlerts />
          <BasicAccordion />
          <FlushAccordion />
          <BasicNavsTabs />
          <PillsNavsTabs />
          <ProgressBar />
        </div>
      </div>
    </>
  );
}

export default Element;
