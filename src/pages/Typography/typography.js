import React from "react";
import BackgroundColors from "./Background Colors";
import BasicListGroup from "./Basic List Group";
import Blockquotes from "./Blockquotes";
import DescriptionList from "./Description List";
import DisplayHeadings from "./Display Headings";
import FlushListGroup from "./Flush List Group";
import Headings from "./Headings";
import TextElements from "./Text Elements";
import TextColors from "./TextColors";
import UnstyledList from "./Unstyled List";

function Typography() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <BackgroundColors />
          <TextColors />
          <Headings />
          <DisplayHeadings />
          <TextElements />
          <Blockquotes />
          <UnstyledList />
          <DescriptionList />
          <BasicListGroup />
          <FlushListGroup />
        </div>
      </div>
    </>
  );
}

export default Typography;
